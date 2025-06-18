import { FC, JSX } from 'react'
import { CategoryBox } from '../categoryBox/categoryBox.component'
import { Category, Media } from '@/payload-types'
import { OffersBlockData, OffersBlockProps } from './offersBlock.types'

export const OffersBlock: FC<OffersBlockProps> = (props: OffersBlockProps): JSX.Element => {
  const { data }: OffersBlockProps = props
  const { categories, title }: OffersBlockData = data

  return (
    <div className="container py-24">
      <h2 className="text-4xl text-center text-secondary">{title}</h2>
      <div className="flex justify-center gap-8 pt-16">
        {categories.map((category: Category) => {
          return (
            <CategoryBox
              key={category.id}
              title={category.title}
              thumbnail={category.categoryImage as Media}
              slug={
                category.parentCategory
                  ? `${
                      typeof category.parentCategory !== 'number' && category.parentCategory.slug
                    }/${category.slug}`
                  : category.slug
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default OffersBlock
