import {
  CmsHeroBlock,
  CmsTextBlock,
  CmsTextWithImageBlock,
  CmsImageBlock,
  CmsTripleBoxesBlock,
  CmsProductDataWithImagesBlock,
  CmsOfferSectionBlock,
  CmsTextBlockData,
} from './index'

export type CmsDynamicContentBlock =
  | (CmsHeroBlock & { blockType: 'hero' })
  | (CmsTextBlock & { blockType: 'textBlock' })
  | (CmsTextWithImageBlock & { blockType: 'textWithImage' })
  | (CmsImageBlock & { blockType: 'imageBlock' })
  | (CmsTripleBoxesBlock & { blockType: 'tripleBoxes' })
  | (CmsProductDataWithImagesBlock & { blockType: 'productDataWithImages' })
  | (CmsOfferSectionBlock & { blockType: 'offerSection' })
  | (CmsTextBlockData & { blockType: 'text' })
