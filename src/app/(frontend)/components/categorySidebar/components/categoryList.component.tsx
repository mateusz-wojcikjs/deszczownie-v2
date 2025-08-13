import { JSX } from 'react'
import { CmsCategory } from '@/app/(frontend)/interfaces'
import { CategoryItem } from './categoryItem.component'
import { CategoryListProps } from './categoryList.types'

export const CategoryList: (props: CategoryListProps) => JSX.Element = (
  props: CategoryListProps,
): JSX.Element => {
  const { categories, currentSlug }: CategoryListProps = props

  return (
    <ul className="space-y-1">
      {categories.map(
        (category: CmsCategory): JSX.Element => (
          <CategoryItem key={category.id} category={category} currentSlug={currentSlug} />
        ),
      )}
    </ul>
  )
}
