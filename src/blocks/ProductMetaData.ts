import { Block } from 'payload'

export const ProductMetaData: Block = {
  slug: 'productMetaData',
  labels: {
    singular: 'Dane techniczne oferty',
    plural: 'Dane techniczne oferty'
  },
  fields: [
    {
      type: 'blocks',
      name: 'dataAndImages',
      blocks: [
        {
          slug: 'productParameters',
          labels: { singular: 'Parametry', plural: 'Parametry' },
          fields: [
            {
              name: "table",
              label: "Tabela",
              type: "json",
              admin: {
                components: {
                  Field: '@/fields/components/Table#Table',
                },
              },
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
      minRows: 1,
      maxRows: 2,
    },
  ],
};
