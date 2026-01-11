export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  collection?: string;
  images: string[];
  sizes?: string[];
  colors?: { name: string; value: string }[];
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export interface Collection {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { name: "Tops", slug: "tops", description: "T-shirts, shirts, and more", productCount: 12 },
  { name: "Bottoms", slug: "bottoms", description: "Pants, shorts, and skirts", productCount: 8 },
  { name: "Outerwear", slug: "outerwear", description: "Jackets, coats, and hoodies", productCount: 6 },
  { name: "Accessories", slug: "accessories", description: "Bags, belts, and hats", productCount: 10 },
  { name: "Footwear", slug: "footwear", description: "Sneakers, boots, and sandals", productCount: 5 },
];

export const collections: Collection[] = [
  { name: "New Arrivals", slug: "new", description: "The latest additions to our store", productCount: 8 },
  { name: "Summer Essentials", slug: "summer", description: "Beat the heat in style", productCount: 12 },
  { name: "Everyday Basics", slug: "basics", description: "Wardrobe staples for every occasion", productCount: 15 },
  { name: "Sale", slug: "sale", description: "Great styles at reduced prices", productCount: 6 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    slug: "classic-white-tee",
    price: 29.00,
    description: "A timeless classic white t-shirt made from 100% organic cotton. Features a relaxed fit and crew neck design that pairs well with everything in your wardrobe.",
    category: "tops",
    collection: "basics",
    images: [],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#6B7280" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Denim Jacket",
    slug: "denim-jacket",
    price: 89.00,
    description: "Classic denim jacket with a modern slim fit. Features button closure, chest pockets, and adjustable button cuffs. Made from premium denim that softens with wear.",
    category: "outerwear",
    collection: "basics",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Indigo", value: "#3B5998" },
      { name: "Light Wash", value: "#87CEEB" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Canvas Sneakers",
    slug: "canvas-sneakers",
    price: 65.00,
    description: "Lightweight canvas sneakers perfect for everyday wear. Features a cushioned insole and durable rubber outsole for all-day comfort.",
    category: "footwear",
    collection: "basics",
    images: [],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Navy", value: "#1E3A5F" },
      { name: "Black", value: "#000000" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Leather Belt",
    slug: "leather-belt",
    price: 45.00,
    description: "Genuine leather belt with brushed metal buckle. A wardrobe essential that complements both casual and formal outfits.",
    category: "accessories",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", value: "#8B4513" },
      { name: "Black", value: "#000000" },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Cotton Hoodie",
    slug: "cotton-hoodie",
    price: 55.00,
    description: "Soft cotton blend hoodie with a relaxed fit. Features a kangaroo pocket and adjustable drawstring hood for cozy comfort.",
    category: "outerwear",
    collection: "basics",
    images: [],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Gray", value: "#6B7280" },
      { name: "Navy", value: "#1E3A5F" },
      { name: "Black", value: "#000000" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "Slim Chinos",
    slug: "slim-chinos",
    price: 75.00,
    description: "Modern slim-fit chinos made from stretch cotton for comfort and mobility. Perfect for the office or weekend outings.",
    category: "bottoms",
    collection: "basics",
    images: [],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Khaki", value: "#C3B091" },
      { name: "Navy", value: "#1E3A5F" },
      { name: "Olive", value: "#556B2F" },
    ],
    inStock: true,
  },
  {
    id: 7,
    name: "Wool Beanie",
    slug: "wool-beanie",
    price: 25.00,
    description: "Warm wool blend beanie for cold days. Features a classic ribbed knit design that fits comfortably.",
    category: "accessories",
    collection: "new",
    images: [],
    colors: [
      { name: "Charcoal", value: "#36454F" },
      { name: "Burgundy", value: "#800020" },
      { name: "Navy", value: "#1E3A5F" },
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Weekend Bag",
    slug: "weekend-bag",
    price: 120.00,
    description: "Spacious canvas and leather weekend bag. Features multiple compartments, detachable shoulder strap, and reinforced handles.",
    category: "accessories",
    collection: "new",
    images: [],
    colors: [
      { name: "Tan", value: "#D2B48C" },
      { name: "Navy", value: "#1E3A5F" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 9,
    name: "Linen Shirt",
    slug: "linen-shirt",
    price: 65.00,
    description: "Breathable linen shirt perfect for warm weather. Features a relaxed fit and button-down collar.",
    category: "tops",
    collection: "summer",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Sky Blue", value: "#87CEEB" },
      { name: "Beige", value: "#F5F5DC" },
    ],
    inStock: true,
  },
  {
    id: 10,
    name: "Swim Shorts",
    slug: "swim-shorts",
    price: 45.00,
    description: "Quick-dry swim shorts with mesh lining. Features an elastic waistband and side pockets.",
    category: "bottoms",
    collection: "summer",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Coral", value: "#FF7F50" },
      { name: "Green", value: "#228B22" },
    ],
    inStock: true,
  },
  {
    id: 11,
    name: "Sunglasses",
    slug: "sunglasses",
    price: 85.00,
    originalPrice: 120.00,
    description: "Classic aviator sunglasses with UV protection. Features polarized lenses and lightweight metal frame.",
    category: "accessories",
    collection: "sale",
    images: [],
    colors: [
      { name: "Gold", value: "#FFD700" },
      { name: "Silver", value: "#C0C0C0" },
    ],
    inStock: true,
  },
  {
    id: 12,
    name: "Graphic Tee",
    slug: "graphic-tee",
    price: 35.00,
    originalPrice: 45.00,
    description: "Cotton t-shirt with original graphic print. Features a classic fit and crew neck.",
    category: "tops",
    collection: "sale",
    images: [],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
    ],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

// Order types
export interface OrderItem {
  productId: number;
  productName: string;
  productSlug: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  trackingNumber?: string;
}

// Mock orders for demo
export const orders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-12-15",
    status: "delivered",
    items: [
      { productId: 1, productName: "Classic White Tee", productSlug: "classic-white-tee", price: 29.00, quantity: 2, size: "M", color: "White" },
      { productId: 4, productName: "Leather Belt", productSlug: "leather-belt", price: 45.00, quantity: 1, size: "M", color: "Brown" },
    ],
    subtotal: 103.00,
    shipping: 0,
    total: 103.00,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    trackingNumber: "1Z999AA10123456784",
  },
  {
    id: "ORD-2024-002",
    date: "2024-12-28",
    status: "shipped",
    items: [
      { productId: 2, productName: "Denim Jacket", productSlug: "denim-jacket", price: 89.00, quantity: 1, size: "L", color: "Indigo" },
    ],
    subtotal: 89.00,
    shipping: 5.00,
    total: 94.00,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    trackingNumber: "1Z999AA10123456785",
  },
  {
    id: "ORD-2025-001",
    date: "2025-01-08",
    status: "processing",
    items: [
      { productId: 5, productName: "Cotton Hoodie", productSlug: "cotton-hoodie", price: 55.00, quantity: 1, size: "M", color: "Gray" },
      { productId: 3, productName: "Canvas Sneakers", productSlug: "canvas-sneakers", price: 65.00, quantity: 1, size: "10", color: "White" },
    ],
    subtotal: 120.00,
    shipping: 0,
    total: 120.00,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
  },
];

export function getOrderById(id: string): Order | undefined {
  return orders.find((o) => o.id === id);
}

export function getOrdersByStatus(status: Order["status"]): Order[] {
  return orders.filter((o) => o.status === status);
}

// Review types
export interface Review {
  id: string;
  productId: number;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title?: string;
  comment: string;
  date: string;
  verified: boolean;
}

// Mock reviews for demo
export const reviews: Review[] = [
  {
    id: "rev-1",
    productId: 1,
    userId: "user-1",
    userName: "Sarah M.",
    rating: 5,
    title: "Perfect fit and quality",
    comment: "Love this t-shirt! The fit is exactly as described and the quality is excellent. The organic cotton feels soft and comfortable. Will definitely order more colors.",
    date: "2024-12-10",
    verified: true,
  },
  {
    id: "rev-2",
    productId: 1,
    userId: "user-2",
    userName: "Michael T.",
    rating: 4,
    title: "Great basic tee",
    comment: "Good quality t-shirt for the price. Runs true to size. The only reason I'm giving it 4 stars instead of 5 is that it shrunk slightly after the first wash, but still fits well.",
    date: "2024-11-28",
    verified: true,
  },
  {
    id: "rev-3",
    productId: 1,
    userId: "user-3",
    userName: "Emily R.",
    rating: 5,
    comment: "This is my go-to white tee. I've bought three of them already. The fabric is breathable and holds up well after multiple washes.",
    date: "2024-11-15",
    verified: true,
  },
  {
    id: "rev-4",
    productId: 2,
    userId: "user-4",
    userName: "James K.",
    rating: 5,
    title: "Excellent denim jacket",
    comment: "Really impressed with the quality of this jacket. The fit is perfect and it's already starting to break in nicely. Great value for money.",
    date: "2024-12-20",
    verified: true,
  },
  {
    id: "rev-5",
    productId: 2,
    userId: "user-5",
    userName: "Lisa P.",
    rating: 4,
    comment: "Nice jacket, good quality denim. The sizing is accurate. Only minor issue is the buttons are a bit stiff, but that should improve with wear.",
    date: "2024-12-05",
    verified: true,
  },
  {
    id: "rev-6",
    productId: 3,
    userId: "user-6",
    userName: "David L.",
    rating: 5,
    title: "Comfortable everyday sneakers",
    comment: "These are my new favorite sneakers. Very comfortable for all-day wear and they look great with everything. True to size.",
    date: "2024-12-18",
    verified: true,
  },
  {
    id: "rev-7",
    productId: 3,
    userId: "user-7",
    userName: "Jennifer K.",
    rating: 4,
    title: "Good value sneakers",
    comment: "Nice sneakers for the price. Comfortable and stylish. The canvas material is durable. Only downside is they're not very breathable in hot weather.",
    date: "2024-12-05",
    verified: true,
  },
  {
    id: "rev-8",
    productId: 3,
    userId: "user-8",
    userName: "Robert H.",
    rating: 5,
    comment: "Perfect casual sneakers. I wear them almost every day. Great quality and they've held up really well over the past few months.",
    date: "2024-11-20",
    verified: true,
  },
  {
    id: "rev-9",
    productId: 4,
    userId: "user-9",
    userName: "Amanda S.",
    rating: 5,
    title: "Beautiful leather belt",
    comment: "Excellent quality leather belt. The buckle is sturdy and the leather is genuine. It's become my everyday belt. Highly recommend!",
    date: "2024-12-15",
    verified: true,
  },
  {
    id: "rev-10",
    productId: 4,
    userId: "user-10",
    userName: "Chris W.",
    rating: 4,
    comment: "Good belt, well made. The sizing is accurate. The leather is still breaking in but it's getting more comfortable with wear.",
    date: "2024-11-30",
    verified: true,
  },
  {
    id: "rev-11",
    productId: 5,
    userId: "user-11",
    userName: "Nicole B.",
    rating: 5,
    title: "Cozy and comfortable",
    comment: "This hoodie is so soft and comfortable! Perfect for lounging around or running errands. The fit is relaxed but not too baggy. Love it!",
    date: "2024-12-22",
    verified: true,
  },
  {
    id: "rev-12",
    productId: 5,
    userId: "user-12",
    userName: "Mark D.",
    rating: 5,
    title: "Best hoodie I've owned",
    comment: "Seriously the best hoodie. The fabric is soft, the fit is perfect, and it's held up great after multiple washes. Worth every penny.",
    date: "2024-12-08",
    verified: true,
  },
  {
    id: "rev-13",
    productId: 5,
    userId: "user-13",
    userName: "Laura F.",
    rating: 4,
    comment: "Really nice hoodie. The quality is good and it's very comfortable. Only minor complaint is the hood is a bit small, but overall great purchase.",
    date: "2024-11-25",
    verified: true,
  },
  {
    id: "rev-14",
    productId: 6,
    userId: "user-14",
    userName: "Tom G.",
    rating: 5,
    title: "Perfect office pants",
    comment: "These chinos are perfect for work. They look professional but are comfortable enough for all-day wear. The stretch fabric is great. True to size.",
    date: "2024-12-19",
    verified: true,
  },
  {
    id: "rev-15",
    productId: 6,
    userId: "user-15",
    userName: "Rachel M.",
    rating: 4,
    comment: "Nice chinos, good quality. The slim fit is flattering. They do wrinkle a bit throughout the day but that's expected with cotton. Overall happy with the purchase.",
    date: "2024-12-03",
    verified: true,
  },
  {
    id: "rev-16",
    productId: 7,
    userId: "user-16",
    userName: "Kevin P.",
    rating: 5,
    title: "Warm and well-made",
    comment: "Great beanie! It's warm without being too hot, and the wool blend is soft. Perfect for winter. The fit is comfortable and it stays in place.",
    date: "2024-12-12",
    verified: true,
  },
  {
    id: "rev-17",
    productId: 7,
    userId: "user-17",
    userName: "Sophie L.",
    rating: 4,
    comment: "Cute beanie, good quality. The color is exactly as shown. It's warm and fits well. Only reason for 4 stars is I wish it came in more colors.",
    date: "2024-11-18",
    verified: true,
  },
  {
    id: "rev-18",
    productId: 8,
    userId: "user-18",
    userName: "Alex R.",
    rating: 5,
    title: "Excellent weekend bag",
    comment: "This bag is perfect for weekend trips. It's spacious, well-organized with multiple compartments, and the quality is outstanding. The leather accents are a nice touch.",
    date: "2024-12-20",
    verified: true,
  },
  {
    id: "rev-19",
    productId: 8,
    userId: "user-19",
    userName: "Maya T.",
    rating: 5,
    comment: "Love this bag! It's become my go-to for travel. The canvas is durable, the leather handles are comfortable, and it fits everything I need. Highly recommend!",
    date: "2024-12-07",
    verified: true,
  },
  {
    id: "rev-20",
    productId: 9,
    userId: "user-20",
    userName: "Daniel K.",
    rating: 5,
    title: "Perfect summer shirt",
    comment: "This linen shirt is perfect for hot weather. It's breathable, comfortable, and looks great. The relaxed fit is exactly what I wanted. Great quality too.",
    date: "2024-12-14",
    verified: true,
  },
  {
    id: "rev-21",
    productId: 9,
    userId: "user-21",
    userName: "Emma C.",
    rating: 4,
    comment: "Nice linen shirt. It's comfortable and breathable. The only downside is it wrinkles easily, but that's typical for linen. Overall a good purchase.",
    date: "2024-11-29",
    verified: true,
  },
  {
    id: "rev-22",
    productId: 10,
    userId: "user-22",
    userName: "Ryan J.",
    rating: 5,
    title: "Great swim shorts",
    comment: "Perfect swim shorts! They dry quickly, fit well, and the mesh lining is comfortable. The elastic waistband is secure. Great for beach or pool.",
    date: "2024-12-16",
    verified: true,
  },
  {
    id: "rev-23",
    productId: 10,
    userId: "user-23",
    userName: "Olivia N.",
    rating: 4,
    comment: "Good swim shorts. They're comfortable and the quick-dry material works well. The sizing runs a bit small, so I'd recommend sizing up.",
    date: "2024-12-01",
    verified: true,
  },
  {
    id: "rev-24",
    productId: 11,
    userId: "user-24",
    userName: "Jake M.",
    rating: 5,
    title: "Excellent sunglasses",
    comment: "These sunglasses are fantastic! The polarized lenses are great for driving and the frame is lightweight and comfortable. Great value, especially on sale.",
    date: "2024-12-21",
    verified: true,
  },
  {
    id: "rev-25",
    productId: 11,
    userId: "user-25",
    userName: "Isabella R.",
    rating: 5,
    comment: "Love these sunglasses! The UV protection is excellent and they look stylish. The frame is durable and they come with a nice case. Highly recommend!",
    date: "2024-12-09",
    verified: true,
  },
  {
    id: "rev-26",
    productId: 11,
    userId: "user-26",
    userName: "Nathan B.",
    rating: 4,
    comment: "Good sunglasses for the price. The lenses are clear and the frame is solid. Only minor issue is they can slip down my nose a bit, but overall satisfied.",
    date: "2024-11-22",
    verified: true,
  },
  {
    id: "rev-27",
    productId: 12,
    userId: "user-27",
    userName: "Grace H.",
    rating: 5,
    title: "Love the graphic design",
    comment: "This graphic tee is awesome! The print quality is excellent and hasn't faded after multiple washes. The fit is perfect and the cotton is soft. Great purchase!",
    date: "2024-12-17",
    verified: true,
  },
  {
    id: "rev-28",
    productId: 12,
    userId: "user-28",
    userName: "Ben S.",
    rating: 4,
    comment: "Nice t-shirt with a cool graphic. The quality is good and it's comfortable. The sale price made it a great deal. Would buy again.",
    date: "2024-12-04",
    verified: true,
  },
  {
    id: "rev-29",
    productId: 1,
    userId: "user-29",
    userName: "Jessica W.",
    rating: 5,
    comment: "I've bought this in multiple colors now. It's the perfect basic tee - comfortable, well-made, and versatile. Can't go wrong with this one!",
    date: "2024-12-11",
    verified: true,
  },
  {
    id: "rev-30",
    productId: 2,
    userId: "user-30",
    userName: "Carlos M.",
    rating: 5,
    title: "Classic style, great quality",
    comment: "This denim jacket is exactly what I was looking for. The fit is perfect, the denim quality is excellent, and it's already starting to break in nicely. Very satisfied!",
    date: "2024-12-13",
    verified: true,
  },
];

export function getReviewsByProductId(productId: number): Review[] {
  return reviews.filter((r) => r.productId === productId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAverageRating(productId: number): number {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / productReviews.length) * 10) / 10;
}
