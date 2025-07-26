import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const GlobalSettings: GlobalConfig = {
  slug: 'global-settings',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'CTA Title',
          defaultValue: 'Dlaczego deszczownie od KMK Agro?',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Kontakt',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/kontakt',
        },
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          options: [
            { label: 'Secondary', value: 'secondary' },
            { label: 'Primary', value: 'primary' },
            { label: 'Gray', value: 'gray' },
          ],
          defaultValue: 'secondary',
        },
        {
          name: 'background',
          label: 'Zdjęcie w tle',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'companyName',
          type: 'text',
          label: 'Company Name',
          defaultValue: 'KMK Agro Sp. J.',
        },
        {
          name: 'address',
          type: 'text',
          label: 'Address',
          defaultValue: 'ul. Poznańska 20, Brodowo 63-000 Środa Wlkp.',
        },
        {
          name: 'nip',
          type: 'text',
          label: 'NIP',
          defaultValue: '786-15-72-061',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '605 331 418',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          defaultValue: 'kontakt@kmkagro.com',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: 'Social Media',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
          defaultValue: 'https://www.facebook.com/KMKAgro2',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
          defaultValue: 'https://www.instagram.com/kmkagro',
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer Settings',
      fields: [
        {
          name: 'logoUrl',
          type: 'text',
          label: 'Logo URL',
          defaultValue: 'https://deszczownie.pl/wp-content/uploads/2024/04/logo.png',
        },
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright Text',
          defaultValue: 'COPYRIGHT © {year} KMK Agro Deszczownie. All Rights Reserved.',
        },
        {
          name: 'privacyPolicyUrl',
          type: 'text',
          label: 'Privacy Policy URL',
          defaultValue: '/polityka-prywatnosci',
        },
      ],
    },
    {
      name: 'navigation',
      type: 'group',
      label: 'Navigation Settings',
      fields: [
        {
          name: 'logoUrl',
          type: 'text',
          label: 'Navigation Logo URL',
          defaultValue: 'https://deszczownie.pl/wp-content/uploads/2024/04/logo.png',
        },
        {
          name: 'menuItems',
          type: 'array',
          label: 'Menu Items',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Menu Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Menu URL',
              required: true,
            },
            {
              name: 'isExternal',
              type: 'checkbox',
              label: 'External Link',
              defaultValue: false,
            },
            {
              name: 'submenu',
              type: 'array',
              label: 'Submenu Items',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Submenu Label',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Submenu URL',
                  required: true,
                },
                {
                  name: 'isExternal',
                  type: 'checkbox',
                  label: 'External Link',
                  defaultValue: false,
                },
              ],
            },
          ],
          defaultValue: [
            {
              label: 'Kim jesteśmy',
              url: '/kim-jestesmy',
              isExternal: false,
            },
            {
              label: 'Deszczownie szpulowe',
              url: '/oferta/deszczownie-szpulowe',
              isExternal: false,
            },
            {
              label: 'Deszczownie mostowe',
              url: '/oferta/deszczownie-mostowe',
              isExternal: false,
            },
            {
              label: 'Nasze realizacje',
              url: '/nasze-realizacje',
              isExternal: false,
            },
          ],
        },
        {
          name: 'contactButtonText',
          type: 'text',
          label: 'Contact Button Text',
          defaultValue: 'Kontakt',
        },
        {
          name: 'contactButtonUrl',
          type: 'text',
          label: 'Contact Button URL',
          defaultValue: '/kontakt',
        },
      ],
    },
  ],
}
