import { FC, JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy, Media } from '@/payload-types'
import { CaseStudiesSectionData, CaseStudiesSectionProps } from './caseStudiesSection.types'
import { LinkBuilder } from '@/utils'

export const CaseStudiesSection: FC<CaseStudiesSectionProps> = (
  props: CaseStudiesSectionProps,
): JSX.Element => {
  const { data }: CaseStudiesSectionProps = props
  const { caseStudies, title }: CaseStudiesSectionData = data

  return (
    <div className="container py-24">
      <h2 className="text-4xl text-center text-secondary mb-16">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy: CaseStudy) => {
          const image = caseStudy.image as Media
          return (
            <Link
              href={caseStudy.slug ? LinkBuilder.caseStudies.detail(caseStudy.slug) : '#'}
              key={caseStudy.id}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {image?.url && (
                  <Image
                    src={image.url}
                    alt={image.alt || caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Data realizacji:{' '}
                  {new Date(caseStudy.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudiesSection
