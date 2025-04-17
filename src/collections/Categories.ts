import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategoria',
    plural: 'Kategorie',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nazwa Kategorii',
      required: true,
    },
    slugField( 'title', { required: true }),
    {
      name: 'parentCategory',
      type: 'relationship',
      label: 'Kategoria nadrzędna',
      relationTo: 'categories'
    },
    {
      name: 'categoryImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ]
}
