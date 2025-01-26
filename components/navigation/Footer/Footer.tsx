import { Container } from '@/components/layout/Container/Container';
import { Row } from '@/components/layout/Row/Row';
import { Button } from '@/components/ui/button';
import Link from 'next/dist/client/link';

const year = new Date().getFullYear();
const navigationLinks = {
  Home: '/#home',
  FAQ: '/#faq',
  Contact: '/#contact',
  Portfolio: '/portfolio',
};

const titleClassName = 'mb-4 sm:text-left text-2xl font-bold text-stone-400';

export const Footer = () => {
  return (
    <footer className="flex flex-col space-y-8 bg-stone-900 text-stone-200">
      <Container className="flex flex-col gap-3 text-center max-sm:space-y-6 sm:flex-row sm:text-left">
        <div className="flex-[1] basis-0 flex-col">
          <h2 className={titleClassName}>Navigation</h2>
          <ul>
            {Object.entries(navigationLinks).map(([name, url], index) => (
              <li key={index}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-[1] basis-0">
          <h2 className={titleClassName}>Contact</h2>

          <p>
            <Link href="/#contact" className="text-blue-400 hover:underline">
              <Button className="rounded-sm" type="submit">
                Contactez moi
              </Button>
            </Link>
          </p>
        </div>
      </Container>
      <Row className="bg-stone-950">
        <Container
          className="flex flex-col items-stretch justify-center gap-2 p-4 md:h-12 md:flex-row md:gap-6 md:py-0 [&>*]:h-6 md:[&>*]:h-12"
          padding="none"
        >
          <p className="flex items-center">© {year} - Tous droits réservés</p>
          <Link
            href="/mentions-legales"
            className="flex items-center text-orange-400 hover:underline"
          >
            Mentions Légales
          </Link>
          <Link
            href="/politique-confidentialite"
            className="flex items-center hover:underline"
          >
            Politique de confidentialité
          </Link>
        </Container>
      </Row>
    </footer>
  );
};
