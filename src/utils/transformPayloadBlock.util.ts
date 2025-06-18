import { PayloadBlock } from '@/app/(frontend)/interfaces'
import { CmsDynamicContentBlock } from '@/app/(frontend)/interfaces/cms/blocks'

export const transformPayloadBlock = (block: PayloadBlock): CmsDynamicContentBlock => {
  // Add default id if missing
  const blockWithId = {
    ...block,
    id: block.id || `block-${Math.random().toString(36).substr(2, 9)}`,
  }

  return blockWithId as CmsDynamicContentBlock
}
