import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Realizacja',
    plural: 'Realizacje',
  },
  defaultPopulate: {
    slug: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tytuł realizacji',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Data realizacji',
      required: true,
    },
    {
      label: 'Główne zdjęcie',
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Treść',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      label: 'Zdjęcia',
      name: 'images',
      type: 'array',
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
    slugField(),
    {
      label: 'Powiązane produkty',
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
    },
  ],
}
