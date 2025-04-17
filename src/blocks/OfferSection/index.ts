import type { Block } from 'payload/types'

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
      type: 'relationship',
      name: 'categories',
      label: 'Wybrane kategorie',
      relationTo: 'categories',
      hasMany: true,
    },
  ],
}
