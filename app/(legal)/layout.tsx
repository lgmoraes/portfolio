import { Container } from '@/components/layout/Container/Container';

export default function Legal({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-grow flex-col bg-stone-200">
      <Container className="center flex max-w-4xl flex-grow flex-col bg-stone-50 p-8 sm:p-12 lg:p-16">
        {children}
      </Container>
    </main>
  );
}
