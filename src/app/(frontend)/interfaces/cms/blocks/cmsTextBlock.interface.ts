import { RichTextChild } from '@/app/(frontend)/components/richText/richText.types'

export interface CmsTextBlock {
  root: {
    children: RichTextChild[]
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}
