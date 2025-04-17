import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const TextWithImage: Block = {
  slug: 'textWithImage',
  labels: {
    singular: 'Sekcja tekstu ze zdjęciem',
    plural: 'Sekcje tekstu ze zdjęciem'
  },
  fields: [
    {
      type: 'blocks',
      name: 'textAndImage',
      blocks: [
        {
          slug: 'text',
          labels: { singular: 'Treść tekstowa', plural: 'Treść' },
          fields: [
            {
              name: 'headline',
              label: 'Tytuł',
              type: 'text',
            },
            {
              name: 'additionalHeadline',
              label: 'Dodatkowy tytuł',
              type: 'text',
            },
            {
              name: 'text',
              label: 'Treść',
              type: 'richText',
              editor: lexicalEditor({}),
              required: true,
            },
          ]
        },
        {
          slug: 'image',
          labels: { singular: 'Zdjęcie', plural: 'Zdjęcia' },
          fields: [
            {
              label: 'Zdjęcie',
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ]
        },
      ],
      minRows: 2,
      maxRows: 2,
    },
  ],
};

