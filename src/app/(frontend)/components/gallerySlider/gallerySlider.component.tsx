'use client'
import { PhotoView } from 'react-photo-view'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { PhotoProviderWrapper } from '../../providers/PhotoProviderWrapper'
import { Media } from '@/payload-types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { GallerySliderProps } from './gallerySlider.types'

export const GallerySlider = (props: GallerySliderProps) => {
  const { images, id }: GallerySliderProps = props
  return (
    <PhotoProviderWrapper shouldRender={true}>
      <div className="relative min-h-[334px] pb-4 mt-10 lg:my-12 mb-12">
        <Swiper
          id={`gallery-slider-${id}`}
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
          {images.map((image: Media, i: number) => (
            <SwiperSlide key={i}>
              <PhotoView src={image.url ?? ''}>
                <div className="relative h-[300px] zoom-effect overflow-hidden rounded-lg ">
                  <Image
                    src={image.url ?? ''}
                    alt={image.alt ?? ''}
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
    </PhotoProviderWrapper>
  )
}
