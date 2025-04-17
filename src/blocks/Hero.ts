import { Block } from 'payload'
import linkGroup from '@/fields/linkGroup'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Sekcja hero',
    plural: 'Sekcje hero'
  },
  fields: [
    {
      name: 'type',
      defaultValue: 'mediumImpact',
      label: 'Type',
      options: [
        {
          label: 'Duże hero z nagłówkiem, tekstem, linkami i zdjęciem w tle',
          value: 'highImpact',
        },
        {
          label: 'Header z tłem, nagłówkiem i tekstem',
          value: 'mediumImpact',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'Tytuł',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Treść pod tytułem',
      name: 'description',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
    },
    {
      label: 'Tło',
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type } = {}) => ['highImpact'].includes(type),
        },
      }
    }),
  ]
};

