import { DynamicContentVariant } from '@/app/(frontend)/enums'
import { PayloadBlock } from '@/app/(frontend)/interfaces'

// Extract the textBlock type from PayloadBlock
type TextBlockData = Extract<PayloadBlock, { blockType: 'textBlock' }>

export interface TextBlockProps {
  data: TextBlockData
  variant?: DynamicContentVariant
}
