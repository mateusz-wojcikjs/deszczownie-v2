import Image from 'next/image'
import { JSX } from 'react'
import { Icon } from '@/app/(frontend)/components'
import { IconName } from '@/app/(frontend)/enums'

export const ProductPage = ({ product, children }) => {
  console.log(product.blocks)
  return (
    <div className="">
      <div className="relative min-h-[33vh] flex lg:items-center before:absolute before:inset-0 before:z-10 before:block before:bg-linear-65 before:from-slate-800/80 before:to-secondary-500/80 overflow-hidden">
        {!!product.image.url && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              className="object-cover"
              fill
              src={product.image.url}
              alt={product.title}
              priority
            />
          </div>
        )}
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl 2xl:text-6xl mt-48 lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase">
            {product.title}
          </h1>
        </div>
      </div>
      {children}
      <div className="container mb-16 mt-24">
        <h3 className='text-4xl mb-12 text-secondary-500'>Podstawowe wymiary</h3>
        <div className="flex mb-16 flex-col lg:flex-row gap-x-6">
          <div className="basis-1/2">
            <table className="border-t-2 border-green-800/20 mt-4">
              <tbody>
              {product.table.map((row: string[], rowIndex: number): JSX.Element => (
                <tr key={rowIndex} className="border-b border-gray-400/30">
                  {row.map((cell: string, cellIndex: number): JSX.Element => <td
                    key={cellIndex}
                    className='first:text-primary-500 first:text-left first:font-bold px-3 py-4 text-center font-light'
                    dangerouslySetInnerHTML={{ __html: cell }} />)}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="basis-1/2 relative h-full w-full">
            {product.images.map((img): JSX.Element => (
              <div className='w-full'>
                <Image
                  src={img.image.url}
                  alt={img.image.alt}
                  width={0}
                  height={0}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <h4 className='text-center text-xl md:text-2xl lg:text-4xl mb-8 text-secondary-500'>Jeżeli chcesz dowiedzieć się więcej o dodatkowym wyposażeniu deszczowni, kliknij poniżej:</h4>
        <div className="flex justify-center">
          <a href={product.attachment.url} className="button button--primary group" target='_blank' rel='noopener noreferrer' download>
            <span className="flex gap-3">
              Pobierz katalog <Icon color='#fff' iconName={IconName.Download} className='stroke-white fill-white group-hover:fill-primary-500 group-hover:stroke-primary-500' />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
};
