import { Header } from '@/components/';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  description: 'Portfolio de Louis Moraes, Developpeur web fullstack',
  icons: {
    icon: '/favicon.svg',
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${montserrat.variable} font-sans`}
    >
      <body className={`${inter.className} dark flex h-screen flex-col`}>
        <Header />
        <div className="flex grow flex-col">{children}</div>
      </body>
    </html>
  );
}
