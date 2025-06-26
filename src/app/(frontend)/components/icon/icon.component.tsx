import {
  Download,
  ArrowRight,
  Checkmark,
  Phone,
  Address,
  Email,
  IrrigationFeature1,
  IrrigationFeature3,
  IrrigationFeature4,
  IrrigationFeature2,
} from './icons'
import { IconName } from '@/app/(frontend)/enums'
import { IconProps } from './icon.types'
import { JSX } from 'react'

export const Icon: (props: IconProps) => JSX.Element | null = (
  props: IconProps,
): JSX.Element | null => {
  const { size = 20, color = 'white', iconName, className }: IconProps = props

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
    case IconName.IrrigationFeature1:
      return <IrrigationFeature1 size={size} color={color} className={className} />
    case IconName.IrrigationFeature2:
      return <IrrigationFeature2 size={size} color={color} className={className} />
    case IconName.IrrigationFeature3:
      return <IrrigationFeature3 size={size} color={color} className={className} />
    case IconName.IrrigationFeature4:
      return <IrrigationFeature4 size={size} color={color} className={className} />
    default:
      return null
  }
}
