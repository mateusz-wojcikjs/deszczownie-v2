import { DynamicContentVariant } from '@/app/(frontend)/enums'

export const variantClasses = {
  [DynamicContentVariant.Default]: 'container mt-24',
  [DynamicContentVariant.Offer]: 'container my-4 px-0',
} as const

export type TextWithImageVariant = keyof typeof variantClasses
