import { PhotoProviderWrapper } from './PhotoProviderWrapper'

export default async function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string[] }>
}) {
  const resolvedParams = await params
  const pathname = resolvedParams.slug ? `/offers/${resolvedParams.slug.join('/')}` : '/offers'

  return <PhotoProviderWrapper pathname={pathname}>{children}</PhotoProviderWrapper>
}
