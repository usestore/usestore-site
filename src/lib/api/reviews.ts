import { fetchApi } from './client'
import type { ApiResponse } from './types'

export interface Review {
  id: string
  productId: string
  customerId: string
  rating: number
  title: string | null
  content: string | null
  isVerifiedPurchase: boolean
  helpfulCount: number
  createdAt: Date
}

export interface ReviewWithCustomer {
  review: Review
  customer: { id: string; name: string; image: string | null }
  media: Array<{ id: string; type: string; url: string }>
}

export interface ReviewsResponse {
  data: ReviewWithCustomer[]
  pageCount: number
  total: number
  averageRating: number
  ratingDistribution: Record<number, number>
}

export async function getProductReviews(
  slug: string,
  params?: { page?: number; perPage?: number; rating?: number }
): Promise<ReviewsResponse> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params?.rating) searchParams.set('rating', params.rating.toString())

  const query = searchParams.toString()
  return fetchApi(`/api/reviews/product/${slug}/${query ? `?${query}` : ''}`)
}

export async function createReview(data: {
  productId: string
  rating: number
  title?: string
  content?: string
}): Promise<ApiResponse<Review>> {
  return fetchApi('/api/reviews/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
