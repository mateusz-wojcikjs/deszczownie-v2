import { Media } from '@/payload-types'
import { CmsProduct } from './cmsProduct.interface'
import { CmsTextBlock } from './blocks'

export interface CmsCaseStudy {
  slug: string
  title: string
  content: CmsTextBlock
  image?: Media
  date: string
  images: Media[]
  id: number
  relatedProducts?: CmsProduct
}
