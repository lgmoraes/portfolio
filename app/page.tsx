import { Row } from '@/components/layout/Row/Row';
import { Anchor } from '@/components/navigation/Header/Anchor';
import { Contact } from '@/components/sections/Contact/Contact';
import { Hero } from '@/components/sections/Hero/Hero';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Présentation - Louis Moraes',
};

const video1 = process.env.NEXT_PUBLIC_FILES_URL + 'videos/blue_waves';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Anchor id="home" />
      <Row fullPage video={video1} className="p-0 sm:px-0 lg:px-0">
        <Hero />
      </Row>
      <Anchor id="faq" />
      <Row fullPage className="bg-slate-50">
        FAQ
      </Row>
      <Anchor id="contact" />
      <Row fullPage className="bg-slate-100">
        <Contact />
      </Row>
      <SpeedInsights />
    </main>
  );
}
