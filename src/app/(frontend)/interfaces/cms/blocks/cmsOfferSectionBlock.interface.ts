import { Category } from '@/payload-types'

export interface CmsOfferSectionBlock {
  id?: string
  title: string
  categories: Category[]
  description: {
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
