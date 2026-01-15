import { fetchApi } from './client'
import type { ApiResponse, ApiCategory, ProductListItem } from './types'

export async function getCategories(params?: {
  page?: number
  perPage?: number
}): Promise<ApiResponse<ApiCategory[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/categories/${query ? `?${query}` : ''}`)
}

export async function getCategoryBySlug(slug: string): Promise<ApiResponse<ApiCategory>> {
  return fetchApi(`/api/categories/${slug}/`)
}

export async function getCategoryProducts(
  slug: string,
  params?: { page?: number; perPage?: number; featured?: boolean }
): Promise<ApiResponse<ProductListItem[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params?.featured !== undefined) searchParams.set('featured', params.featured.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/categories/${slug}/products/${query ? `?${query}` : ''}`)
}
