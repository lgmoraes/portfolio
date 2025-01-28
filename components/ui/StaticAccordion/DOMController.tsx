'use client';

import { useEffect } from 'react';

type DOMControllerProps = {
  id: string;
  isOpen: boolean;
};

export const DOMController = ({ id, isOpen }: DOMControllerProps) => {
  useEffect(() => {
    const item = document.querySelector('#' + id) as HTMLDivElement;
    const trigger = item?.querySelector(
      '#' + id + '-trigger',
    ) as HTMLDivElement;
    const button = trigger?.firstChild as HTMLButtonElement;
    const content = item?.querySelector(
      '#' + id + '-content',
    ) as HTMLDivElement;

    const handleClick = () => {
      const isExpanded = trigger.ariaExpanded === 'true';

      trigger.ariaExpanded = isExpanded ? 'false' : 'true';
      content.ariaHidden = isExpanded ? 'true' : 'false';
      content.style.height = isExpanded ? '0' : content.scrollHeight + 'px';
    };

    // Replace h-fit with a fixed height to enable transitions
    if (isOpen) content.style.height = content.scrollHeight + 'px';

    button.addEventListener('click', handleClick);

    return () => {
      const buttonElement = document.querySelector('#' + id + '-button');
      buttonElement?.addEventListener('click', handleClick);
    };
  });

  return null;
};
