import { fetchApi } from './client'
import type { ApiResponse, ApiProduct, ApiCategory, ApiVariant, ApiPrice, ApiMedia, ProductListItem } from './types'

export interface ProductDetail {
  product: ApiProduct
  category: ApiCategory | null
  shipping: {
    weight: number | null
    weightUnit: string
    requiresShipping: boolean
  } | null
  variants: Array<{
    variant: ApiVariant
    price: ApiPrice | null
    media: ApiMedia | null
  }>
  options: Array<{
    option: { id: string; name: string; position: number }
    value: { id: string; value: string; position: number } | null
  }>
  variantOptionValues: Array<{
    variant: ApiVariant
    optionValue: { id: string; value: string }
    option: { id: string; name: string }
  }>
  collections: Array<{
    collection: { id: string; name: string; slug: string }
  }>
  tags: Array<{
    tag: { id: string; name: string; slug: string }
  }>
}

export async function getProducts(params?: {
  page?: number
  perPage?: number
  featured?: boolean
}): Promise<ApiResponse<ProductListItem[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params?.featured !== undefined) searchParams.set('featured', params.featured.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/products/${query ? `?${query}` : ''}`)
}

export async function getProductBySlug(slug: string): Promise<ApiResponse<ProductDetail>> {
  return fetchApi(`/api/products/${slug}/`)
}
