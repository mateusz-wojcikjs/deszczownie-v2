import { getPayload, PaginatedDocs, Payload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { ButtonLink, GallerySlider, RichText } from '../../../components'
import { Collection } from '@/enums'
import { CmsCaseStudy } from '../../../interfaces/cms'
import { Params, PageProps } from '../../../interfaces'
import { CaseStudy } from '@/payload-types'
import { transformToCmsCaseStudy, LinkBuilder } from '@/utils'

export default async function CaseStudyPage(props: PageProps) {
  const { params }: PageProps = props
  const { slug }: Params = await params
  const payload: Payload = await getPayload({ config })
  const data: PaginatedDocs<CaseStudy> = await payload.find({
    collection: Collection.CaseStudies,
    where: {
      slug: {
        equals: slug[0],
      },
    },
  })

  if (!data || !data.docs?.[0]) {
    return notFound()
  }

  const { title, content, images, id, relatedProducts, date }: CmsCaseStudy =
    transformToCmsCaseStudy(data.docs[0])

  return (
    <div className="container pt-16">
      <article className="prose prose-slate max-w-4xl mx-auto">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500">
          Data realizacji:{' '}
          {new Date(date).toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <RichText content={content.root.children} />
      </article>
      <GallerySlider images={images} id={id.toString()} />
      {relatedProducts && relatedProducts.category?.slug && relatedProducts.slug && (
        <div className="flex flex-col items-center justify-center gap-4 my-16">
          <h2 className="text-2xl font-bold">
            Przejdź do szczegółów deszczowni {relatedProducts.title}
          </h2>
          <ButtonLink
            href={LinkBuilder.offers.product(relatedProducts.category.slug, relatedProducts.slug)}
          >
            Szczegóły deszczowni
          </ButtonLink>
        </div>
      )}
    </div>
  )
}
