import { IconName } from '@/app/(frontend)/enums'

export interface IconProps {
  iconName: IconName;
  color: string;
  size?: number;
  className?: string;
}
