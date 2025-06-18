import { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Galeria',
    plural: 'Galerie',
  },
  fields: [
    {
      label: 'Tytuł',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Opis',
      name: 'description',
      type: 'textarea',
    },
    {
      label: 'Zdjęcia',
      name: 'images',
      type: 'json',
      admin: {
        components: {
          Field: '@/fields/components/Table#Table',
        },
      },
    },
  ],
}
