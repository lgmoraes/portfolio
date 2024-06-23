import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Louis Moraes',
};

export default function CV() {
  return (
    <main className="flex grow flex-col items-center justify-between">
      <p>CV</p>
    </main>
  );
}
