import Image from 'next/image'
import { CmsImageBlock } from '@/app/(frontend)/interfaces/cms/blocks'
import { JSX } from 'react'

export const ImageBlock: (props: CmsImageBlock) => JSX.Element = (props: CmsImageBlock): JSX.Element => {
  const { data } = props;
  return(
    <div className='aspect-[4/3] relative image-block'>
      {!!data.image.url && <Image src={data.image.url} alt={data.image.alt} fill objectFit='cover' />}
    </div>
  );
}
