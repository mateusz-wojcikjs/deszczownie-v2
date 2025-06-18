import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/oferta', destination: '/offers' },
      { source: '/nasze-realizacje', destination: '/case-studies' },
      { source: '/kontakt', destination: '/contact' },
      { source: '/o-nas', destination: '/about' },
      { source: '/oferta/:slug*', destination: '/offers/:slug*' },
      { source: '/nasze-realizacje/:slug*', destination: '/case-studies/:slug*' },
    ]
  },
}

export default withPayload(nextConfig)
