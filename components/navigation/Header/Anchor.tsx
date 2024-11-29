'use client';

import useStore from '@/lib/store';
import { useEffect } from 'react';

type AnchorProps = {
  id: string;
};

export const Anchor = ({ id }: AnchorProps) => {
  const setHash = useStore((store) => store.setHash);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const anchor = entries[0];

        if (anchor.isIntersecting) {
          setHash(anchor.target.id);
        }
      },
      { threshold: 0.5 },
    );

    const tag = document.querySelector(`div[data-hash=${id}]`);

    if (tag) observer.observe(tag);

    return () => observer.disconnect();
  }, [id, setHash]);

  return <div id={id} data-hash={id}></div>;
};
