import { CmsTextBlock } from '@/app/(frontend)/interfaces/cms/blocks'
import { DynamicContentVariant } from '@/app/(frontend)/enums'

export interface TextBlockProps {
  data: {
    text: CmsTextBlock
  }
  variant?: DynamicContentVariant
}
