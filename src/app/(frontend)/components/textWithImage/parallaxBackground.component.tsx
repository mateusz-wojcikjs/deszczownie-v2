'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FilesPaths } from '@/app/(frontend)/enums'

export const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className="absolute top-full left-16 w-auto h-full">
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image
          src={FilesPaths.DropDecoration}
          alt=""
          width={300}
          height={300}
          className="opacity-10 object-cover"
        />
      </motion.div>
    </div>
  )
}
