import { CmsTextBlock } from './cmsTextBlock.interface'

interface Feature {
  title: string
  text: CmsTextBlock
}

interface Image {
  media: {
    url: string
  }
}

interface Title {
  main: string
  highlight: string
}

export interface CmsTripleBoxesBlock {
  title: Title
  images: Image[]
  features: Feature[]
}
