import type { LinkAppearances } from './link'
import link from './link'
import { ArrayField, Field } from 'payload'
import { deepMergeSimple } from '@payloadcms/ui/utilities/deepMerge'
import deepMerge from '@/utils/deepMerge'

export type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>
  appearances?: LinkAppearances[] | false
}) => Field

const linkGroup: LinkGroupType = ({ overrides = {}, appearances } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      link({
        appearances,
      }),
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}

export default linkGroup
