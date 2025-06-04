import { BasePayload, getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { ProductPage } from '@/app/(frontend)/components/productPage'
import { DynamicContent } from '@/app/(frontend)/components/dynamicContent'
import { notFound } from 'next/navigation'
import { JSX } from 'react'
import { CategorySidebar, ProductItemList } from '@/app/(frontend)/components'
import { Page, Product } from '@/payload-types'
import { CmsCategory } from '@/app/(frontend)/interfaces'
import { Hero } from '../../components/hero'

interface PageProps {
  slug: string[]
}

interface OfferProps {
  params: PageProps
}

export default async function Offer({ params }: OfferProps) {
  const { slug }: PageProps = params
  const payload: BasePayload = await getPayload({ config })
  const mergedSlug: string = slug ? slug.join('/') : 'home'
  const slugSegments: string[] = slug || []
  const lastSegment: string = slugSegments[slugSegments.length - 1]
  const productData = await payload.find({
    collection: 'products',
    where: { slug: { equals: lastSegment } },
  })
  const currentSlug: string = params.slug?.[params.slug.length - 1] || ''

  if (slug.length === 1) {
    const [offersPageData, categoryResult] = await Promise.all([
      payload.find({
        collection: 'pages',
        where: { slug: { equals: 'oferta/' + slug } },
      }),
      payload.find({
        collection: 'categories',
        where: { slug: { equals: lastSegment } },
      }),
    ])

    const page = offersPageData.docs?.[0]
    const category = categoryResult.docs?.[0]

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
                <DynamicContent data={block} key={block.id} variant="offer" />
              ),
            )}
          </div>
        </div>
      </main>
    )
  }

  if (slug.length === 2) {
    const [categoryResult, offersPageData] = await Promise.all([
      payload.find({
        collection: 'categories',
        where: { slug: { equals: lastSegment } },
      }),
      payload.find({
        collection: 'pages',
        where: { slug: { equals: 'oferta/' + mergedSlug } },
      }),
    ])

    const category = categoryResult.docs?.[0]
    const page = offersPageData.docs?.[0]

    if (!category || !page) {
      return notFound()
    }

    const products = await payload.find({
      collection: 'products',
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
          <div className="w-1/4 pr-6 hidden lg:block">
            <CategorySidebar currentSlug={currentSlug} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {page?.blocks!.map(
              (block): JSX.Element => (
                <DynamicContent data={block} key={block.id} variant="offer" />
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

  if (productData.docs?.length) {
    return (
      <div className="">
        <ProductPage product={productData.docs[0]}>
          <div className="container flex pt-12 lg:pt-16 xl:pt-24">
            <div className="w-1/4 pr-6 hidden lg:block">
              <CategorySidebar currentSlug={currentSlug} />
            </div>
            <div className="lg:w-3/4 product-content">
              {productData?.docs[0]?.blocks?.map(
                (block): JSX.Element => <DynamicContent data={block} key={block.id} />,
              )}
            </div>
          </div>
        </ProductPage>
      </div>
    )
  }

  return notFound()
}
