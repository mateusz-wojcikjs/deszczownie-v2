import { FC, JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkBuilder } from '../../../../utils'
import { CategoryBoxProps } from './categoryBox.types'

export const CategoryBox: FC<CategoryBoxProps> = (props: CategoryBoxProps): JSX.Element => {
  const { title, slug, thumbnail }: CategoryBoxProps = props

  return (
    <Link
      href={LinkBuilder.offers.category(slug)}
      className="relative overflow-hidden rounded-2xl w-64 h-64 shadow-xl before:block before:w-full before:pb-full cursor-pointer text-slate-50"
    >
      <div className="flex flex-col absolute top-0 top-left w-full h-full group">
        <div className="bg-center flex-4 bg-cover scale-125 group-hover:scale-100 transition-transform duration-300">
          <Image
            fill
            className="object-center object-cover"
            src={thumbnail.url || ''}
            alt={title}
          />
        </div>
        <div className="h-full w-full bg-black/[.5] absolute top-1/2 -translate-y-1/2 group-hover:bg-black/[.05] transition-colors duration-300 text-white-main text-2xl flex items-center justify-center">
          <p className="group-hover:opacity-0 transition-opacity duration-300 uppercase text-center">
            {title}
          </p>
        </div>
        <div className="h-20 w-full bg-slate-800 absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-secondary flex flex-col items-center justify-center">
          <span>Przejdź do kategorii</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
