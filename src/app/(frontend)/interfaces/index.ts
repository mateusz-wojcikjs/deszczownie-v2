export * from './cms'
export * from './components'
export * from './pageProps.interface'
export * from './params.interface'
export * from './globalSettings.interface'

// Utility type for Payload CMS blocks
export type PayloadBlock = NonNullable<import('@/payload-types').Page['blocks']>[number]
