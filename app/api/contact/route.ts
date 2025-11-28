import * as Sentry from "@sentry/nextjs";
import escapeHtml from "escape-html";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import company from "@/data/company.json";
import { isProd } from "@/infra/config/env-client";
import { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_USER } from "@/infra/config/env-server";
import { contactFormSchema } from "@/schemas/contactForm";

type ContactFormData = z.infer<typeof contactFormSchema>;

// Gestionnaire des erreurs
const handleError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return NextResponse.json(
      { error: "Données de formulaire invalides", details: error.issues },
      { status: 400 },
    );
  }

  console.error("Erreur lors de l'envoi de l'email :", error);
  Sentry.captureException(error);

  return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
};

export const POST = async (req: Request) => {
  try {
    // Validation des variables d'environnement
    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      throw new Error("Variables d'environnement manquantes");
    }

    // Lire et valider les données
    const body = await req.json();
    const data = contactFormSchema.parse(body) as ContactFormData;

    if (data.message.split(" ").length < 3) {
      // Simple check for very short messages
      console.warn("SPAM - Message trop court détecté: ", data.message);
      return NextResponse.json({});
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      tls: {
        minVersion: "TLSv1.2",
        servername: EMAIL_HOST,
        rejectUnauthorized: true,
      },
      connectionTimeout: isProd ? 8_000 : 20_000,
      greetingTimeout: isProd ? 8_000 : 20_000,
      socketTimeout: isProd ? 15_000 : 30_000,
    });

    // Vérification de la connexion SMTP
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Erreur de connexion SMTP:", error);
      return NextResponse.json(
        { error: "Erreur de connexion au serveur mail" },
        { status: 500 },
      );
    }

    // Construction du message
    const emailContent = {
      from: {
        name: company.owner,
        address: EMAIL_USER,
      },
      to: EMAIL_USER,
      replyTo: data.email,
      subject: `Nouveau message de ${data.firstName}`,
      text: `
        Nouveau message reçu de ${data.firstName} :
        
        Prénom: ${data.firstName}
        Email: ${data.email}
        
        Message:
        ${escapeHtml(data.message)}
        
        ---
        Cet email a été envoyé via le formulaire de contact de votre site web.
      `.trim(),
      html: `
        <h2>Nouveau message reçu de ${data.firstName}</h2>
        
        <p><strong>Prénom:</strong> ${data.firstName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        
        <h3>Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        
        <hr>
        <p><small>Cet email a été envoyé via le formulaire de contact de votre site web.</small></p>
      `.trim(),
    };

    // Envoi de l'email
    const info = await transporter.sendMail(emailContent);
    console.log("Message envoyé avec succès:", info.messageId);

    // Réponse réussie
    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès!",
      messageId: info.messageId,
    });
  } catch (error) {
    return handleError(error);
  }
};
