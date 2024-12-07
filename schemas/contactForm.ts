import * as z from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Le prénom est obligatoire')
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
      'Le champ contient un caractère interdit',
    ),
  email: z.string().email("L'email est invalide"),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
