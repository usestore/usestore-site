import { fetchApi } from './client'
import type { ApiResponse, ApiProduct, ApiVariant, ApiPrice } from './types'

export interface CartItem {
  item: {
    id: string
    cartId: string
    variantId: string
    priceId: string
    quantity: number
  }
  variant: ApiVariant | null
  price: ApiPrice | null
  product: ApiProduct | null
}

export interface Cart {
  id: string
  customerId: string
  createdAt: Date
  updatedAt: Date
}

export async function getCart(cookie?: string): Promise<ApiResponse<{ cart: Cart; items: CartItem[] }>> {
  return fetchApi('/api/cart/', undefined, cookie)
}

export async function addToCart(data: {
  variantId: string
  priceId: string
  quantity?: number
}): Promise<ApiResponse<{ id: string; quantity: number }>> {
  return fetchApi('/api/cart/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function updateCartItem(data: {
  itemId: string
  quantity: number
}): Promise<ApiResponse<{ id: string; quantity: number }>> {
  return fetchApi('/api/cart/', {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export async function removeFromCart(data: { itemId: string }): Promise<{ success: boolean }> {
  return fetchApi('/api/cart/', {
    method: 'DELETE',
    body: JSON.stringify(data),
  })
}
