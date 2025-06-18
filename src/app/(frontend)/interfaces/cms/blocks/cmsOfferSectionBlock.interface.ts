import { Category } from '@/payload-types'

export interface CmsOfferSectionBlock {
  id?: string
  title: string
  categories: Category[]
  caseStudies?: any[] // TODO: Add proper case study type when available
}
