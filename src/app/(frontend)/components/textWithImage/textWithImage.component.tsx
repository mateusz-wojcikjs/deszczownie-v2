import Image from 'next/image'
import { RichText } from '@/app/(frontend)/components'
import { variantClasses } from './textWithImage.consts'
import clsx from 'clsx'
import { DynamicContentVariant, FilesPaths } from '@/app/(frontend)/enums'
import { TextWithImageProps } from './textWithImage.types'
import { TextWithImageAnimated } from './textWithImage.animated'

export const TextWithImage = (props: TextWithImageProps) => {
  const { data, variant = DynamicContentVariant.Default }: TextWithImageProps = props

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={FilesPaths.LineDrawingDecoration}
          alt=""
          fill
          className="opacity-10 object-cover"
        />
      </div>
      <div className={clsx(variantClasses[variant])}>
        <TextWithImageAnimated>
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {data.textAndImage?.map((block) => {
              if (block.blockType === 'text') {
                return (
                  <div key={block.id} className="basis-1/2">
                    {block.headline && (
                      <h2 className="text-2xl text-center text-slate-600 mb-4">{block.headline}</h2>
                    )}
                    {block.additionalHeadline && (
                      <h5 className="text-sm text-center text-green-800 mb-4">
                        {block.additionalHeadline}
                      </h5>
                    )}
                    <RichText content={block.text.root.children} />
                  </div>
                )
              }

              if (block.blockType === 'image') {
                return (
                  <div
                    key={block.id}
                    className="flex-1 relative h-full md:max-h-[50vh] w-full aspect-[4/3] zoom-effect overflow-hidden rounded-md shadow-xl"
                  >
                    <Image
                      fill
                      src={block.media.url}
                      alt={block.media.alt}
                      className="object-cover"
                    />
                  </div>
                )
              }

              return null
            })}
          </div>
        </TextWithImageAnimated>
      </div>
    </div>
  )
}
