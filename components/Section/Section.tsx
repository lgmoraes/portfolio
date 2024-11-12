import clsx from 'clsx';
import { ElementType } from 'react';

type AsElementProps<T extends ElementType> = {
  as?: T;
};

type SectionProps<T extends ElementType = 'section'> = AsElementProps<T> & {
  children: React.ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
  role?: string;
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
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
        !fullWidth && [
          'mx-auto',
          'max-w-7xl',
          'px-4 sm:px-6 lg:px-8',
        ],
        fullHeight && 'min-h-screen',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'relative w-full',
        className,
      )}
    >
      {children}
    </div>
  );
};
