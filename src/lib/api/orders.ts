import { fetchApi } from './client'
import type { ApiResponse } from './types'

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  status: string
  paymentStatus: string
  fulfillmentStatus: string
  subtotal: number
  shippingTotal: number
  taxTotal: number
  grandTotal: number
  currency: string
  customerNote: string | null
  createdAt: Date
  updatedAt: Date
}

export interface OrderAddress {
  firstName: string
  lastName: string
  phone: string | null
  address1: string
  address2: string | null
  city: string
  state: string | null
  postalCode: string
  country: string
}

export interface OrderItem {
  id: string
  productName: string
  variantTitle: string | null
  sku: string | null
  quantity: number
  unitPrice: number
  totalPrice: number
  currency: string
}

export interface OrderDetail {
  order: Order
  shippingAddress: OrderAddress | null
  billingAddress: OrderAddress | null
  items: OrderItem[]
  shipments: Array<{
    shipment: {
      carrier: string | null
      trackingNumber: string | null
      status: string
      shippedAt: Date | null
      deliveredAt: Date | null
    }
  }>
  notes: Array<{ content: string; createdAt: Date }>
}

export async function getOrders(
  params?: {
    page?: number
    perPage?: number
    status?: string
  },
  cookie?: string
): Promise<ApiResponse<Order[]>> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  if (params?.status) searchParams.set('status', params.status)

  const query = searchParams.toString()
  return fetchApi(`/api/orders/${query ? `?${query}` : ''}`, undefined, cookie)
}

export async function getOrderById(orderId: string, cookie?: string): Promise<ApiResponse<OrderDetail>> {
  return fetchApi(`/api/orders/${orderId}/`, undefined, cookie)
}

export async function createCheckout(data: {
  shippingAddress: {
    firstName: string
    lastName: string
    phone?: string
    address1: string
    address2?: string
    city: string
    state?: string
    postalCode: string
    country: string
  }
  billingAddress?: OrderAddress
  useDifferentBillingAddress?: boolean
  customerNote?: string
}): Promise<ApiResponse<Order>> {
  return fetchApi('/api/checkout/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
