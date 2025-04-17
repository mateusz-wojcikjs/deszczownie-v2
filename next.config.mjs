import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/oferta", destination: "/offers" },
      { source: "/kontakt", destination: "/contact" },
      { source: "/o-nas", destination: "/about" },

      { source: "/oferta/:slug*", destination: "/offers/:slug*" },
    ];
  },
}

export default withPayload(nextConfig)
