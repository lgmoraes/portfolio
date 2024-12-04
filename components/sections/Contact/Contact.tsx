'use client';

import {
  Alert,
  Button,
  Card,
  Container,
  Input,
  Label,
  Textarea,
} from '@/components/';
import { ContactFormSchema, contactFormSchema } from '@/schemas/contactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = contactFormSchema;

export const Contact = () => {
  const { register, handleSubmit, formState } = useForm<ContactFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = async (data: ContactFormSchema) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('Email envoyé avec succès!');
    } else {
      alert("Erreur lors de l'envoi de l'email.");
    }
  };

  return (
    <Container className="max-w-lg">
      <h2>Contactez-moi</h2>
      <Card className="mt-20 p-6">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-1">
            <Label htmlFor="firstName" className="text-sm font-medium">
              Prénom
            </Label>
            <Input
              {...register('firstName')}
              id="firstName"
              placeholder="Votre prénom"
              className={errors.firstName ? 'border-red-500' : ''}
            />
            {errors.firstName && (
              <div>
                <Alert variant={'destructive'} className="mt-2">
                  {errors.firstName.message}
                </Alert>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="m-0 text-sm font-medium">
              Email
            </Label>
            <Input
              {...register('email')}
              id="email"
              placeholder="Votre email"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <div>
                <Alert variant={'destructive'} className="mt-2">
                  {errors.email.message}
                </Alert>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="block text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              {...register('message')}
              className={`w-full rounded border p-2 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Entrez votre message"
            ></Textarea>
            {errors.message && (
              <div>
                <Alert variant={'destructive'} className="mt-2">
                  {errors.message.message}
                </Alert>
              </div>
            )}
          </div>

          <Button type="submit">Envoyer</Button>
        </form>
      </Card>
    </Container>
  );
};
