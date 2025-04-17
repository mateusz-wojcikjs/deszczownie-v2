import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero'
import { TextBlock } from '@/blocks/TextBlock'
import { TextWithImage } from '@/blocks/TextWithImage'
import { ProductMetaData } from '@/blocks/ProductMetaData'
import { slugField } from '@/fields/slug'
import { Image } from '@/blocks/Image'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Produkt',
    plural: 'Produkty',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nazwa produktu',
      required: true,
    },
    {
      label: 'Główne zdjęcie',
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [HeroBlock, TextBlock, TextWithImage, ProductMetaData, Image],
    },
    {
      name: 'category',
      required: true,
      label: 'Kategoria',
      relationTo: 'categories',
      type: 'relationship',
    },
    {
      name: 'table',
      label: "Tabela",
      type: "json",
      admin: {
        components: {
          Field: '@/fields/components/Table#Table',
        },
      },
    },
    slugField(),
    {
      name: 'images',
      type: 'array',
      label: 'Zdjęcia pomocnicze do wymiarów',
      fields: [
        {
          name: 'image',
          label: 'Zdjęcie',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'attachment',
      label: 'Katalog',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ]
}
