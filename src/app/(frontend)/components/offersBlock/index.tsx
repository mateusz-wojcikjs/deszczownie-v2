import React from 'react'
import Link from 'next/link'

import { CategoryBoxProps, OfferSectionBlockProps } from '../types'
import { Category, Media } from '@/payload-types'
import Image from 'next/image'

const ROUTE_PATHS = {
  OFFER: '/oferta/',
  OFFER_CATEGORY: '/oferta/[slug]',
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ title, slug, thumbnail }: CategoryBoxProps) => {
  // const { sizes }: Media = thumbnail
  console.log(thumbnail);
  return (
    <Link
      href={ROUTE_PATHS.OFFER + slug}
      className="relative overflow-hidden rounded-2xl w-64 h-64 shadow-xl before:block before:w-full before:pb-full cursor-pointer"
    >
      <div className="flex flex-col absolute top-0 top-left w-full h-full group">
        <div className="bg-center flex-4 bg-cover scale-125 group-hover:scale-100 transition-transform duration-300">
          <Image
            fill
            className="object-center object-cover"
            src={thumbnail.url}
            alt={title}
          />
        </div>
        <div className="h-full w-full bg-black/[.5] absolute top-1/2 -translate-y-1/2 group-hover:bg-black/[.05] transition-colors duration-300 text-white-main text-2xl flex items-center justify-center">
          <p className="group-hover:opacity-0 transition-opacity duration-300 uppercase text-center">
            {title}
          </p>
        </div>
        <div className="h-20 w-full bg-white-main absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-secondary flex flex-col items-center justify-center">
          <span>Przejdź do kategorii</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

const OffersBlock = (data) => {
  const { categories, title } = data.data;
  console.log(categories[0].categoryImage)
  return (
    <div className="container py-24">
      <h2 className="text-4xl text-center text-secondary">{title}</h2>
      <div className="flex justify-center gap-8 pt-16">
        {categories.map((category: Category) => {
          return (
            <CategoryBox
              key={category.id}
              title={category.title}
              thumbnail={category.categoryImage}
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
