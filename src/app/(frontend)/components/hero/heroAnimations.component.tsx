'use client'

import { FC, JSX } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HeroProps } from './hero.types'
import { ButtonLink } from '../buttonLink/buttonLink.component'
import { ButtonTheme } from '@/app/(frontend)/enums'

export const HeroAnimations: FC<HeroProps> = (props: HeroProps): JSX.Element => {
  const { title, description, media, links, type }: HeroProps = props
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 300], [0, 200])
  const titleY = useTransform(scrollY, [0, 200], [0, -50])
  const descY = useTransform(scrollY, [0, 200], [0, -30])

  return (
    <>
      {/* Animated background image */}
      {!!media.url && (
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <div className="w-full h-full" />
        </motion.div>
      )}

      {/* Animated title */}
      <motion.div
        style={{ y: titleY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="container relative z-20 flex flex-col justify-center items-center">
          <div className="text-4xl 2xl:text-6xl mt-48 lg:mt-4 mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-lg text-center uppercase opacity-0">
            {title}
          </div>
        </div>
      </motion.div>

      {/* Animated description */}
      {description && type === 'highImpact' && (
        <motion.div
          style={{ y: descY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="container relative z-20 flex flex-col justify-center items-center">
            <div className="text-3xl mb-6 font-semibold text-gray-50 drop-shadow-xl max-w-screen-md text-center opacity-0">
              {description}
            </div>
          </div>
        </motion.div>
      )}

      {/* Animated navigation */}
      {!!links?.length && type === 'highImpact' && (
        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute inset-0 pointer-events-auto flex items-center justify-center top-52"
          aria-label="Hero navigation"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
          }}
        >
          <div className="container relative z-20 flex flex-col justify-center items-center">
            <div className="flex gap-4">
              {links.map(
                (link): JSX.Element => (
                  <motion.div
                    key={link.id}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    <ButtonLink
                      theme={ButtonTheme[link.link.appearance as keyof typeof ButtonTheme]}
                      href={link.link.reference.value.slug}
                      aria-label={link.link.label}
                      external={link.link.newTab}
                    >
                      {link.link.label}
                    </ButtonLink>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
