import { Media } from '@/payload-types'
import { CmsTextBlock } from './cmsTextBlock.interface'

export interface CmsProductDataWithImagesBlock {
  title: string
  content: CmsTextBlock
  images: {
    media: Media
    id?: string | null
  }[]
}
