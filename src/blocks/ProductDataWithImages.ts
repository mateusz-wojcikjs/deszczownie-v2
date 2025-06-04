import { Block } from 'payload'

export const ProductDataWithImagesBlock: Block = {
  slug: 'productDataWithImages',
  labels: {
    singular: 'Sekcja z danymi produktu i zdjęciami',
    plural: 'Sekcje z danymi produktu i zdjęciami',
  },
  fields: [
    {
      label: 'Tytuł',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Treść',
      name: 'content',
      type: 'richText',
    },
    {
      label: 'Zdjęcia',
      name: 'images',
      type: 'array',
      fields: [
        {
          label: 'Zdjęcie',
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
