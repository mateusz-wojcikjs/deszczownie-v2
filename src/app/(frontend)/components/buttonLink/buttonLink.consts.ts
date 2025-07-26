import { ButtonSize, ButtonTheme } from '@/app/(frontend)/enums'

export const variantClasses: Record<ButtonTheme, string> = {
  // 1. Text variant: emerald text, transparent bg/border
  [ButtonTheme.Text]: 'text-emerald-300 bg-transparent border-transparent',

  // 2. Primary: solid emerald bg & border
  [ButtonTheme.Primary]: 'text-white bg-emerald-300 border-emerald-300',

  // 3. Secondary: solid slate bg & border
  [ButtonTheme.Secondary]: 'text-white bg-slate-300 border-slate-300',

  // 4. Outlined: emerald border/text, transparent bg
  [ButtonTheme.Outlined]: 'text-emerald-300 bg-transparent border-emerald-300',
}

export const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.Small]: 'text-sm py-2 px-4',
  [ButtonSize.Medium]: 'text-base py-3 px-6',
  [ButtonSize.Large]: 'text-xl py-4 px-8',
}
