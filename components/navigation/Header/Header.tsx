'use client';

import { montserrat } from '@/app/fonts';
import useStore from '@/lib/store';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const landingSections = [
  { id: 'home', name: 'Home' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' },
];

export const Header = () => {
  const pathname = usePathname();
  const currentHash = useStore((store) => store.hash);
  const isActive = (path: string) => pathname === path;
  const isActiveHash = (path: string) =>
    pathname + currentHash === path.replace('#', '');

  return (
    <header
      className={cn(
        montserrat.className,
        `fixed top-0 z-10 flex h-14 w-full shrink-0 items-center justify-center gap-6 bg-stone-800 uppercase text-stone-200`,
        '[&>a]:flex [&>a]:h-12 [&>a]:items-center [&>a]:px-2 [&>a]:text-lg',
      )}
    >
      {landingSections.map((section, index) => {
        return (
          <Link
            href={`/#${section.id}`}
            className={clsx(isActiveHash('/#' + section.id) && 'underline')}
            key={index}
          >
            {section.name}
          </Link>
        );
      })}
      <Link
        href="/portfolio"
        className={clsx(isActive('/portfolio') && 'underline')}
      >
        Portfolio
      </Link>
    </header>
  );
};
