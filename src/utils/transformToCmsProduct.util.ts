import { CmsProduct, CmsCategory, CmsProductBlock } from '@/app/(frontend)/interfaces'
import { Media, Product } from '@/payload-types'

export const transformToCmsProduct = (product: Product): CmsProduct => {
  if (typeof product.image === 'number') {
    throw new Error('Product image must be a Media object, not a number')
  }
  if (typeof product.images === 'number') {
    throw new Error('Product images must be a Media object, not a number')
  }
  return {
    id: product.id,
    title: product.title,
    slug: product.slug,
    image: product.image,
    images: product.images?.map((img) => img.image as unknown as Media) || [],
    category: product.category as unknown as CmsCategory,
    blocks: product.blocks as unknown as CmsProductBlock[] | null,
    table: Array.isArray(product.table) ? (product.table as string[][]) : [],
    attachment: product.attachment as unknown as Media,
  }
}
