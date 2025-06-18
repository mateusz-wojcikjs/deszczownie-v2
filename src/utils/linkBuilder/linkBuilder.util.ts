import { Route } from '../../app/(frontend)/enums/route.enum'
import { Routing } from '../../app/(frontend)/enums/routing.enum'

// Define the structure for different route types
export interface RouteParams {
  [Route.Offers]: {
    category?: string
    product?: string
  }
  [Route.CaseStudies]: {
    slug?: string
  }
  [Route.Home]: Record<string, never>
  [Route.Contact]: Record<string, never>
}

// Base route configurations
const ROUTE_CONFIGS = {
  [Route.Offers]: {
    basePath: `/${Routing.Offers}`,
    patterns: {
      category: `/${Routing.Offers}/[category]`,
      product: `/${Routing.Offers}/[category]/[product]`,
      contact: `/${Routing.Contact}`,
    },
  },
  [Route.CaseStudies]: {
    basePath: `/${Routing.CaseStudies}`,
    patterns: {
      slug: `/${Routing.CaseStudies}/[slug]`,
    },
  },
  [Route.Home]: {
    basePath: '/',
    patterns: {},
  },
  [Route.Contact]: {
    basePath: `/${Routing.Contact}`,
    patterns: {},
  },
} as const

/**
 * Builds a URL for a specific route with optional parameters
 *
 * @param route - The route enum value
 * @param params - Optional parameters for the route
 * @returns The constructed URL string
 *
 * @example
 * ```typescript
 * // Build a product link
 * buildLink(Route.Offers, { category: 'deszczownie-szpulowe', product: 'model-gx' })
 * // Returns: '/oferta/deszczownie-szpulowe/model-gx'
 *
 * // Build a category link
 * buildLink(Route.Offers, { category: 'deszczownie-szpulowe' })
 * // Returns: '/oferta/deszczownie-szpulowe'
 *
 * // Build a case study link
 * buildLink(Route.CaseStudies, { slug: 'example-case-study' })
 * // Returns: '/nasze-realizacje/example-case-study'
 * ```
 */
export function buildLink<T extends Route>(route: T, params?: RouteParams[T]): string {
  const config = ROUTE_CONFIGS[route]

  switch (route) {
    case Route.Offers: {
      const offerParams = params as RouteParams[Route.Offers]
      if (offerParams?.category && offerParams?.product) {
        return `/${Routing.Offers}/${offerParams.category}/${offerParams.product}`
      }
      if (offerParams?.category) {
        return `/${Routing.Offers}/${offerParams.category}`
      }
      return config.basePath
    }

    case Route.CaseStudies: {
      const caseStudyParams = params as RouteParams[Route.CaseStudies]
      if (caseStudyParams?.slug) {
        return `/${Routing.CaseStudies}/${caseStudyParams.slug}`
      }
      return config.basePath
    }

    case Route.Home:
      return config.basePath

    case Route.Contact:
      return config.basePath

    default:
      return config.basePath
  }
}

/**
 * Builds a product link specifically for the offers section
 *
 * @param categorySlug - The category slug
 * @param productSlug - The product slug
 * @returns The constructed product URL
 *
 * @example
 * ```typescript
 * buildProductLink('deszczownie-szpulowe', 'model-gx')
 * // Returns: '/oferta/deszczownie-szpulowe/model-gx'
 * ```
 */
export function buildProductLink(categorySlug: string, productSlug: string): string {
  return buildLink(Route.Offers, {
    category: categorySlug,
    product: productSlug,
  })
}

/**
 * Builds a category link for the offers section
 *
 * @param categorySlug - The category slug
 * @returns The constructed category URL
 *
 * @example
 * ```typescript
 * buildCategoryLink('deszczownie-szpulowe')
 * // Returns: '/oferta/deszczownie-szpulowe'
 * ```
 */
export function buildCategoryLink(categorySlug: string): string {
  return buildLink(Route.Offers, {
    category: categorySlug,
  })
}

/**
 * Builds a case study link
 *
 * @param slug - The case study slug
 * @returns The constructed case study URL
 *
 * @example
 * ```typescript
 * buildCaseStudyLink('example-case-study')
 * // Returns: '/nasze-realizacje/example-case-study'
 * ```
 */
export function buildCaseStudyLink(slug: string): string {
  return buildLink(Route.CaseStudies, {
    slug,
  })
}

/**
 * Builds a query slug for database queries
 * This is used when querying the Pages collection to find pages by their slug
 *
 * @param route - The route to build the query slug for
 * @param segments - Additional slug segments to append
 * @returns The constructed query slug
 *
 * @example
 * ```typescript
 * buildQuerySlug(Route.Offers, ['deszczownie-szpulowe'])
 * // Returns: 'oferta/deszczownie-szpulowe'
 *
 * buildQuerySlug(Route.Offers, ['deszczownie-szpulowe', 'model-gx'])
 * // Returns: 'oferta/deszczownie-szpulowe/model-gx'
 * ```
 */
export function buildQuerySlug(route: Route, segments: string[] = []): string {
  const baseSlug = Routing[(route.charAt(0).toUpperCase() + route.slice(1)) as keyof typeof Routing]
  return segments.length > 0 ? `${baseSlug}/${segments.join('/')}` : baseSlug
}

/**
 * Builds a query slug specifically for offers pages
 *
 * @param segments - Slug segments to append to the offers base
 * @returns The constructed offers query slug
 *
 * @example
 * ```typescript
 * buildOffersQuerySlug(['deszczownie-szpulowe'])
 * // Returns: 'oferta/deszczownie-szpulowe'
 *
 * buildOffersQuerySlug(['deszczownie-szpulowe', 'model-gx'])
 * // Returns: 'oferta/deszczownie-szpulowe/model-gx'
 * ```
 */
export function buildOffersQuerySlug(segments: string[] = []): string {
  return buildQuerySlug(Route.Offers, segments)
}

/**
 * Type-safe link builder with autocomplete support
 *
 * This object provides a fluent API for building links with better IDE support
 *
 * @example
 * ```typescript
 * // Using the fluent API
 * LinkBuilder.offers.product('deszczownie-szpulowe', 'model-gx')
 * LinkBuilder.offers.category('deszczownie-szpulowe')
 * LinkBuilder.caseStudies.detail('example-case-study')
 * LinkBuilder.home()
 * ```
 */
export const LinkBuilder = {
  offers: {
    base: () => buildLink(Route.Offers),
    category: (slug: string) => buildCategoryLink(slug),
    product: (categorySlug: string, productSlug: string) =>
      buildProductLink(categorySlug, productSlug),
    querySlug: (segments: string[] = []) => buildOffersQuerySlug(segments),
  },
  caseStudies: {
    base: () => buildLink(Route.CaseStudies),
    detail: (slug: string) => buildCaseStudyLink(slug),
    querySlug: (segments: string[] = []) => buildQuerySlug(Route.CaseStudies, segments),
  },
  home: () => buildLink(Route.Home),
  contact: () => buildLink(Route.Contact),
} as const
