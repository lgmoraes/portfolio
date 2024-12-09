import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Hero = ({}: {}) => {
  return (
    <section className="flex h-content flex-col justify-between text-center font-title uppercase text-slate-50">
      <h1 className="sr-only">
        Louis Moraes - Création de sites modernes et performants avec Next.js et
        Shopify
      </h1>
      {/* Empty up slot */}
      <div className=""></div>

      <div className="space-y-12">
        <div className="flex flex-col gap-1 bg-black/30 p-9 leading-none backdrop-blur-sm text-shadow-lg lg:w-fit lg:px-28">
          <p className="text-7xl tracking-wide">
            {process.env.NEXT_PUBLIC_SITE_OWNER}
          </p>
          <hr className="m-auto my-4 w-2/4 border" />
          <div className="space-y-1">
            <h2
              className="text-4xl font-medium"
              style={{ letterSpacing: '0.37em' }}
            >
              Developpeur Web
            </h2>
            <h3
              className="text-4xl font-medium"
              style={{ letterSpacing: '0.37em' }}
            >
              Next / Shopify
            </h3>
          </div>
        </div>
        <Button
          variant="white"
          className="ml-24 flex h-12 w-80 rounded-none text-xl font-bold uppercase tracking-wider shadow"
          asChild
        >
          <Link href="#contact">Contactez-moi</Link>
        </Button>
      </div>

      <p className="mb-12 text-shadow">Défilez vers le bas</p>
    </section>
  );
};
