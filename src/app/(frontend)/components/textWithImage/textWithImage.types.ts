import { DynamicContentVariant } from '@/app/(frontend)/enums'
import { TextWithImageSection } from '@/types/TextWithImage'
import { ReactNode } from 'react'

export interface TextWithImageProps {
  data: TextWithImageSection
  variant?: DynamicContentVariant
}

export interface TextWithImageAnimatedProps {
  children: ReactNode
}
