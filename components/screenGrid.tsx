'use client';

import { CSSProperties, useEffect, useState } from 'react';

const IMAGE_RATIO = 3 / 4;
const LAYOUT_BREAKPOINT = 1.7;

const styles: { background: CSSProperties } = {
  background: {
    background: 'rgba(0, 0, 0, 0.5) center no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'rgba(0, 0, 0, 0.2) 5px 3px 20px 8px inset',
  },
};

function ScreenGrid({ data }: { data: Portfolio }) {
  const [availableWidth, setAvailableWidth] = useState<number>(0);
  const [availableHeight, setAvailableHeight] = useState<number>(0);

  let imageWidth = '';
  let imageHeight = '';

  if (availableWidth / availableHeight > LAYOUT_BREAKPOINT) {
    /* Horizontal layout */
    imageWidth = 'w-1/4';
    imageHeight = `h-1/2`;
  } else {
    /* Vertical layout */
    imageWidth = 'w-1/2';
    imageHeight = (availableWidth / 2) * IMAGE_RATIO + 'px';
  }

  useEffect(() => {
    const handleResize = () => {
      setAvailableWidth(window.innerWidth);
      setAvailableHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full flex-wrap justify-center overflow-hidden p-0">
      {data.projects.map((p) => (
        <a
          className={`${imageWidth} ${imageHeight} relative shrink-0 overflow-hidden`}
          key={p.id}
          href={p.link}
        >
          <div
            className="size-full shrink-0 transition duration-500 hover:scale-110"
            style={{
              ...styles.background,
              backgroundImage: `url(./${p.id}.jpg);`,
            }}
          />
        </a>
      ))}
    </div>
  );
}

export default ScreenGrid;
