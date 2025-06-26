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
      type: 'text',
      name: 'description',
      label: 'Opis',
    },
    {
      type: 'relationship',
      name: 'caseStudies',
      label: 'Wybrane realizacje',
      relationTo: 'case-studies',
      hasMany: true,
      required: true,
    },
  ],
}
