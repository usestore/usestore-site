# UseStore - E-commerce Website

A modern, full-featured e-commerce website built with Astro, React, and Tailwind CSS. Deployed on Cloudflare Workers.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.8
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.1.18
- **Authentication**: Better Auth
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Cloudflare Workers
- **Language**: TypeScript

## 📁 Project Structure

```
/
├── public/                    # Static assets
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── components/            # React & Astro components
│   │   ├── account/          # Account management components
│   │   │   └── account-settings.tsx
│   │   ├── auth/             # Authentication components
│   │   │   ├── sign-in-form.tsx
│   │   │   ├── sign-up-form.tsx
│   │   │   ├── forgot-password-form.tsx
│   │   │   ├── reset-password-form.tsx
│   │   │   └── oauth-providers.tsx
│   │   ├── landing/          # Landing page components
│   │   │   ├── hero.astro
│   │   │   ├── featured-products.astro
│   │   │   ├── best-sellers.astro
│   │   │   ├── categories.astro
│   │   │   ├── collections.astro
│   │   │   ├── collection-banner.astro
│   │   │   ├── features-strip.astro
│   │   │   ├── promo-banner.astro
│   │   │   └── story-section.astro
│   │   ├── header.tsx        # Site header/navigation
│   │   └── footer.astro      # Site footer
│   ├── data/
│   │   └── store.ts          # Product catalog, orders, reviews data
│   ├── hooks/
│   │   └── use-mobile.ts     # Mobile detection hook
│   ├── lib/
│   │   ├── auth-client.ts   # Better Auth client configuration
│   │   └── utils.ts         # Utility functions
│   ├── layouts/
│   │   ├── Layout.astro      # Main site layout
│   │   └── AuthLayout.astro  # Authentication pages layout
│   ├── pages/                # Astro pages (file-based routing)
│   │   ├── index.astro       # Homepage
│   │   ├── auth/             # Authentication pages
│   │   │   ├── sign-in.astro
│   │   │   ├── sign-up.astro
│   │   │   ├── forgot-password.astro
│   │   │   └── reset-password.astro
│   │   ├── account/          # User account pages
│   │   │   └── index.astro
│   │   ├── products/         # Product pages
│   │   │   ├── index.astro   # Product listing
│   │   │   └── [slug].astro  # Product detail
│   │   ├── categories/       # Category pages
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── collections/      # Collection pages
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── cart.astro        # Shopping cart
│   │   ├── checkout/         # Checkout flow
│   │   │   ├── index.astro
│   │   │   └── success.astro
│   │   ├── orders/           # Order management
│   │   │   ├── index.astro   # Order history
│   │   │   └── [id].astro    # Order details
│   │   ├── wishlist.astro    # Wishlist page
│   │   ├── recently-viewed.astro
│   │   ├── search.astro      # Product search
│   │   ├── track-order.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── careers.astro
│   │   ├── shipping.astro
│   │   ├── returns.astro
│   │   ├── size-guide.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── cookies.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css        # Global styles
│   ├── middleware.ts         # Astro middleware (auth handling)
│   └── env.d.ts              # TypeScript environment definitions
├── astro.config.mjs          # Astro configuration
├── wrangler.jsonc            # Cloudflare Workers configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## ✨ Features

### E-commerce
- **Product Catalog**: Browse products by category or collection
- **Product Details**: Detailed product pages with images, sizes, colors, and reviews
- **Shopping Cart**: Add/remove items, manage quantities
- **Checkout Flow**: Complete checkout process with order confirmation
- **Order Management**: View order history and track orders
- **Wishlist**: Save favorite products
- **Recently Viewed**: Track recently viewed products
- **Search**: Search products across the catalog

### User Authentication
- Sign up / Sign in
- Password reset (forgot password flow)
- OAuth providers support
- Protected routes with middleware
- User account settings

### Additional Pages
- About, Contact, FAQ
- Careers, Shipping, Returns
- Privacy Policy, Terms of Service, Cookie Policy
- Size Guide

## 🛠️ Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🔧 Configuration

### Environment Variables

Set the following environment variable for authentication:

```env
PUBLIC_SERVER_URL=your-auth-server-url
```

### Cloudflare Deployment

The project is configured for Cloudflare Workers deployment. The `wrangler.jsonc` file contains the deployment configuration.

## 📦 Data Structure

The project uses a mock data structure defined in `src/data/store.ts`:

- **Products**: Product catalog with categories, collections, sizes, colors
- **Categories**: Product categories (Tops, Bottoms, Outerwear, Accessories, Footwear)
- **Collections**: Curated collections (New Arrivals, Summer Essentials, Everyday Basics, Sale)
- **Orders**: Order history and tracking
- **Reviews**: Product reviews and ratings

## 🎨 Styling

- Tailwind CSS 4.1.18 for utility-first styling
- Custom animations via `tw-animate-css`
- Responsive design with mobile-first approach

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Better Auth Documentation](https://www.better-auth.com)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
