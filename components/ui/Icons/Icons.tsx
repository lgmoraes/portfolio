import { cn } from '@/lib/utils';
import { SVGProps } from 'react';

const defaultColor = 'fill-stone-200';

const svgStyle: SVGProps<SVGSVGElement>['style'] = {
  strokeLinejoin: 'round',
  strokeMiterlimit: 2,
};

interface HamburgerProps extends SVGProps<SVGSVGElement> {
  isOpen?: boolean;
  transitionDuration?: string;
  className?: string;
}

export const Hamburger = ({
  className,
  width = '24',
  height = '22',
  isOpen = false,
  transitionDuration = '0.3s',
  onClick,
}: HamburgerProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 22`}
      className={cn(defaultColor, className)}
      onClick={onClick}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
    >
      <g
        className="top"
        style={{ transition: transitionDuration }}
        transform={`matrix(${
          isOpen
            ? '0.707107,0.707107,-0.707107,0.707107,4.22183,1.80761'
            : '1,0,0,1,0,0'
        })`}
      >
        <rect x="0" y="0" width="24" height="2" />
      </g>
      <g
        className="middle"
        style={{ transition: transitionDuration, opacity: isOpen ? 0 : 1 }}
      >
        <rect x="0" y="10" width="24" height="2" />
      </g>
      <g
        className="bottom"
        style={{ transition: transitionDuration }}
        transform={`matrix(${
          isOpen
            ? '0.707107,-0.707107,0.707107,0.707107,-11.3345,4.63604'
            : '1,0,0,1,0,0'
        })`}
      >
        <rect x="0" y="20" width="24" height="2" />
      </g>
    </svg>
  );
};
