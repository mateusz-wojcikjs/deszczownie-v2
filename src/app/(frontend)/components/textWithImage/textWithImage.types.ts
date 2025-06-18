import { DynamicContentVariant } from '@/app/(frontend)/enums'
import { PayloadBlock } from '@/app/(frontend)/interfaces'
import { ReactNode } from 'react'

// Extract the textWithImage type from PayloadBlock
type TextWithImageData = Extract<PayloadBlock, { blockType: 'textWithImage' }>

export interface TextWithImageProps {
  data: TextWithImageData
  variant?: DynamicContentVariant
}

export interface TextWithImageAnimatedProps {
  children: ReactNode
}
