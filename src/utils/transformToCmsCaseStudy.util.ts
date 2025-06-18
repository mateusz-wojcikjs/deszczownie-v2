import { CaseStudy, Media } from '@/payload-types'
import { CmsCaseStudy } from '@/app/(frontend)/interfaces/cms'
import { transformToCmsProduct } from './transformToCmsProduct.util'
import { Product } from '@/payload-types'

export const transformToCmsCaseStudy = (caseStudy: CaseStudy): CmsCaseStudy => {
  return {
    slug: caseStudy.slug ?? '',
    date: caseStudy.date,
    image: caseStudy.image as Media,
    title: caseStudy.title,
    content: caseStudy.content,
    images:
      caseStudy.images
        ?.map((img) => img.media)
        .filter((media): media is Media => typeof media !== 'number') ?? [],
    id: caseStudy.id,
    relatedProducts: caseStudy.relatedProducts
      ? transformToCmsProduct(caseStudy.relatedProducts as Product)
      : undefined,
  }
}
