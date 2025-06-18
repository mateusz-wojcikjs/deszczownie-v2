import { Route } from '../enums/route.enum'
import { Routing } from '../enums/routing.enum'

export const ROUTE_PATHS = {
  [Route.Offers]: {
    path: '/offers',
    routingPath: `/${Routing.Offers}`,
  },
  [Route.CaseStudies]: {
    path: '/case-studies',
    routingPath: `/${Routing.CaseStudies}`,
  },
  [Route.Home]: {
    path: '/',
    routingPath: '/',
  },
  [Route.Contact]: {
    path: '/contact',
    routingPath: `/${Routing.Contact}`,
  },
} as const

export const getRoutePath = (route: Route, slug?: string[]): string => {
  const basePath = ROUTE_PATHS[route].path
  return slug ? `${basePath}/${slug.join('/')}` : basePath
}

export const getRoutingPath = (route: Route, slug?: string[]): string => {
  const basePath = ROUTE_PATHS[route].routingPath
  return slug ? `${basePath}/${slug.join('/')}` : basePath
}
