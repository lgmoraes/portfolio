import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Portfolio de Louis Moraes, Developpeur web fullstack',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex h-screen flex-col`}>
        <Header />
        <div className="flex grow flex-col">{children}</div>
      </body>
    </html>
  );
}
