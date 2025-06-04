import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const TripleBoxes: Block = {
  slug: 'tripleBoxes',
  labels: { singular: 'Potrójne boxy', plural: 'Potrójne boxy' },
  fields: [
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'main',
          type: 'text',
          required: true,
        },
        {
          name: 'highlight',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      minRows: 2,
      maxRows: 2,
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
    {
      name: 'features',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          label: 'Treść',
          type: 'richText',
          editor: lexicalEditor({}),
          required: true,
        },
      ],
    },
  ],
}
