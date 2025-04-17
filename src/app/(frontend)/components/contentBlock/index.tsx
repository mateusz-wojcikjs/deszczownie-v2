import React from 'react'
import { RichText } from '@/app/(frontend)/components/RichText'

export const ContentBlock = ({ data }) => {
  console.log(data)
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row gap-y-12 gap-x-8">
        <RichText content={data.text.root.children} />
      </div>
    </section>
  )
}
