import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero'
import { slugField } from '@/fields/slug'
import { TextBlock } from '@/blocks/TextBlock'
import { TextWithImage } from '@/blocks/TextWithImage'
import { OfferSection } from '@/blocks/OfferSection'
import { CaseStudiesSection } from '@/blocks/CaseStudiesSection'
import { ProductDataWithImagesBlock } from '@/blocks/ProductDataWithImages'
import { TripleBoxes } from '@/blocks/TripleBoxes'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Strona',
    plural: 'Strony',
  },
  defaultPopulate: {
    slug: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tytuł',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        HeroBlock,
        TextBlock,
        TextWithImage,
        OfferSection,
        CaseStudiesSection,
        ProductDataWithImagesBlock,
        TripleBoxes,
      ],
      label: 'Bloki',
    },
    slugField(),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
      label: 'Strona nadrzędna',
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.parent) {
          const parentPage = await req.payload.findByID({
            collection: 'pages',
            id: data.parent,
          })
          if (!data.slug.startsWith(`${parentPage.slug}/`)) {
            data.slug = `${parentPage.slug}/${data.slug}`
          }
        }
        return data
      },
    ],
  },
}
