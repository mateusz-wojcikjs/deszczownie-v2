import { Media } from '@/payload-types'

export interface CmsImageBlock {
  id?: string
  data: {
    image: Media
  }
  image: Media
}
