import { cn } from '@/lib/utils';
import React, { ElementType } from 'react';

type Direction = 'row' | 'col';
type Justify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

interface StackProps {
  direction?: Direction;
  gap?: string;
  wrap?: boolean;
  justify?: Justify;
  align?: Align;
  component?: ElementType;
  className?: string;
}

export const Stack = ({
  children,
  direction = 'row',
  gap = 'gap-4 sm:gap-6 lg:gap-8',
  wrap = false,
  justify = 'start',
  align = 'stretch',
  component: Component = 'div',
  className = '',
}: React.PropsWithChildren<StackProps>) => {
  const stackClasses = cn(
    'flex',
    gap,
    {
      'flex-wrap': wrap,
      'flex-col': direction === 'col',
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'justify-evenly': justify === 'evenly',
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-baseline': align === 'baseline',
      'items-stretch': align === 'stretch',
    },
    className,
  );

  return <Component className={stackClasses}>{children}</Component>;
};
