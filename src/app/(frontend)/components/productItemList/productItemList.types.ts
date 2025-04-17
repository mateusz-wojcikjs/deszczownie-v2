import { Media } from '@/payload-types'

export interface ProductItemListProps {
  url: string;
  name: string;
  thumbnail: Media | number;
  tableData?: {
      [k: string]: unknown;
    }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  className?: string
}
