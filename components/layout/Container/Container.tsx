import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  role?: string;
};

type PaddingSizeKey = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const paddingSize: Record<PaddingSizeKey, string> = {
  none: '',
  sm: 'p-2 sm:p-3 lg:p-4',
  md: 'p-4 sm:p-6 lg:p-8',
  lg: 'p-5 sm:p-8 lg:p-10',
  xl: 'p-6 sm:p-9 lg:p-12',
};

export const Container = ({
  children,
  className = '',
  padding = 'md',
  id,
  role,
}: ContainerProps) => {
  return (
    <div
      id={id}
      role={role}
      className={cn(
        'relative mx-auto w-full max-w-7xl',
        padding && paddingSize[padding],
        className,
      )}
    >
      {children}
    </div>
  );
};
