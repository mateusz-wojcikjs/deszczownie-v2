import { Media } from '@/payload-types'
import { LinkProps } from '@/app/(frontend)/components/hero/hero.types'

export interface CmsHeroBlock {
  id: string
  title: string
  media: Media
  type: 'mediumImpact' | 'highImpact'
  description?: string
  links?: LinkProps[]
}
