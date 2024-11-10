import { ScreenGrid } from '@/components/';
import portfolioData from '@/data/portfolio.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Louis Moraes',
};

export default function Portfolio() {
  return (
    <main className="flex grow flex-col items-center justify-between">
      <ScreenGrid data={portfolioData} />
    </main>
  );
}
