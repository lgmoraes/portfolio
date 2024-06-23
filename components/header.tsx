import Link from 'next/link';
import { montserrat } from '../app/fonts';

function Header() {
  return (
    <div className="h-11 shrink-0">
      <header
        className={`${montserrat.className} fixed top-0 z-10 flex h-11 w-full shrink-0 items-center justify-center gap-8 bg-stone-800 uppercase text-stone-200`}
      >
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/cv">CV</Link>
      </header>
    </div>
  );
}

export default Header;
