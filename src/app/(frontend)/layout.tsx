import React from 'react'
import './globals.css'
import { Footer } from '@/app/(frontend)/components/footer'
import { Cta } from '@/app/(frontend)/components'
import { Navigation } from '@/app/(frontend)/components/navigation'
import { Poppins } from 'next/font/google'
import { getGlobalSettings } from '@/utils/getGlobalSettings.util'
import { GlobalSetting } from '@/payload-types'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const globalSettings = await getGlobalSettings()

  // Extract the background image URL from the Media object
  const backgroundImage =
    typeof globalSettings?.cta?.background === 'object' && globalSettings?.cta?.background?.url
      ? globalSettings.cta.background.url
      : null

  console.log('Background image URL:', backgroundImage)

  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Navigation globalSettings={globalSettings} />
        <main>{children}</main>
        <Cta globalSettings={globalSettings} backgroundImage={backgroundImage} />
        <Footer globalSettings={globalSettings} />
      </body>
    </html>
  )
}
