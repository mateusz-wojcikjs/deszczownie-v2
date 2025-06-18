import { PhotoProviderWrapper } from '../../providers/PhotoProviderWrapper'
import { Route } from '../../enums/route.enum'
import { getRoutePath } from '../../constants/routing.const'
import { Params } from '../../interfaces'

export default async function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<Params>
}) {
  const resolvedParams = await params
  const pathname = getRoutePath(Route.Offers, resolvedParams.slug)

  return (
    <PhotoProviderWrapper shouldRender={pathname.split('/').length === 3}>
      {children}
    </PhotoProviderWrapper>
  )
}
