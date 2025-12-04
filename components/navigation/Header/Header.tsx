"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { montserrat } from "@/app/fonts";
import { Hamburger } from "@/components/ui/Icons/Icons";
import useStore from "@/infra/store/store";
import { cn } from "@/lib/utils";

const landingSections = [
  { id: "home", name: "Home" },
  { id: "faq", name: "FAQ" },
  { id: "contact", name: "Contact" },
];

const linkClassName = "flex h-12 items-center px-2 text-lg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentHash = useStore((store) => store.hash);
  const isActive = (path: string) => pathname === path;
  const isActiveHash = (path: string) => pathname + currentHash === path.replace("#", "");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        montserrat.className,
        `sticky top-0 z-50 flex w-full overflow-hidden bg-stone-800 text-stone-200 uppercase transition-all duration-300 sm:justify-center`,
        isOpen ? "h-80 justify-start pl-12 sm:h-header sm:pl-0" : "h-header",
      )}
    >
      {/* List */}
      <div
        className={cn(
          "flex shrink-0 sm:flex-row sm:items-center sm:justify-center sm:gap-6",
          "mt-16 h-48 flex-col justify-between sm:mt-0 sm:h-header",
        )}
      >
        {landingSections.map((section, index) => {
          return (
            <Link
              href={`/#${section.id}`}
              className={clsx(
                isActiveHash("/#" + section.id) && "underline",
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
          className={clsx(isActive("/portfolio") && "underline", linkClassName)}
        >
          Portfolio
        </Link>
      </div>
      <Hamburger
        isOpen={isOpen}
        className="absolute top-4 right-8 cursor-pointer sm:hidden"
        onClick={toggleOpen}
      />
    </header>
  );
};
