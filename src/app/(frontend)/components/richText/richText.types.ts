export interface TextNode {
  type: 'text'
  text: string
  format?: number
  style?: string
  mode?: string
  detail?: number
}

export interface LineBreakNode {
  type: 'linebreak'
}

export interface LinkNode {
  type: 'link'
  fields: {
    url: string
    newTab: boolean
  }
  children: TextNode[]
}

export interface ListItemNode {
  type: 'listitem'
  value: number
  format?: string
  indent?: number
  children: TextNode[]
  direction?: string
}

export interface ListNode {
  type: 'list'
  tag: 'ul' | 'ol'
  start?: number
  format?: string
  indent?: number
  children: ListItemNode[]
  listType?: 'bullet' | 'number'
  direction?: string
}

export interface UploadNode {
  type: 'upload'
  id: string
  value: {
    id: number
    alt: string
    url: string
    width: number
    height: number
    filename: string
    mimeType: string
    filesize: number
    focalX?: number
    focalY?: number
  }
  relationTo: 'media'
}

export type RichTextChild =
  | TextNode
  | LinkNode
  | ListItemNode
  | ListNode
  | LineBreakNode
  | UploadNode

export interface RichTextNode {
  type: string
  format?: string | number
  children?: RichTextChild[]
}

export interface RichTextRendererProps {
  content: RichTextNode[]
  prose?: boolean
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
