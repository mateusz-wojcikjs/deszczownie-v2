import { getPayload, PaginatedDocs, Payload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { DynamicContent } from '@/app/(frontend)/components'
import { Collection } from '@/enums'
import { Page as PageType } from '@/payload-types'
import { Route } from '../enums/route.enum'
import { PageProps, Params, PayloadBlock } from '../interfaces'
import { transformPayloadBlock } from '@/utils'
import { DynamicContentVariant } from '../enums'

export default async function Page(props: PageProps) {
  const { params }: PageProps = props
  const { slug }: Params = await params
  const payload: Payload = await getPayload({ config })
  const mergedSlug: string = slug ? slug.join('/') : Route.Home

  const data: PaginatedDocs<PageType> = await payload.find({
    collection: Collection.Pages,
    where: {
      slug: {
        equals: mergedSlug,
      },
    },
  })

  const pageData: PageType = data.docs?.[0]

  if (!pageData) {
    return notFound()
  }

  return pageData.blocks?.map((block: PayloadBlock) => (
    <DynamicContent
      data={transformPayloadBlock(block)}
      key={block.id}
      variant={DynamicContentVariant.Default}
    />
  ))
}
