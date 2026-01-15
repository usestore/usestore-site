import { fetchApi } from './client'
import type { ApiResponse, ApiProduct, ApiVariant, ApiPrice } from './types'

export interface WishlistItem {
  item: {
    id: string
    wishlistId: string
    productId: string
    variantId: string | null
    note: string | null
    priority: number
    addedAt: Date
  }
  product: ApiProduct | null
  variant: ApiVariant | null
  price: ApiPrice | null
}

export interface Wishlist {
  id: string
  customerId: string
  name: string
  isDefault: boolean
}

export async function getWishlist(cookie?: string): Promise<ApiResponse<{ wishlist: Wishlist; items: WishlistItem[] }>> {
  return fetchApi('/api/wishlist/', undefined, cookie)
}

export async function addToWishlist(data: {
  productId: string
  variantId?: string
  note?: string
}): Promise<ApiResponse<{ id: string }>> {
  return fetchApi('/api/wishlist/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function removeFromWishlist(data: { itemId: string }): Promise<{ success: boolean }> {
  return fetchApi('/api/wishlist/', {
    method: 'DELETE',
    body: JSON.stringify(data),
  })
}
