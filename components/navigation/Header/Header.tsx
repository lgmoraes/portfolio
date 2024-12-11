'use client';

import { montserrat } from '@/app/fonts';
import { Hamburger } from '@/components/ui/Icons/Icons';
import useStore from '@/lib/store';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const landingSections = [
  { id: 'home', name: 'Home' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' },
];

const linkClassName = 'flex h-12 items-center px-2 text-lg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentHash = useStore((store) => store.hash);
  const isActive = (path: string) => pathname === path;
  const isActiveHash = (path: string) =>
    pathname + currentHash === path.replace('#', '');

  const toggleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        montserrat.className,
        `sticky top-0 z-50 flex h-header w-full sm:justify-center overflow-hidden bg-stone-800 uppercase text-stone-200 transition-all duration-300`,
        isOpen && 'justify-start pl-12 sm:pl-0 h-80 sm:h-header ',
      )}
    >
      {/* List */}
      <div
        className={cn(
          'flex shrink-0 sm:flex-row sm:items-center sm:justify-center sm:gap-6',
          'h-48 sm:h-header mt-16 flex-col sm:mt-0 justify-between',
        )}
      >
        {landingSections.map((section, index) => {
          return (
            <Link
              href={`/#${section.id}`}
              className={clsx(
                isActiveHash('/#' + section.id) && 'underline',
                linkClassName,
              )}
              key={index}
            >
              {section.name}
            </Link>
          );
        })}
        <Link
          href="/portfolio"
          className={clsx(isActive('/portfolio') && 'underline', linkClassName)}
        >
          Portfolio
        </Link>
      </div>
      <Hamburger
        isOpen={isOpen}
        className="absolute right-8 top-4 cursor-pointer sm:hidden"
        onClick={toggleOpen}
      />
    </header>
  );
};
