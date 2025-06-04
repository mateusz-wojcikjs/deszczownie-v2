'use client'

import Image from 'next/image'
import { Media } from '@/payload-types'
import { FC, JSX } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export interface LinkProps {
  id: string
  link: {
    type: 'custom' | 'refrence'
    reference: {
      value: {
        id: string
        slug: string
      }
    }
    url: string
    label: string
    icon: boolean
    newTab: boolean
    appearance: 'primary' | 'secondary' | 'default'
  }
}

export interface HeroProps {
  title: string
  media: Media
  type: 'mediumImpact' | 'highImpact'
  description?: string
  links?: LinkProps[]
}

export const Hero: FC<HeroProps> = (props: HeroProps): JSX.Element => {
  const { title, description, media, links, type }: HeroProps = props
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 300], [0, 200])
  const titleY = useTransform(scrollY, [0, 200], [0, -50])
  const descY = useTransform(scrollY, [0, 200], [0, -30])

  if (type === 'highImpact') {
    return (
      <div className="relative min-h-[80vh] flex lg:items-center before:absolute before:inset-0 before:z-10 before:block before:bg-linear-65 before:from-slate-800/80 before:to-secondary-500/80 overflow-hidden">
        {!!media.url && (
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full">
            <Image className="object-cover" fill src={media.url} alt={media.alt} priority />
          </motion.div>
        )}
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <motion.h1
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-4xl 2xl:text-6xl mt-48 lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase"
          >
            {title}
          </motion.h1>
          <motion.p
            style={{ y: descY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-md text-center"
          >
            {description}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
            }}
          >
            {!!links?.length &&
              links.map(
                (link): JSX.Element => (
                  <motion.div
                    key={link.id}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link
                      className={`button button--${link.link.appearance}`}
                      href={link.link.reference.value.slug}
                    >
                      {link.link.label}
                    </Link>
                  </motion.div>
                ),
              )}
          </motion.div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative min-h-[33vh] flex lg:items-center before:absolute before:inset-0 before:z-10 before:block before:bg-linear-65 before:from-slate-800/80 before:to-secondary-500/80 overflow-hidden">
        {!!media.url && (
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full">
            <Image className="object-cover" fill src={media.url} alt={media.alt} priority />
          </motion.div>
        )}
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <motion.h1
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-4xl 2xl:text-6xl mt-48 lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    )
  }
}
