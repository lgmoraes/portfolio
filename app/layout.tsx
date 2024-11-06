import Header from '@/components/header';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Portfolio de Louis Moraes, Developpeur web fullstack',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nunito.className} dark flex h-screen flex-col`}>
        <Header />
        <div className="flex grow flex-col">{children}</div>
      </body>
    </html>
  );
}
