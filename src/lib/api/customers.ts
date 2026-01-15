import { fetchApi } from './client'

export interface CustomerAddress {
  id: string
  customerId: string
  label?: string | null
  type: 'shipping' | 'billing' | 'both'
  recipientName?: string | null
  recipientPhone?: string | null
  address1: string
  address2?: string | null
  city: string
  state?: string | null
  postalCode: string
  country: string
  isDefaultShipping: boolean
  isDefaultBilling: boolean
  createdAt: string
  updatedAt: string
}
export interface CustomerData {
  addresses: CustomerAddress[]
}

export async function getCustomerData(cookie?: string): Promise<CustomerData> {
  return fetchApi<CustomerData>('/api/customers/', { method: 'GET' }, cookie)
}
