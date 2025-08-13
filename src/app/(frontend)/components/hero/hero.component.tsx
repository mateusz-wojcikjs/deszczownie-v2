import Image from 'next/image'
import { FC, JSX } from 'react'
import { HeroProps } from './hero.types'
import { HeroAnimations } from './heroAnimations.component'
import { ParallaxBackground } from '../textWithImage/parallaxBackground.component'

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
  const { title, description, media, type }: HeroProps = props

  if (type === 'highImpact') {
    return (
      <section
        className="relative min-h-[80vh] flex lg:items-center before:absolute before:inset-0 before:z-10 before:block before:bg-linear-65 before:from-slate-800/80 before:to-secondary-500/80"
        aria-labelledby="hero-title"
        role="banner"
      >
        {!!media.url && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              className="object-cover"
              fill
              src={media.url}
              alt={media.alt || `Hero image for ${title}`}
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
        )}
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <h1
            id="hero-title"
            className="text-4xl 2xl:text-6xl mt-48 lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase"
          >
            {title}
          </h1>
          {description && (
            <p className="text-3xl mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-md text-center">
              {description}
            </p>
          )}
        </div>
        <HeroAnimations {...props} />
        <ParallaxBackground />
      </section>
    )
  } else {
    return (
      <section
        className="relative min-h-[33vh] flex lg:items-center before:absolute before:inset-0 before:z-10 before:block before:bg-linear-65 before:from-slate-800/80 before:to-secondary-500/80 overflow-hidden"
        aria-labelledby="hero-title"
        role="banner"
      >
        {!!media.url && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              className="object-cover"
              fill
              src={media.url}
              alt={media.alt || `Hero image for ${title}`}
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
        )}
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <h1
            id="hero-title"
            className="text-4xl 2xl:text-6xl lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase"
          >
            {title}
          </h1>
        </div>
        <HeroAnimations {...props} />
      </section>
    )
  }
}
