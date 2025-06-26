import { FC, JSX } from 'react'
import { CategoryBox } from '../categoryBox/categoryBox.component'
import { Category, Media } from '@/payload-types'
import { OffersBlockData, OffersBlockProps } from './offersBlock.types'
import { ButtonLink, RichText } from '@/app/(frontend)/components'
import { ButtonTheme, FilesPaths } from '../../enums'
import { OffersBlockVariant } from './offersBlock.enum'
import Image from 'next/image'

export const OffersBlock: FC<OffersBlockProps> = (props: OffersBlockProps): JSX.Element => {
  const { data }: OffersBlockProps = props
  const {
    categories,
    title,
    description,
    type = OffersBlockVariant.MediumImpact,
    links,
  }: OffersBlockData = data

  return (
    <div
      className={`${type === OffersBlockVariant.HighImpact ? 'bg-slate-100 mt-16' : ''} relative`}
    >
      <div
        className={`${type === OffersBlockVariant.HighImpact ? 'container py-24' : ''} relative z-10`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
        {description && (
          <>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-8 rounded-full"></div>
            <div className="prose prose-slate mx-auto mt-8 max-w-3xl">
              <RichText content={description.root.children} />
            </div>
          </>
        )}

        <div className="flex justify-center gap-8 pt-12 pb-8">
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
        {links?.length && (
          <div className="flex justify-center pt-16 relative">
            <ButtonLink
              theme={ButtonTheme.Secondary}
              href={links[0].link.reference?.value.slug ?? ''}
            >
              {links[0].link.label}
            </ButtonLink>
          </div>
        )}
      </div>

      {type === OffersBlockVariant.HighImpact && (
        <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end justify-end z-0">
          <Image
            src={FilesPaths.OfferSectionDecorativeImage}
            alt=""
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default OffersBlock
