import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero'
import { slugField } from '@/fields/slug'
import { TextBlock } from '@/blocks/TextBlock'
import { TextWithImage } from '@/blocks/TextWithImage'
import { OfferSection } from '@/blocks/OfferSection'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [HeroBlock, TextBlock, TextWithImage, OfferSection],
    },
    slugField(),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.parent) {
          const parentPage = await req.payload.findByID({
            collection: 'pages',
            id: data.parent,
          });
          data.slug = `${parentPage.slug}/${data.slug}`;
        }
        return data;
      },
    ],
  },
}
