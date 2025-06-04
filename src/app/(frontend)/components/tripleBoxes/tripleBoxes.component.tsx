import { TripleBoxesProps } from './tripleBoxes.types'
import Image from 'next/image'
import { RichText } from '@/app/(frontend)/components'

export const TripleBoxes = ({ data }: TripleBoxesProps) => {
  console.log(data)

  return (
    <section className="container py-16">
      <div className="text-left mb-12">
        <h2 className="text-2xl lg:text-3xl font-medium mb-2 text-slate-700">{data.title.main}</h2>
        <h3 className="text-xl lg:text-2xl font-medium text-slate-500">{data.title.highlight}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        <div className="lg:col-span-1">
          <Image
            width={600}
            height={600}
            src={data.images[0].media.url}
            alt="Feature preview"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
        <div className="lg:col-span-2">
          <Image
            width={600}
            height={600}
            src={data.images[1].media.url}
            alt="Feature detail"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.features.map((feature, idx) => (
          <div
            key={idx}
            className="
              p-8
              bg-white/60 backdrop-blur-sm
              rounded-md
              shadow-lg
              transform transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <div className="font-semibold text-lg mb-2 text-slate-500">
              {String(idx + 1).padStart(2, '0')}
            </div>

            <h3 className="text-xl text-slate-700 font-light mb-4">{feature.title}</h3>
            <RichText content={feature.text.root.children} />
          </div>
        ))}
      </div>
    </section>
  )
}
