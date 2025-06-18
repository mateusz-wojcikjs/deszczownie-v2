import { Media } from '@/payload-types'

export interface CmsProductDataWithImagesBlock {
  id: number
  title: string
  content: {
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
  images: {
    media: Media
    id?: string
  }[]
}
