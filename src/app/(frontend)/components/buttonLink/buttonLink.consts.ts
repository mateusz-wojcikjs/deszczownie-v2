import { ButtonSize, ButtonTheme } from '@/app/(frontend)/enums'

export const variantClasses: Record<ButtonTheme, string> = {
  [ButtonTheme.Primary]: 'bg-primary-500 border-primary-500 hover:bg-secondary-500 text-white',
  [ButtonTheme.Secondary]: 'bg-secondary-500 border-secondary-500 hover:bg-primary-500 text-white',
  [ButtonTheme.Text]: 'bg-transparent border-transparent hover:bg-gray-100 text-gray-800',
};

export const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.Small]: 'text-sm py-2 px-4',
  [ButtonSize.Medium]: 'text-base py-3 px-6',
  [ButtonSize.Large]: 'text-xl py-4 px-8',
};
