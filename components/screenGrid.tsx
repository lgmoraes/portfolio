'use client';

import { CSSProperties } from 'react';
import './screenGrid.css';

const styles: { background: CSSProperties } = {
  background: {
    background: 'rgba(0, 0, 0, 0.5) center no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'rgba(0, 0, 0, 0.2) 5px 3px 20px 8px inset',
  },
};

function ScreenGrid({ data }: { data: Portfolio }) {
  return (
    <div className="screenGrid flex h-screen w-full flex-wrap justify-center overflow-hidden p-0">
      {data.projects.map((p) => (
        <a
          className={`w-1/2 relative shrink-0 overflow-hidden`}
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
