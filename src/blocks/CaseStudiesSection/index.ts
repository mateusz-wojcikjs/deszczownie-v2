import linkGroup from '@/fields/linkGroup'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CaseStudiesSection: Block = {
  slug: 'caseStudiesSection',
  labels: {
    singular: 'Przypięta realizacja',
    plural: 'Przypięte realizacje',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Treść nagłówka sekcji',
      defaultValue: 'Nasze Realizacje',
    },
    {
      name: 'content',
      label: 'Opis',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      type: 'relationship',
      name: 'caseStudies',
      label: 'Wybrane realizacje',
      relationTo: 'case-studies',
      hasMany: true,
      required: true,
    },
    // {
    //   name: 'type',
    //   defaultValue: 'mediumImpact',
    //   label: 'Wariant',
    //   options: [
    //     {
    //       label: 'Wariant z tłem i odnośnikiem do kategorii',
    //       value: 'highImpact',
    //     },
    //     {
    //       label: 'Wariant kompaktowy',
    //       value: 'mediumImpact',
    //     },
    //   ],
    //   type: 'select',
    // },
    // linkGroup({
    //   overrides: {
    //     maxRows: 1,
    //     admin: {
    //       condition: (_, { type } = {}) => ['highImpact'].includes(type),
    //     },
    //   },
    // }),
  ],
}
