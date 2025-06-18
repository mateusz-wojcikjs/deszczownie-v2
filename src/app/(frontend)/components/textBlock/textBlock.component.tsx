import React from 'react'
import { AnimatedContent, RichText } from '@/app/(frontend)/components'
import { TextBlockProps } from './textBlock.types'
import { variantClasses } from '../textWithImage/textWithImage.consts'
import clsx from 'clsx'
import { DynamicContentVariant } from '@/app/(frontend)/enums'

export const TextBlock = (props: TextBlockProps) => {
  const { data, variant = DynamicContentVariant.Default }: TextBlockProps = props

  return (
    <section className={clsx(variantClasses[variant])}>
      <AnimatedContent>
        <div className="">{data.text && <RichText content={data.text.root.children} />}</div>
      </AnimatedContent>
    </section>
  )
}
