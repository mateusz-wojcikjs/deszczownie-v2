import { Media } from './media.interface'
import { CmsTextWithImageBlock } from '@/app/(frontend)/interfaces/cms/blocks'

export interface TextBlock extends CmsTextWithImageBlock {
  blockType: 'text'
  id: string
  headline?: string
  additionalHeadline?: string
}

export interface ImageBlock {
  blockType: 'image'
  id: string
  media: Media
}

export type TextWithImageBlock = {
  textAndImage: TextBlock | ImageBlock
}

export type TextWithImageSection = {
  blockType: 'textWithImage'
  textAndImage: [TextBlock, ImageBlock]
}
