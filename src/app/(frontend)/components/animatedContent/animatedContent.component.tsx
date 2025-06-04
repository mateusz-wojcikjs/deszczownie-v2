'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { AnimatedContentProps } from './animatedContent.types'

export const AnimatedContent = ({ children }: AnimatedContentProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
