import { getPayload, PaginatedDocs, Payload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { DynamicContent, Icon } from '@/app/(frontend)/components'
import { Collection } from '@/enums'
import { Page as PageType } from '@/payload-types'
import { Route } from '../../enums/route.enum'
import { PageProps, Params, PayloadBlock } from '../../interfaces'
import { transformPayloadBlock } from '@/utils'
import { DynamicContentVariant, FilesPaths, IconName, IconColor } from '../../enums'
import Image from 'next/image'

export default async function Page(props: PageProps) {
  const { params }: PageProps = props
  const { slug }: Params = await params
  const payload: Payload = await getPayload({ config })
  const mergedSlug: string = slug ? slug.join('/') : Route.Home

  const data: PaginatedDocs<PageType> = await payload.find({
    collection: Collection.Pages,
    where: {
      slug: {
        equals: mergedSlug,
      },
    },
  })

  const pageData: PageType = data.docs?.[0]

  if (!pageData) {
    return notFound()
  }

  return (
    <div>
      {pageData.blocks?.map((block: PayloadBlock) => (
        <DynamicContent
          data={transformPayloadBlock(block)}
          key={block.id}
          variant={DynamicContentVariant.Default}
        />
      ))}
      <section className="py-32 relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={FilesPaths.CompanyFeaturesBackgroundImage}
            alt=""
            fill
            className="object-cover mix-blend-multiply scale-110 animate-slow-float"
          />
          <div className="bg-emerald-950/90 absolute top-0 left-0 w-full h-full"></div>
        </div>

        {/* Parallax Overlay Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating particles effect */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-gentle-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-400/25 rounded-full animate-gentle-pulse"></div>

          {/* Additional floating elements */}
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-emerald-300/35 rounded-full animate-float-up"></div>
          <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-emerald-400/20 rounded-full animate-slow-float"></div>
          <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-emerald-500/15 rounded-full animate-gentle-pulse"></div>

          {/* Subtle geometric shapes */}
          <div className="absolute top-1/5 left-1/6 w-8 h-8 border border-emerald-400/10 rounded-full animate-slow-float"></div>
          <div className="absolute bottom-1/5 right-1/6 w-6 h-6 border border-emerald-300/15 rotate-45 animate-gentle-pulse"></div>

          {/* Gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-950/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-950/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-emerald-950/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-950/30 to-transparent"></div>

          {/* Radial gradient for center focus */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-emerald-950/20"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
              Kompleksowe rozwiązania nawadniające
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Zadbaj o swoje plony dzięki sprawdzonym technologiom do nawadniania. W naszej ofercie
              znajdziesz wszystko, czego potrzebujesz, by stworzyć wydajny i niezawodny system
              nawadniania w swoim gospodarstwie.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="border border-white/20 rounded-2xl p-6 flex gap-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/30">
                <div className="flex-shrink-0">
                  <Icon iconName={IconName.IrrigationFeature1} color={IconColor.Green} size={80} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-semibold mb-2">Zraszacze</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Idealne do ogrodów, szklarni i mniejszych pól. Równomierne rozprowadzanie wody.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="border border-white/20 rounded-2xl p-6 flex gap-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/30">
                <div className="flex-shrink-0">
                  <Icon iconName={IconName.IrrigationFeature2} color={IconColor.Green} size={80} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-semibold mb-2">Deszczownie</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Precyzyjne nawadnianie dużych areałów – szpulowe, mostowe, mobilne.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="border border-white/20 rounded-2xl p-6 flex gap-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/30">
                <div className="flex-shrink-0">
                  <Icon iconName={IconName.IrrigationFeature3} color={IconColor.Green} size={80} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-semibold mb-2">Armatura</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Trwałe złączki, zawory, szybkozłącza i wszystko, co łączy system w całość.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="border border-white/20 rounded-2xl p-6 flex gap-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/30">
                <div className="flex-shrink-0">
                  <Icon iconName={IconName.IrrigationFeature4} color={IconColor.Green} size={80} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-semibold mb-2">Pompy</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Wydajne jednostki do transportu wody w każdych warunkach – rolnictwo,
                    sadownictwo, warzywnictwo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Dlaczego warto wybrać KMK Agro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sprawdzone rozwiązania, które działają w każdych warunkach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.Offers} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Kompleksowa oferta</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Od deszczowni i pomp po armaturę i zraszacze – wszystko w jednym miejscu, od
                sprawdzonych producentów.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.Durability} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Wytrzymałość na lata</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sprzęt rolniczy RM Irrigation to solidna konstrukcja i odporność na intensywną
                eksploatację w trudnych warunkach.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.Efficiency} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Skuteczne i oszczędne nawadnianie
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nowoczesne systemy zaprojektowane z myślą o efektywnym wykorzystaniu wody – więcej
                plonów, mniejsze zużycie.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.Support} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Doradztwo techniczne</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pomagamy dobrać odpowiedni sprzęt do rodzaju upraw, powierzchni pola i dostępnych
                źródeł wody.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.DeliveryAndService} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Szybka dostawa i serwis</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Wiemy, jak ważny jest czas w sezonie – zapewniamy szybką realizację zamówień i
                wsparcie serwisowe.
              </p>
            </div>
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Icon iconName={IconName.Partnership} color={IconColor.White} size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Partnerskie podejście do rolnika
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Jesteśmy blisko branży – rozumiemy realia pracy w polu i stawiamy na długofalową
                współpracę, a nie jednorazową sprzedaż.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  // return pageData.blocks?.map((block: PayloadBlock) => (
  //   <DynamicContent
  //     data={transformPayloadBlock(block)}
  //     key={block.id}
  //     variant={DynamicContentVariant.Default}
  //   />
  // ))
}
