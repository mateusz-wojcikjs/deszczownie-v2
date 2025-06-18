import React from 'react'
import './globals.css'
import { Footer } from '@/app/(frontend)/components/footer'
import { Cta } from '@/app/(frontend)/components'
import { Navigation } from '@/app/(frontend)/components/navigation'
import { Poppins } from 'next/font/google'

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

  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Navigation />
        <main>{children}</main>
        <Cta />
        <Footer />
      </body>
    </html>
  )
}
