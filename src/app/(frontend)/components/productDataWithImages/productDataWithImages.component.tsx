'use client'

import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PhotoView } from 'react-photo-view'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProductDataWithImagesProps } from './productDataWithImages.types'
import { IconName } from '../../enums/components/iconName.enum'
import { ButtonTheme } from '../../enums'
import { RichText, ButtonLink } from '@/app/(frontend)/components'

export const ProductDataWithImages: FC<ProductDataWithImagesProps> = ({ data, id }) => {
  const { title, content, images } = data

  return (
    <section className="mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container bg-gray-100 py-8 lg:py-12 px-6 lg:px-8 rounded-lg shadow-md"
      >
        <div className="mb-8">
          <div className="max-w-full mb-8 prose">
            <h2 className="text-xl mb-3">{title}</h2>
            <RichText content={content.root.children} />
          </div>

          {images && images.length > 0 && (
            <div className="relative min-h-[334px] pb-4 mt-10 lg:my-12 mb-12">
              <Swiper
                id={`product-data-with-images-${id}`}
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: `#slider-navigation-${id} .swiper-button-prev`,
                  nextEl: `#slider-navigation-${id} .swiper-button-next`,
                }}
                loop={true}
                pagination={{
                  el: `#slider-navigation-${id} .swiper-pagination`,
                  clickable: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <PhotoView src={image.media.url ?? ''}>
                      <div className="relative h-[300px] zoom-effect overflow-hidden rounded-lg ">
                        <Image
                          src={image.media.url ?? ''}
                          alt={image.media.alt ?? ''}
                          fill
                          className="object-cover cursor-pointer"
                        />
                      </div>
                    </PhotoView>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                id={`slider-navigation-${id}`}
                className="absolute -bottom-6 h-10 w-auto z-10 flex items-center left-1/2 -translate-x-1/2 justify-between gap-4"
              >
                <button className="swiper-button-prev !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-gray-50 after:!text-gray-800 after:!text-xl !relative flex-[1_0_40px] !mt-0 !top-0" />
                <div className="swiper-pagination !bottom-0 [&_.swiper-pagination-bullet]:!bg-gray-600 [&_.swiper-pagination-bullet-active]:!bg-gray-800 !relative flex items-center justify-center gap-[6px]" />
                <button className="swiper-button-next !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-gray-50 after:!text-gray-800 after:!text-xl !relative flex-[1_0_40px] !mt-0 !top-0" />
              </div>
            </div>
          )}
        </div>

        <ButtonLink href="/kontakt" theme={ButtonTheme.Primary} icon={IconName.ArrowRight}>
          Jestem zainteresowany,-a
        </ButtonLink>
      </motion.div>
    </section>
  )
}
