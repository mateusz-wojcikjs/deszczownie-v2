import { Category } from '@/payload-types'

export interface CmsOfferSectionBlock {
  id?: string
  title: string
  categories: Category[]
}
