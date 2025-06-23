import { JSX } from 'react'
import { DynamicContentVariant } from '@/app/(frontend)/enums'
import { CmsDynamicContentBlock } from '@/app/(frontend)/interfaces/cms/blocks'
import {
  TextBlock,
  TripleBoxes,
  TextWithImage,
  RichText,
  ImageBlock,
  Hero,
  OffersBlock,
  CaseStudiesSection,
  ProductDataWithImages,
} from '@/app/(frontend)/components'

export const DynamicContent = ({
  data,
  variant,
}: {
  data: CmsDynamicContentBlock
  variant?: DynamicContentVariant
}): JSX.Element => {
  switch (data.blockType) {
    case 'hero':
      return (
        <Hero
          title={data.title}
          media={data.media}
          description={data.description}
          links={data.links}
          type={data.type}
        />
      )
    case 'textWithImage':
      return <TextWithImage data={data} variant={variant} />
    case 'offerSection':
      return <OffersBlock data={data} />
    case 'caseStudiesSection':
      return <CaseStudiesSection data={data} />
    case 'textBlock':
      return <TextBlock data={data} variant={variant} />
    case 'imageBlock':
      return <ImageBlock {...data} />
    case 'text':
      return <RichText content={data.text.root.children} />
    case 'tripleBoxes':
      return <TripleBoxes data={data} />
    case 'productDataWithImages':
      return <ProductDataWithImages id={data.id} data={data} />
    default:
      return <>{JSON.stringify(data, null, 2)}</>
  }
}
