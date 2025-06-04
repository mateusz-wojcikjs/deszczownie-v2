import { DynamicContentVariant } from '@/app/(frontend)/enums'

export const variantClasses = {
  [DynamicContentVariant.DEFAULT]: 'container mt-24',
  [DynamicContentVariant.OFFER]: 'container my-4 px-0',
} as const

export type TextWithImageVariant = keyof typeof variantClasses
