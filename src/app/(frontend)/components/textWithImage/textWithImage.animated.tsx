'use client'

import { motion } from 'framer-motion'
import { TextWithImageAnimatedProps } from './textWithImage.types'

export const TextWithImageAnimated = ({ children }: TextWithImageAnimatedProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
