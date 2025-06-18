import Image from 'next/image'
import { CmsImageBlock } from '@/app/(frontend)/interfaces/cms/blocks'
import { JSX } from 'react'

export const ImageBlock: (props: CmsImageBlock) => JSX.Element = (
  props: CmsImageBlock,
): JSX.Element => {
  const { image }: CmsImageBlock = props

  return (
    <div className="aspect-[4/3] relative image-block">
      {!!image.url && <Image src={image.url} alt={image.alt} fill objectFit="cover" />}
    </div>
  )
}
