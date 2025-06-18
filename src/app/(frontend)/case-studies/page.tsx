import { getPayload, PaginatedDocs } from 'payload'
import { DynamicContent } from '@/app/(frontend)/components'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { DynamicContentVariant, Routing } from '../enums'
import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy, Page } from '@/payload-types'
import { Collection } from '@/enums'
import { LinkBuilder, transformToCmsCaseStudy, transformPayloadBlock } from '../../../utils'
import { PayloadBlock } from '../interfaces'
import { CmsCaseStudy } from '../interfaces/cms'

export default async function CaseStudiesPage() {
  const payload = await getPayload({ config })
  const data: PaginatedDocs<Page> = await payload.find({
    collection: Collection.Pages,
    where: {
      slug: {
        equals: Routing.CaseStudies,
      },
    },
  })

  const caseStudiesData: PaginatedDocs<CaseStudy> = await payload.find({
    collection: Collection.CaseStudies,
  })

  const page: Page = data.docs?.[0]
  const caseStudies: CaseStudy[] = caseStudiesData.docs
  const cmsCaseStudies: CmsCaseStudy[] = caseStudies.map(transformToCmsCaseStudy)

  if (!page) {
    return notFound()
  }

  return (
    <>
      {page.blocks?.map((block: PayloadBlock) => (
        <DynamicContent
          variant={DynamicContentVariant.Default}
          data={transformPayloadBlock(block)}
          key={block.id}
        />
      ))}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsCaseStudies.map((item: CmsCaseStudy) => (
            <Link
              href={item.slug ? LinkBuilder.caseStudies.detail(item.slug) : '#'}
              key={item.id}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={
                    typeof item.image === 'object' && item.image?.url
                      ? item.image.url
                      : '/placeholder.jpg'
                  }
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Data realizacji:{' '}
                  {new Date(item.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
