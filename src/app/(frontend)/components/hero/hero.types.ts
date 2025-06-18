import { Media } from '@/payload-types'

export interface LinkValue {
  id: string
  slug: string
}

export interface LinkReference {
  value: LinkValue
}

export interface LinkData {
  type: 'custom' | 'refrence'
  reference: LinkReference
  url: string
  label: string
  icon: boolean
  newTab: boolean
  appearance: 'primary' | 'secondary' | 'default'
}

export interface LinkProps {
  id: string
  link: LinkData
}

export interface HeroProps {
  title: string
  media: Media
  type: 'mediumImpact' | 'highImpact'
  description?: string
  links?: LinkProps[]
}
