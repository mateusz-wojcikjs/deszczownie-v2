import { IconProps } from '@/app/(frontend)/interfaces'
import { JSX } from 'react'

export const ArrowRight: (props: IconProps) => JSX.Element = (props: IconProps): JSX.Element => {
  const { color, size, className } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      name="arrowRight"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M3 10.5H17"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.2"
      ></path>
      <path
        d="M12.5 5.5L17.5 10.5L12.5 15.5"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.2"
      ></path>
    </svg>
  );
};
