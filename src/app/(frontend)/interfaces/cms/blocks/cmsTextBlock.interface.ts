import { RichTextChild } from '@/app/(frontend)/components/richText/richText.types'

export interface CmsTextBlock {
  id?: string
  root: {
    children:
      | RichTextChild[]
      | Array<{
          type: string
          version: number
          [k: string]: unknown
        }>
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}

export interface CmsTextBlockData {
  text: {
    root: {
      children: Array<{
        type: string
        version: number
        [k: string]: unknown
      }>
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  }
}
