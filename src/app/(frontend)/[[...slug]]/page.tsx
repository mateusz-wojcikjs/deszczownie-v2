import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { DynamicContent } from '@/app/(frontend)/components/dynamicContent'


export default async function Page({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const mergedSlug = slug ? slug.join('/') : 'home';
  const slugSegments = slug || [];
  const lastSegment = slugSegments[slugSegments.length - 1];

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: mergedSlug,
      }
    }
  });

  console.log(mergedSlug)

  const page = data.docs?.[0]

  const categoryData = await payload.find({
    collection: 'categories',
    where: { slug: { equals: lastSegment } },
  });

  if (!page) {
    return notFound()
  }
  let productList;
  if (categoryData.docs?.length) {
    productList = await payload.find({
      collection: 'products',
      where: { category: { equals: categoryData.docs[0].id } },
    });
  }

  return (
      page.blocks.map((block) => <DynamicContent data={block} key={block.id} />)
  )
}
