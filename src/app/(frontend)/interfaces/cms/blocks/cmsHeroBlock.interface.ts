import { Media } from '@/payload-types'
import { LinkProps } from '@/app/(frontend)/components/hero'

export interface CmsHeroBlock {
  title: string;
  media: Media;
  type: 'mediumImpact' | 'highImpact';
  description?: string | null;
  links?: LinkProps[];
}
