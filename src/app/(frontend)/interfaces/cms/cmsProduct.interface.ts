import { CmsCategory } from './cmsCategory.interface'
import {
  CmsHeroBlock,
  CmsImageBlock,
  CmsProductMetaDataBlock,
  CmsTextBlock,
  CmsTextWithImageBlock,
} from './blocks'
import { Media } from '@/payload-types'

export type CmsProductBlock =
  | CmsHeroBlock
  | CmsTextBlock
  | CmsTextWithImageBlock
  | CmsImageBlock
  | CmsProductMetaDataBlock

export interface CmsProduct {
  id: number
  title: string
  slug?: string | null
  image: Media
  category: CmsCategory
  blocks: CmsProductBlock[] | null
  table: string[][]
}
