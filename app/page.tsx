import ScreenGrid from '@/components/screenGrid';
import { Metadata } from 'next';
import portfolioData from '../data/portfolio.json';

export const metadata: Metadata = {
  title: 'Portfolio - Louis Moraes',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScreenGrid data={portfolioData} />
    </main>
  );
}
