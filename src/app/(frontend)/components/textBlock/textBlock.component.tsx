import React from 'react'
import { AnimatedContent, RichText } from '@/app/(frontend)/components'
import { TextBlockProps } from './textBlock.types'

export const TextBlock = ({ data }: TextBlockProps) => {
  return (
    <section className="">
      <AnimatedContent>
        <div className="">
          <RichText content={data.text.root.children} />
        </div>
      </AnimatedContent>
    </section>
  )
}
