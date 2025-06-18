import { Category } from '@/payload-types'

export interface OffersBlockData {
  categories: Category[]
  title: string
}

export interface OffersBlockProps {
  data: OffersBlockData
}
