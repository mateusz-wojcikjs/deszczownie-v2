import { getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Routing } from '@/app/(frontend)/enums/routing.enum'
import { DynamicContent } from '@/app/(frontend)/components'
import { Collection } from '@/enums'
import { Page } from '@/payload-types'

export default async function OffersPage() {
  const payload = await getPayload({ config })
  const data: PaginatedDocs<Page> = await payload.find({
    collection: Collection.Pages,
    where: {
      slug: {
        equals: Routing.Offers,
      },
    },
  })

  const page: Page = data.docs?.[0]

  if (!page) {
    return notFound()
  }

  return (page.blocks ?? []).map((block) => <DynamicContent data={block} key={block.id} />)
}
