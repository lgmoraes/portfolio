'use client';

import { Container } from '@/components/layout/Container/Container';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est obligatoire'),
  email: z.string().email("L'email est invalide"),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
});

type IFormInput = z.infer<typeof formSchema>;

export const Contact = () => {
  const { register, handleSubmit, formState } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <Container>
      <form
        className="flex flex-col space-y-4 text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-sm font-medium">Votre nom</label>
        <input
          {...register('firstName')}
          placeholder="Votre prénom"
          className={errors.firstName ? 'border-red-500' : ''}
        />
        {errors.firstName && (
          <p className="text-sm text-red-500">{errors.firstName.message}</p>
        )}

        <label className="text-sm font-medium">Email</label>
        <input
          {...register('email')}
          placeholder="Votre email"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full rounded border p-2 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Entrez votre message"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button className="bg-slate-500" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
};
