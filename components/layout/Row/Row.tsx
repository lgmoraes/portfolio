import { cn } from '@/lib/utils';

type RowProps = {
  children: React.ReactNode;
  fullPage?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  video?: string;
  className?: string;
  id?: string;
};

type PaddingSizeKey = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const paddingSize: Record<PaddingSizeKey, string> = {
  none: '',
  sm: 'px-2 sm:px-3 lg:px-4',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-5 sm:px-8 lg:px-10',
  xl: 'px-6 sm:px-9 lg:px-12',
};

export const Row = ({
  children,
  fullPage = false,
  padding = 'none',
  video,
  className = '',
  id,
}: RowProps) => {
  return (
    <div
      id={id}
      className={cn(
        'relative mx-auto w-full',
        fullPage && 'min-h-content',
        padding && paddingSize[padding],
        className,
      )}
    >
      {video && (
        <video
          muted
          autoPlay
          playsInline
          loop
          poster={video + '.webp'}
          preload="auto"
          className="fixed inset-0 -z-30 h-full w-full bg-black object-cover"
        >
          <source src={video + '.webm'} type="video/webm" />
          <source src={video + '.mp4'} type="video/mp4" />
        </video>
      )}
      {children}
    </div>
  );
};
