import { JSX } from 'react'
import { Hero } from '@/app/(frontend)/components/hero'
import { TextWithImage } from '@/app/(frontend)/components/textWithImage'
import OffersBlock from '@/app/(frontend)/components/offersBlock'
import { ContentBlock } from '@/app/(frontend)/components/contentBlock'
import { RichText } from '@/app/(frontend)/components/RichText'
import { ImageBlock } from '@/app/(frontend)/components/image'

export const DynamicContent = ({ data }): JSX.Element => {
  switch (data.blockType) {
    case 'hero':
      return <Hero title={data.title} media={data.media} description={data.description} links={data.links} type={data.type} />
    case 'textWithImage':
      return <TextWithImage data={data} />
    case 'offerSection':
      return <OffersBlock data={data} />
    case 'textBlock':
      return <ContentBlock data={data} />
    case 'imageBlock':
      return <ImageBlock data={data} />
    case 'text':
      return <RichText content={data[0].text.root.children} />
    default:
      return <>{JSON.stringify(data, null, 2)}</>;
  }
}
