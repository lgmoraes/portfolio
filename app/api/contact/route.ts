import { contactFormSchema } from '@/schemas/contactForm';
import escape from 'escape-html';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

type ContactFormData = z.infer<typeof contactFormSchema>;

// Gestionnaire des erreurs
const handleError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return NextResponse.json(
      { error: 'Données de formulaire invalides', details: error.errors },
      { status: 400 },
    );
  }

  console.error("Erreur lors de l'envoi de l'email :", error);
  return NextResponse.json(
    { error: 'Erreur interne du serveur' },
    { status: 500 },
  );
};

export const POST = async (req: Request) => {
  try {
    // 1. Validation des variables d'environnement
    if (
      !process.env.OVH_EMAIL ||
      !process.env.OVH_PASSWORD ||
      !process.env.NEXT_PUBLIC_SITE_NAME ||
      !process.env.NEXT_PUBLIC_SITE_OWNER
    ) {
      throw new Error("Variables d'environnement manquantes");
    }

    // 2. Lire et valider les données
    const body = await req.json();
    const data = contactFormSchema.parse(body) as ContactFormData;

    // 3. Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.OVH_EMAIL,
        pass: process.env.OVH_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // 4. Vérification de la connexion SMTP
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Erreur de connexion SMTP:', error);
      return NextResponse.json(
        { error: 'Erreur de connexion au serveur mail' },
        { status: 500 },
      );
    }

    // 5. Construction du message
    const emailContent = {
      from: {
        name: process.env.NEXT_PUBLIC_SITE_OWNER,
        address: process.env.OVH_EMAIL,
      },
      to: process.env.OVH_EMAIL,
      replyTo: data.email,
      subject: `Nouveau message de ${data.firstName}`,
      text: `
        Nouveau message reçu de ${data.firstName} :
        
        Prénom: ${data.firstName}
        Email: ${data.email}
        
        Message:
        ${escape(data.message)}
        
        ---
        Cet email a été envoyé via le formulaire de contact de votre site web.
      `.trim(),
      html: `
        <h2>Nouveau message reçu de ${data.firstName}</h2>
        
        <p><strong>Prénom:</strong> ${data.firstName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        
        <h3>Message:</h3>
        <p>${escape(data.message).replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>Cet email a été envoyé via le formulaire de contact de votre site web.</small></p>
      `.trim(),
    };

    // 6. Envoi de l'email
    const info = await transporter.sendMail(emailContent);
    console.log('Message envoyé avec succès:', info.messageId);

    // 7. Réponse réussie
    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès!',
      messageId: info.messageId,
    });
  } catch (error) {
    return handleError(error);
  }
};
