import { CmsCategory } from './cmsCategory.interface'
import {
  CmsHeroBlock,
  CmsImageBlock,
  CmsProductMetaDataBlock,
  CmsTextBlock,
  CmsTextWithImageBlock,
} from './blocks'
import { Media } from '@/payload-types'
import { PayloadBlock } from '@/app/(frontend)/interfaces'

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
  blocks: PayloadBlock[] | null
  table: string[][]
  attachment?: Media
  images: Media[]
}
