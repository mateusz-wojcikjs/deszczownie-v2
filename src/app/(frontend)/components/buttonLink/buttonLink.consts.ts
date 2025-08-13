import { ButtonSize, ButtonTheme } from '@/app/(frontend)/enums'

export const variantClasses: Record<ButtonTheme, string> = {
  [ButtonTheme.Text]:
    'text-emerald-300 bg-transparent border-transparent [--btn-hover-text-color:theme(colors.emerald.300)]',
  [ButtonTheme.Primary]:
    'text-white bg-gray-800 border-gray-800 hover:text-gray-800 before:bg-gray-300 [--btn-hover-text-color:theme(colors.gray.800)]',
  [ButtonTheme.PrimaryStill]:
    'text-white bg-gray-800 border-gray-800 [--btn-hover-text-color:theme(colors.white)]',
  [ButtonTheme.Secondary]:
    'text-white bg-emerald-600 border-emerald-600 hover:text-emerald-600 before:bg-gray-300 [--btn-hover-text-color:theme(colors.emerald.600)]',
  [ButtonTheme.SecondaryStill]:
    'text-white bg-emerald-600 border-emerald-600 [--btn-hover-text-color:theme(colors.white)]',
  [ButtonTheme.PrimaryOutlined]:
    'text-gray-800 bg-transparent border-gray-800 hover:text-gray-800 before:bg-gray-300 [--btn-hover-text-color:theme(colors.gray.800)]',
  [ButtonTheme.SecondaryOutlined]:
    'text-emerald-600 bg-transparent border-emerald-600 hover:text-gray-800 before:bg-gray-300 [--btn-hover-text-color:theme(colors.gray.800)]',
}

export const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.Small]: 'text-sm py-2 px-4',
  [ButtonSize.Medium]: 'text-base py-3 px-6',
  [ButtonSize.Large]: 'text-xl py-4 px-8',
}
