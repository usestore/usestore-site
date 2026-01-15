export interface ApiResponse<T> {
  data: T
  pageCount?: number
  total?: number
}

export interface ApiProduct {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  status: string
  visibility: string
  isFeatured: boolean
  categoryId: string | null
  sortOrder: number
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export interface ApiCategory {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  parentId: string | null
  sortOrder: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ApiCollection {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  isActive: boolean
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface ApiVariant {
  id: string
  productId: string
  sku: string | null
  barcode: string | null
  title: string | null
  position: number
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export interface ApiPrice {
  id: string
  variantId: string
  price: number
  compareAtPrice: number | null
  currency: string
  isActive: boolean
  createdAt: Date
}

export interface ApiMedia {
  id: string
  variantId: string
  type: string
  url: string
  alt: string | null
  position: number
  isPrimary: boolean
}

export interface ProductListItem {
  product: ApiProduct
  category: ApiCategory | null
  variant: ApiVariant | null
  price: ApiPrice | null
}
