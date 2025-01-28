import { cn } from '@/lib/utils';
import { JSX, memo } from 'react';
import { DOMController } from './DOMController';

type StaticAccordionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type StaticAccordionItemProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
  isOpen?: boolean;
  triggerTag?: keyof JSX.IntrinsicElements;
};

const StaticAccordionComponent = ({
  id,
  className,
  children,
}: StaticAccordionProps) => {
  return (
    <ul id={id} className={cn('relative', className)}>
      {children}
    </ul>
  );
};

export const StaticAccordion = memo(StaticAccordionComponent, () => true);

const StaticAccordionItemComponent = ({
  id,
  title,
  children,
  className,
  triggerClassName,
  buttonClassName,
  contentClassName,
  isOpen = false,
  triggerTag = 'h3',
}: StaticAccordionItemProps) => {
  const triggerId = id + '-trigger';
  const contentId = id + '-content';
  const TriggerTag = triggerTag;

  return (
    <li id={id} className={cn(className)}>
      <TriggerTag
        id={triggerId}
        className={cn('mb-4 text-left text-base font-bold', triggerClassName)}
        aria-expanded={isOpen}
      >
        <button
          id={id + '-button'}
          aria-controls={contentId}
          aria-expanded={isOpen}
          className={cn('text-left', buttonClassName)}
        >
          {title}
        </button>
      </TriggerTag>
      {/* Content */}
      <div
        id={contentId}
        className={cn(
          'overflow-hidden text-left transition-all',
          isOpen ? 'h-fit' : 'h-0',
          contentClassName,
        )}
        aria-hidden={isOpen}
      >
        <div className="mb-4">{children}</div>
      </div>
      <hr className="mb-4" />
      <DOMController id={id} isOpen={isOpen} />
    </li>
  );
};

export const StaticAccordionItem = memo(
  StaticAccordionItemComponent,
  () => true,
);
