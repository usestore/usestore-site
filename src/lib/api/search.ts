import { fetchApi } from './client'
import type { ApiResponse, ProductListItem } from './types'

export async function searchProducts(params: {
  q?: string
  page?: number
  perPage?: number
  sort?: 'relevance' | 'newest' | 'price-low' | 'price-high'
  category?: string
  minPrice?: number
  maxPrice?: number
}): Promise<ApiResponse<ProductListItem[]> & { query: string }> {
  const searchParams = new URLSearchParams()
  if (params.q) searchParams.set('q', params.q)
  if (params.page) searchParams.set('page', params.page.toString())
  if (params.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params.sort) searchParams.set('sort', params.sort)
  if (params.category) searchParams.set('category', params.category)
  if (params.minPrice !== undefined) searchParams.set('minPrice', params.minPrice.toString())
  if (params.maxPrice !== undefined) searchParams.set('maxPrice', params.maxPrice.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/search/${query ? `?${query}` : ''}`)
}
