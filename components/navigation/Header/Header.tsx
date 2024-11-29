'use client';

import { montserrat } from '@/app/fonts';
import useStore from '@/lib/store';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const currentHash = useStore((store) => store.hash);
  const isActive = (path: string) => pathname === path;
  const isActiveHash = (path: string) =>
    pathname + currentHash === path.replace('#', '');

  return (
    <div className="h-11 shrink-0">
      <header
        className={cn(
          montserrat.className,
          `fixed top-0 z-10 flex h-11 w-full shrink-0 items-center justify-center gap-8 bg-stone-800 uppercase text-stone-200`,
        )}
      >
        <Link
          href="/#home"
          className={clsx(isActiveHash('/#home') && 'underline')}
        >
          Home
        </Link>
        <Link
          href="/#faq"
          className={clsx(isActiveHash('/#faq') && 'underline')}
        >
          FAQ
        </Link>
        <Link
          href="/#contact"
          className={clsx(isActiveHash('/#contact') && 'underline')}
        >
          Contact
        </Link>
        <Link
          href="/portfolio"
          className={clsx(isActive('/portfolio') && 'underline')}
        >
          Portfolio
        </Link>
      </header>
    </div>
  );
};
