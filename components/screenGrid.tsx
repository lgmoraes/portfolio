import Image from 'next/image';
import './screenGrid.css';

function ScreenGrid({ data }: { data: Portfolio }) {
  return (
    <div className="screenGrid flex w-full grow flex-wrap justify-center overflow-hidden p-0">
      {data.projects.map((p) => (
        <a
          className={`group relative flex w-1/2 shrink-0 overflow-hidden`}
          key={p.id}
          href={p.link}
        >
          <Image
            className="shrink-0 grow object-cover transition duration-500 group-hover:scale-110"
            src={`/${p.id}.jpg`}
            width={p.cover.width}
            height={p.cover.height}
            alt={`Couverture du projet ${p.name}`}
          />
        </a>
      ))}
    </div>
  );
}

export default ScreenGrid;
