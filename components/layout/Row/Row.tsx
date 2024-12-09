import { cn } from '@/lib/utils';

type RowProps = {
  children: React.ReactNode;
  fullPage?: boolean;
  video?: string;
  className?: string;
  id?: string;
};

export const Row = ({
  children,
  fullPage = false,
  video,
  className = '',
  id,
}: RowProps) => {
  return (
    <div
      id={id}
      className={cn(
        'relative mx-auto w-full px-4 sm:px-6 lg:px-8',
        fullPage && 'min-h-content',
        className,
      )}
    >
      {video && (
        <video
          muted
          autoPlay
          loop
          className="fixed inset-0 -z-30 h-full w-full bg-black object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      {children}
    </div>
  );
};
