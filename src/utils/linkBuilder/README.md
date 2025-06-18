# Link Builder Utility

This utility provides type-safe URL generation for the application, eliminating magic strings and providing better maintainability.

## Benefits

- **Type Safety**: Compile-time checking for route parameters
- **No Magic Strings**: All URLs are generated from enums and constants
- **Centralized Routing**: Single source of truth for all application routes
- **IDE Support**: Full autocomplete and IntelliSense support
- **Maintainability**: Easy to update routes across the entire application

## Usage

### Basic Usage

```typescript
import { LinkBuilder } from '@/app/(frontend)/utils/linkBuilder'

// Build product links
const productUrl = LinkBuilder.offers.product('deszczownie-szpulowe', 'model-gx')
// Returns: '/oferta/deszczownie-szpulowe/model-gx'

// Build category links
const categoryUrl = LinkBuilder.offers.category('deszczownie-szpulowe')
// Returns: '/oferta/deszczownie-szpulowe'

// Build case study links
const caseStudyUrl = LinkBuilder.caseStudies.detail('example-case-study')
// Returns: '/nasze-realizacje/example-case-study'

// Build home link
const homeUrl = LinkBuilder.home()
// Returns: '/'
```

### Database Query Slugs

```typescript
import { LinkBuilder } from '@/app/(frontend)/utils/linkBuilder'

// Build query slugs for database queries
const querySlug = LinkBuilder.offers.querySlug(['deszczownie-szpulowe'])
// Returns: 'oferta/deszczownie-szpulowe'

const productQuerySlug = LinkBuilder.offers.querySlug(['deszczownie-szpulowe', 'model-gx'])
// Returns: 'oferta/deszczownie-szpulowe/model-gx'

// Use in database queries
const pageData = await payload.find({
  collection: Collection.Pages,
  where: { slug: { equals: LinkBuilder.offers.querySlug(slug) } },
})
```

### Advanced Usage

```typescript
import { buildLink, Route, buildOffersQuerySlug } from '@/app/(frontend)/utils/linkBuilder'

// Using the generic buildLink function
const productUrl = buildLink(Route.Offers, {
  category: 'deszczownie-szpulowe',
  product: 'model-gx'
})

const categoryUrl = buildLink(Route.Offers, {
  category: 'deszczownie-szpulowe'
})

const caseStudyUrl = buildLink(Route.CaseStudies, {
  slug: 'example-case-study'
})

// Using query slug builders directly
const querySlug = buildOffersQuerySlug(['deszczownie-szpulowe', 'model-gx'])
```

### In Components

```typescript
import { LinkBuilder } from '@/app/(frontend)/utils/linkBuilder'
import Link from 'next/link'

// In a React component
<Link href={LinkBuilder.offers.product(category.slug, product.slug)}>
  View Product
</Link>

// In a ButtonLink component
<ButtonLink href={LinkBuilder.offers.category(category.slug)}>
  View Category
</ButtonLink>
```

### In Database Queries

```typescript
import { LinkBuilder } from '@/app/(frontend)/utils/linkBuilder'

// Querying pages by slug
const pageData = await payload.find({
  collection: Collection.Pages,
  where: { slug: { equals: LinkBuilder.offers.querySlug(slugSegments) } },
})
```

## Migration Guide

### Before (Magic Strings)
```typescript
// ❌ Bad - Magic strings everywhere
href="/oferta/deszczownie-szpulowe/model-gx"
href={`/oferta/${category.slug}/${product.slug}`}

// ❌ Bad - Magic strings in database queries
where: { slug: { equals: 'oferta/' + slug } }
where: { slug: { equals: 'oferta/' + mergedSlug } }
```

### After (Type-Safe Links)
```typescript
// ✅ Good - Type-safe and maintainable
href={LinkBuilder.offers.product('deszczownie-szpulowe', 'model-gx')}
href={LinkBuilder.offers.product(category.slug, product.slug)}

// ✅ Good - Type-safe database queries
where: { slug: { equals: LinkBuilder.offers.querySlug(slug) } }
where: { slug: { equals: LinkBuilder.offers.querySlug(mergedSlug) } }
```

## Adding New Routes

To add a new route:

1. Add the route to the `Route` enum in `src/app/(frontend)/enums/route.enum.ts`
2. Add the routing path to the `Routing` enum in `src/app/(frontend)/enums/routing.enum.ts`
3. Update the `RouteParams` interface in the link builder
4. Add the route configuration to `ROUTE_CONFIGS`
5. Update the `buildLink` function switch statement
6. Add convenience methods to the `LinkBuilder` object

## Best Practices

1. **Always use LinkBuilder**: Never hardcode URLs in your components
2. **Use the fluent API**: Prefer `LinkBuilder.offers.product()` over `buildLink()`
3. **Type your parameters**: Ensure slug parameters are properly typed
4. **Handle null/undefined**: Add proper checks before using slug parameters
5. **Keep it centralized**: All routing logic should go through this utility
6. **Use query slugs for database queries**: Use `LinkBuilder.offers.querySlug()` for database queries instead of string concatenation 