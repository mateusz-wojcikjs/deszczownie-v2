import linkGroup from '@/fields/linkGroup'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const OfferSection: Block = {
  slug: 'offerSection',
  labels: {
    singular: 'Przypięta kategoria',
    plural: 'Przypięte kategorie',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Treść nagłówka sekcji',
      defaultValue: 'Nasza Oferta',
    },
    {
      name: 'description',
      label: 'Opis',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      type: 'relationship',
      name: 'categories',
      label: 'Wybrane kategorie',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'type',
      defaultValue: 'mediumImpact',
      label: 'Wariant',
      options: [
        {
          label: 'Wariant z tłem i odnośnikiem do kategorii',
          value: 'highImpact',
        },
        {
          label: 'Wariant kompaktowy',
          value: 'mediumImpact',
        },
      ],
      type: 'select',
    },
    linkGroup({
      overrides: {
        maxRows: 1,
        admin: {
          condition: (_, { type } = {}) => ['highImpact'].includes(type),
        },
      },
    }),
  ],
}
