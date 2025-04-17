import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'textBlock',
  fields: [
    {
      name: 'text',
      label: 'Treść',
      type: 'richText',
      editor: lexicalEditor({})
    },
  ],
}
