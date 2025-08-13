'use client'

import { ButtonLink } from '../buttonLink/buttonLink.component'
import { ButtonSize, ButtonTheme, IconName, Routing } from '@/app/(frontend)/enums'
import { CtaProps } from './cta.types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const Cta = ({ globalSettings, backgroundImage }: CtaProps) => {
  const currentPath = usePathname()

  const title = globalSettings?.cta?.title || 'Dlaczego deszczownie od KMK Agro?'
  const buttonText = globalSettings?.cta?.buttonText || 'Kontakt'
  const buttonLink = globalSettings?.cta?.buttonLink || '/kontakt'
  const backgroundColor = globalSettings?.cta?.backgroundColor || 'secondary'

  const getBackgroundColorClass = () => {
    switch (backgroundColor) {
      case 'primary':
        return 'bg-primary-500'
      case 'gray':
        return 'bg-gray-500'
      default:
        return 'bg-secondary-500'
    }
  }

  if (currentPath === `/${Routing.Contact}`) {
    return null
  }

  return (
    <div className="w-full h-full flex items-center relative min-h-[33vh]">
      <div className={`absolute top-0 left-0 ${getBackgroundColorClass()} w-full h-full z-0`}>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          )}
        </div>
      </div>
      <div className="container relative flex flex-col lg:flex-row items-center gap-y-12">
        <div className="basis-1/2">
          <div className="max-w-none text-2xl lg:text-4xl lg:leading-normal text-gray-100 font-semibold text-center lg:text-left">
            <p>
              <span>{title}</span>
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex gap-6 flex-wrap justify-center">
            <ButtonLink
              icon={IconName.ArrowRight}
              href={buttonLink}
              theme={ButtonTheme.Secondary}
              size={ButtonSize.Large}
            >
              {buttonText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
