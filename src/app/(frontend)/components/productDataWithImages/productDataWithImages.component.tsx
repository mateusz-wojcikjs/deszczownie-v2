import { FC } from 'react'
import { ProductDataWithImagesProps } from './productDataWithImages.types'
import { ButtonTheme, Route, IconName } from '../../enums'
import { RichText, ButtonLink, GallerySlider, AnimatedContent } from '@/app/(frontend)/components'
import { CmsProductDataWithImagesBlock } from '@/app/(frontend)/interfaces/cms'

export const ProductDataWithImages: FC<ProductDataWithImagesProps> = (
  props: ProductDataWithImagesProps,
) => {
  const { data, id }: ProductDataWithImagesProps = props
  const { title, content, images }: CmsProductDataWithImagesBlock = data

  return (
    <section className="mt-6">
      <AnimatedContent>
        <div className="container bg-gray-100 py-8 lg:py-12 px-6 lg:px-8 rounded-lg shadow-md">
          <div className="mb-8">
            <div className="max-w-full mb-8 prose">
              <h2 className="text-xl mb-3">{title}</h2>
              <RichText content={content.root.children} />
            </div>
            {images.length > 0 && (
              <GallerySlider images={images.map((image) => image.media)} id={id.toString()} />
            )}
          </div>

          <ButtonLink href={Route.Contact} theme={ButtonTheme.Primary} icon={IconName.ArrowRight}>
            Jestem zainteresowany,-a
          </ButtonLink>
        </div>
      </AnimatedContent>
    </section>
  )
}
