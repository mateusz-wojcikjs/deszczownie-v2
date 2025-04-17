import { BasePayload, getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { ProductPage } from '@/app/(frontend)/components/productPage'
import { DynamicContent } from '@/app/(frontend)/components/dynamicContent'
import { notFound } from 'next/navigation'
import { JSX } from 'react'
import { CategorySidebar, ProductItemList } from '@/app/(frontend)/components'
import { Page, Product } from '@/payload-types'
import { CmsCategory } from '@/app/(frontend)/interfaces'

interface PageProps {
  slug: string[]
}

interface OfferProps {
  params: PageProps;
}

export default async function Offer(props: Promise<OfferProps>) {
  const { params }: OfferProps = await props;
  const { slug }: PageProps = params;
  const payload: BasePayload = await getPayload({ config });
  const mergedSlug: string = slug ? slug.join('/') : 'home';
  const slugSegments: string[] = slug || [];
  const lastSegment: string = slugSegments[slugSegments.length - 1];
  const productData = await payload.find({
    collection: 'products',
    where: { slug: { equals: lastSegment } },
  });
  const currentSlug: string = params.slug?.[params.slug.length - 1] || '';

  if (slug.length === 1) {
    const offersPageData: PaginatedDocs<Page> = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'oferta/' + slug } },
    });

    const page = offersPageData.docs?.[0];

    if (!page) {
      return notFound()
    }

    return (
      <main>
        {page?.blocks!.map((block): JSX.Element => <DynamicContent data={block} key={block.id} />)}
      </main>
    );
  }

  if (slug.length === 2) {
    const categoryResult: PaginatedDocs<CmsCategory> = await payload.find({
      collection: 'categories',
      where: { slug: { equals: lastSegment } },
    })
    const category: CmsCategory = categoryResult.docs?.[0];

    if (!category) {
      return notFound()
    }
    const offersPageData = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'oferta/' + mergedSlug } },
    })

    const products: PaginatedDocs<Product> = await payload.find({
      collection: 'products',
      where: {
        category: {
          equals: category.id,
        },
      },
    });

    const page: Page = offersPageData.docs?.[0];

    if (!page) {
      return notFound()
    }

    return (
      <div>
        {page?.blocks!.map((block): JSX.Element => (
          <DynamicContent data={block} key={block.id} />
        ))}
        <div className="container flex pt-12 lg:py-16">
          <div className="w-1/4 pr-6 hidden lg:block">
            <CategorySidebar currentSlug={currentSlug} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {products.docs.map((product: Product): JSX.Element => {
              return (
                <ProductItemList
                  key={product.id}
                  url={`${category.slug}/${product.slug}`}
                  name={product.title}
                  thumbnail={product.image}
                  tableData={product.table}
                />
              )
            })}
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
              {productData?.docs[0]?.blocks?.map((block): JSX.Element => (
                <DynamicContent data={block} key={block.id} />
              ))}
            </div>
          </div>
        </ProductPage>
      </div>
    )
  }

  return notFound();
}
