import { Block } from 'payload'

export const Image: Block = {
  slug: 'imageBlock',
  fields: [
    {
      name: 'image',
      label: 'Zdjęcie',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
