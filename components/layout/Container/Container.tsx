import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  role?: string;
};

export const Container = ({
  children,
  className = '',
  id,
  role,
}: ContainerProps) => {
  return (
    <div
      id={id}
      role={role}
      className={cn(
        'relative mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8',
        className,
      )}
    >
      {children}
    </div>
  );
};
