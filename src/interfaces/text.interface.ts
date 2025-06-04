export interface TextCms {
  root: {
    children: Array<{
      children: Array<{
        detail: number
        format: number
        mode: string
        style: string
        text: string
        type: string
        version: number
      }>
      direction: string
      format: string
      indent: number
      type: string
      version: number
    }>
    direction: string
    format: string
    indent: number
    type: string
    version: number
  }
}
