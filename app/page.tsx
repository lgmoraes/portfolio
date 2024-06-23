import ScreenGrid from '@/components/screenGrid';
import portfolioData from '@/data/portfolio.json';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Présentation - Louis Moraes',
};

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-between">
      <ScreenGrid data={portfolioData} />
      <SpeedInsights />
    </main>
  );
}
