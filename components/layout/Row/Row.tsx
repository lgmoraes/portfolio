import { cn } from '@/lib/utils';

type RowProps = {
  children: React.ReactNode;
  fullPage?: boolean;
  className?: string;
  id?: string;
};

export const Row = ({
  children,
  fullPage = false,
  className = '',
  id,
}: RowProps) => {
  return (
    <div
      id={id}
      className={cn(
        'relative mx-auto w-full px-4 sm:px-6 lg:px-8',
        fullPage && 'min-h-screen',
        className,
      )}
    >
      {children}
    </div>
  );
};