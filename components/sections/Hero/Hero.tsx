import { Button } from '@/components/ui/button';
import company from '@/data/company.json';
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
        <div className="flex flex-col gap-1 bg-black/30 p-7 px-0 leading-none text-shadowHard-sm sm:p-9 sm:backdrop-blur-sm sm:text-shadow-md lg:w-fit lg:px-28">
          <p className="text-4xl tracking-wide sm:text-6xl lg:text-7xl">
            {company.owner}
          </p>
          <hr className="m-auto my-4 w-44 border sm:w-60 lg:w-1/2" />
          <div className="space-y-1">
            <h2
              className="text-lg font-medium sm:text-2xl lg:text-4xl"
              style={{ letterSpacing: '0.37em' }}
            >
              Developpeur Web
            </h2>
            <h3
              className="text-lg font-medium sm:text-2xl lg:text-4xl"
              style={{ letterSpacing: '0.37em' }}
            >
              Next / Shopify
            </h3>
          </div>
        </div>
        <Button
          variant="white"
          className="mx-auto flex h-12 w-64 text-base font-bold uppercase tracking-wider shadow-hard sm:text-lg sm:shadow lg:ml-24 lg:w-80 lg:text-xl"
          asChild
        >
          <Link href="#contact">Contactez-moi</Link>
        </Button>
      </div>

      <p className="mb-12 text-shadowHard-xs sm:text-shadow">
        Défilez vers le bas
      </p>
    </section>
  );
};
