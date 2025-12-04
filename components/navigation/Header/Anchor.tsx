"use client";

import type React from "react";
import { useEffect } from "react";
import useStore from "@/infra/store/store";

type AnchorProps = {
  id: string;
  children?: React.ReactNode;
};

export const Anchor = ({ id, children }: AnchorProps) => {
  const setHash = useStore((store) => store.setHash);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const anchor = entries[0];

        if (anchor.isIntersecting) {
          setHash(anchor.target.id);
        }
      },
      { threshold: 0.6 },
    );

    const tag = document.querySelector(`div[data-hash=${id}]`);

    if (tag) observer.observe(tag);

    return () => observer.disconnect();
  }, [id, setHash]);

  return (
    <div id={id} data-hash={id} className="scroll-mt-14">
      {children}
    </div>
  );
};
