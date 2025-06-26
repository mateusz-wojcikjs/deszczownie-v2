import { getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Routing } from '@/app/(frontend)/enums/routing.enum'
import { DynamicContent, CategoryBox } from '@/app/(frontend)/components'
import { Collection } from '@/enums'
import { Page, Category, Media } from '@/payload-types'
import { transformPayloadBlock } from '@/utils/transformPayloadBlock.util'

export default async function OffersPage() {
  const payload = await getPayload({ config })

  const [pageData, categoriesData] = await Promise.all([
    payload.find({
      collection: Collection.Pages,
      where: {
        slug: {
          equals: Routing.Offers,
        },
      },
    }),
    payload.find({
      collection: Collection.Categories,
    }),
  ])

  const page: Page = pageData.docs?.[0]
  const categories: Category[] = categoriesData.docs

  console.log(pageData)

  if (!page) {
    return notFound()
  }

  return (
    <>
      {(page.blocks ?? []).map((block) => (
        <DynamicContent data={transformPayloadBlock(block)} key={block.id} />
      ))}
      {/* static list here */}
      <div className="container py-24">
        <h2 className="text-4xl text-center text-secondary mb-16">Wszystkie kategorie</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category: Category) => (
            <CategoryBox
              key={category.id}
              title={category.title}
              thumbnail={category.categoryImage as Media}
              slug={
                category.parentCategory
                  ? `${
                      typeof category.parentCategory !== 'number' && category.parentCategory.slug
                    }/${category.slug}`
                  : category.slug
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}
