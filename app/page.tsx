import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Présentation - Louis Moraes',
};

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-between">
      <p>HOME</p>
      <SpeedInsights />
    </main>
  );
}
