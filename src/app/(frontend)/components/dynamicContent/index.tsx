import { JSX } from 'react'
import { Hero } from '@/app/(frontend)/components/hero'
import OffersBlock from '@/app/(frontend)/components/offersBlock'
import { ImageBlock } from '@/app/(frontend)/components/image'
import { ProductDataWithImages } from '../productDataWithImages/productDataWithImages.component'
import { DynamicContentVariant } from '@/app/(frontend)/enums'
import { TextBlock, TripleBoxes, TextWithImage, RichText } from '@/app/(frontend)/components'

export const DynamicContent = ({
  data,
  variant,
}: {
  data: any
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
      return <OffersBlock data={data} variant={variant} />
    case 'textBlock':
      return <TextBlock data={data} variant={variant} />
    case 'imageBlock':
      return <ImageBlock data={data} />
    case 'text':
      return <RichText content={data[0].text.root.children} />
    case 'tripleBoxes':
      return <TripleBoxes data={data} />
    case 'productDataWithImages':
      return <ProductDataWithImages id={data.id} data={data} />
    default:
      return <>{JSON.stringify(data, null, 2)}</>
  }
}
