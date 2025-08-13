import { CmsCategory } from '@/app/(frontend)/interfaces'

export interface CategoryListProps {
  categories: CmsCategory[]
  currentSlug: string
}
