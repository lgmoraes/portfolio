import clsx from 'clsx';
import { ElementType } from 'react';

type SectionProps<T extends ElementType = 'section'> = {
  children: React.ReactNode;
  as?: T;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
  role?: string;
};

export const Section = <T extends ElementType = 'section'>({
  children,
  as,
  fullWidth = false,
  fullHeight = false,
  className = '',
  containerClassName = '',
  id,
  role,
}: SectionProps<T>) => {
  // Utiliser le composant spécifié ou section par défaut
  const Component = as || 'section';

  return (
    <Component
      id={id}
      role={role}
      className={clsx(
        'relative w-full',
        !fullWidth && ['mx-auto', 'max-w-7xl', 'px-4 sm:px-6 lg:px-8'],
        fullHeight && 'min-h-screen',
        className,
      )}
    >
      {/* Inner container for content layout */}
      <div className={clsx('relative w-full', containerClassName)}>
        {children}
      </div>
    </Component>
  );
};
