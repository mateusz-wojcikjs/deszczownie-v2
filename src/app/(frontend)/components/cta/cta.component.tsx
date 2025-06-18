import { ButtonLink } from '../buttonLink/buttonLink.component'
import { ButtonSize, ButtonTheme, IconName, Route } from '@/app/(frontend)/enums'

export const Cta = () => {
  return (
    <div className="w-full h-full flex items-center relative min-h-[33vh]">
      <div className="absolute top-0 left-0 bg-secondary-500 w-full h-full z-0 opacity-90"></div>
      <div className="container relative flex flex-col lg:flex-row items-center gap-y-12">
        <div className="basis-1/2">
          <div className="max-w-none text-2xl lg:text-4xl lg:leading-normal text-gray-100 font-semibold text-center lg:text-left">
            <p>
              <span>Dlaczego deszczownie od KMK Agro?</span>
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex gap-6 flex-wrap justify-center">
            <ButtonLink
              icon={IconName.ArrowRight}
              href={Route.Contact}
              theme={ButtonTheme.Primary}
              size={ButtonSize.Large}
            >
              Kontakt
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
