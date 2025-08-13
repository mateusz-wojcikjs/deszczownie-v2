import { BasePayload, getPayload, PaginatedDocs } from 'payload'
import { CmsProduct, PageProps, Params } from '@/app/(frontend)/interfaces'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { JSX } from 'react'
import {
  CategorySidebar,
  ProductItemList,
  DynamicContent,
  ProductPage,
  Hero,
} from '@/app/(frontend)/components'
import { Category, Page, Product } from '@/payload-types'
import { DynamicContentVariant, Route } from '@/app/(frontend)/enums'
import { Collection } from '@/enums'
import { transformPayloadBlock, transformToCmsProduct, LinkBuilder } from '@/utils'

export default async function Offer(props: PageProps) {
  const { slug }: Params = await props.params
  const payload: BasePayload = await getPayload({ config })
  const mergedSlug: string = slug ? slug.join('/') : Route.Home
  const slugSegments: string[] = slug || []
  const lastSegment: string = slugSegments[slugSegments.length - 1]
  const productData = await payload.find({
    collection: Collection.Products,
    where: { slug: { equals: lastSegment } },
  })
  const currentSlug: string = slug[slug.length - 1] || ''

  if (slug.length === 1) {
    const [offersPageData, categoryResult] = await Promise.all([
      payload.find({
        collection: Collection.Pages,
        where: { slug: { equals: LinkBuilder.offers.querySlug(slug) } },
      }),
      payload.find({
        collection: Collection.Categories,
        where: { slug: { equals: lastSegment } },
      }),
    ])

    const page: Page = offersPageData.docs?.[0]
    const category: Category = categoryResult.docs?.[0]

    if (!page || !category) {
      return notFound()
    }

    return (
      <main>
        {typeof category.categoryImage !== 'number' && (
          <Hero title={category.title} media={category.categoryImage} type="mediumImpact" />
        )}
        <div className="container flex pt-12 lg:py-16">
          <div className="w-1/4 pr-6 hidden lg:block">
            <CategorySidebar currentSlug={currentSlug} />
          </div>
          <div className="w-full lg:w-3/4 product-content">
            {page?.blocks!.map(
              (block): JSX.Element => (
                <DynamicContent
                  data={transformPayloadBlock(block)}
                  key={block.id}
                  variant={DynamicContentVariant.Offer}
                />
              ),
            )}
          </div>
        </div>
      </main>
    )
  }

  if (slug.length === 2) {
    const [categoryResult, offersPageData]: [PaginatedDocs<Category>, PaginatedDocs<Page>] =
      await Promise.all([
        payload.find({
          collection: Collection.Categories,
          where: { slug: { equals: lastSegment } },
        }),
        payload.find({
          collection: Collection.Pages,
          where: { slug: { equals: 'oferta/' + mergedSlug } },
        }),
      ])

    const category: Category = categoryResult.docs?.[0]
    const page: Page = offersPageData.docs?.[0]

    if (!category || !page) {
      return notFound()
    }

    const products: PaginatedDocs<Product> = await payload.find({
      collection: Collection.Products,
      where: {
        category: {
          equals: category.id,
        },
      },
    })

    return (
      <div>
        {typeof category.categoryImage !== 'number' && (
          <Hero title={category.title} media={category.categoryImage} type="mediumImpact" />
        )}
        <div className="container flex pt-12 lg:py-16">
          <div className="basis-1/4 pr-6 hidden lg:block">
            <CategorySidebar currentSlug={currentSlug} />
          </div>
          <div className="basis-3/4 flex flex-col gap-4 w-full">
            {page?.blocks!.map(
              (block): JSX.Element => (
                <DynamicContent
                  data={transformPayloadBlock(block)}
                  key={block.id}
                  variant={DynamicContentVariant.Offer}
                />
              ),
            )}
            {products.docs.map(
              (product: Product): JSX.Element => (
                <ProductItemList
                  key={product.id}
                  url={`${category.slug}/${product.slug}`}
                  name={product.title}
                  thumbnail={product.image}
                  tableData={product.table}
                />
              ),
            )}
          </div>
        </div>
      </div>
    )
  }

  const productTyped: Product = productData.docs[0]

  if (productTyped) {
    const productTypedData: CmsProduct = transformToCmsProduct(productTyped)

    return (
      <div className="">
        <ProductPage product={productTypedData}>
          <div className="container flex pt-12 lg:pt-16 xl:pt-24">
            <div className="w-1/4 pr-6 hidden lg:block">
              <CategorySidebar currentSlug={currentSlug} />
            </div>
            <div className="lg:w-3/4 product-content">
              {productTypedData.blocks?.map(
                (block): JSX.Element => (
                  <DynamicContent
                    data={transformPayloadBlock(block)}
                    key={block.id}
                    variant={DynamicContentVariant.Offer}
                  />
                ),
              )}
            </div>
          </div>
        </ProductPage>
      </div>
    )
  }

  return notFound()
}
