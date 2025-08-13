'use client'

import { CmsCategory } from '@/app/(frontend)/interfaces'
import { JSX, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { CategoryItemProps } from './categoryItem.types'
import { ROUTE_PATHS } from '@/app/(frontend)/constants/routingPaths.const'

export const CategoryItem: (props: CategoryItemProps) => JSX.Element = (
  props: CategoryItemProps,
): JSX.Element => {
  const { category, currentSlug }: CategoryItemProps = props
  const pathname: string = usePathname()
  const isActive: boolean = pathname.includes(category.slug) || currentSlug === category.slug
  const [isOpen, setIsOpen] = useState(isActive)

  useEffect((): void => {
    if (isActive) setIsOpen(true)
  }, [isActive])

  return (
    <li>
      <div
        className={clsx(
          'flex justify-between items-center cursor-pointer py-0.5 px-2 rounded-md text-xs xl:text-sm hover:bg-gray-100 my-1',
          isActive ? 'font-bold text-blue-600 bg-gray-100' : 'text-gray-700 hover:bg-gray-100',
        )}
        onClick={(): void => category.nestedCategory && setIsOpen(!isOpen)}
      >
        <Link
          href={ROUTE_PATHS.OFFER + category.slug}
          className="text-gray-700 hover:text-green-800"
        >
          {category.title}
        </Link>
        {!!category.nestedCategory?.length && (
          <button className="text-gray-500 focus:outline-none" aria-label="Toggle Subcategories">
            {isOpen ? '−' : '+'}
          </button>
        )}
      </div>

      {isOpen && !!category.nestedCategory && category.nestedCategory.length > 0 && (
        <ul className="ml-1 xl:ml-3 border-l border-slate-300 xl:pl-1 transition-all duration-300 ease-in-out">
          {category.nestedCategory.map(
            (subCategory: CmsCategory): JSX.Element => (
              <CategoryItem key={subCategory.id} category={subCategory} currentSlug={currentSlug} />
            ),
          )}
        </ul>
      )}
    </li>
  )
}
