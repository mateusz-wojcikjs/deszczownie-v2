import { ReactNode } from 'react'
import { ButtonSize, ButtonTheme, IconName } from '@/app/(frontend)/enums'

export interface ButtonLinkProps {
  href?: string;
  download?: boolean;
  external?: boolean;
  children: ReactNode;
  icon?: IconName;
  iconColor?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  className?: string;
};
