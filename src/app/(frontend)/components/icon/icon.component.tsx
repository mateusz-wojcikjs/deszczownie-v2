import { Download, ArrowRight, Checkmark, Phone, Address, Email } from './icons'
import { IconName } from '@/app/(frontend)/enums'
import { IconProps } from './icon.types'
import { JSX } from 'react'

export const Icon: (props: IconProps) => JSX.Element | null = (
  props: IconProps,
): JSX.Element | null => {
  const { size = 20, color, iconName, className }: IconProps = props

  switch (iconName) {
    case IconName.ArrowRight:
      return <ArrowRight size={size} color={color} className={className} />
    case IconName.Checkmark:
      return <Checkmark size={size} color={color} className={className} />
    case IconName.Download:
      return <Download size={size} color={color} className={className} />
    case IconName.Phone:
      return <Phone size={size} color={color} className={className} />
    case IconName.Address:
      return <Address size={size} color={color} className={className} />
    case IconName.Email:
      return <Email size={size} color={color} className={className} />
    default:
      return null
  }
}
