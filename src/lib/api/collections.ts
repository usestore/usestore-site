import { fetchApi } from './client'
import type { ApiResponse, ApiCollection, ProductListItem } from './types'

export async function getCollections(params?: {
  page?: number
  perPage?: number
}): Promise<ApiResponse<ApiCollection[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/collections/${query ? `?${query}` : ''}`)
}

export async function getCollectionBySlug(slug: string): Promise<ApiResponse<ApiCollection>> {
  return fetchApi(`/api/collections/${slug}/`)
}

export async function getCollectionProducts(
  slug: string,
  params?: { page?: number; perPage?: number; featured?: boolean }
): Promise<ApiResponse<ProductListItem[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params?.featured !== undefined) searchParams.set('featured', params.featured.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/collections/${slug}/products/${query ? `?${query}` : ''}`)
}
