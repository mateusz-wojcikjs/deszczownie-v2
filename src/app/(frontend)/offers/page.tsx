import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Routing } from '@/app/(frontend)/enums/routing.enum'
import { DynamicContent } from '@/app/(frontend)/components/dynamicContent'

export default async function OffersPage() {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: Routing.Offers,
      }
    }
  });

  const page = data.docs?.[0];

  console.log('dupa 123')

  if (!page) {
    return notFound()
  }

  return (
    page.blocks.map((block) => <DynamicContent data={block} key={block.id} />)
  )
}
