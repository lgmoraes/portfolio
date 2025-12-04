import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/navigation/Footer/Footer";
import { Header } from "@/components/navigation/Header/Header";
import "./globals.css";
import { ANALYTICS_ENABLED } from "@/infra/config/env-client";
import Analytics from "@/infra/observability/analytics";

export const metadata: Metadata = {
  description: "Portfolio de Louis Moraes, Developpeur web fullstack",
  icons: {
    icon: "/favicon.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />

        {ANALYTICS_ENABLED && <Analytics />}
      </body>
    </html>
  );
}
