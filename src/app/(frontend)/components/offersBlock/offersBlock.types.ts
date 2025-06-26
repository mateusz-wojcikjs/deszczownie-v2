import { Category } from '@/payload-types'
import { OffersBlockVariant } from './offersBlock.enum'

export interface OffersBlockData {
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
  title: string
  type: OffersBlockVariant
  links?: Array<{
    link: {
      type?: ('reference' | 'custom') | null
      icon?: boolean | null
      newTab?: boolean | null
      reference?: {
        relationTo: 'pages'
        value: number | any
      } | null
      url?: string | null
      label: string
      appearance?: ('default' | 'primary' | 'secondary') | null
    }
    id?: string | null
  }> | null
}

export interface OffersBlockProps {
  data: OffersBlockData
}
