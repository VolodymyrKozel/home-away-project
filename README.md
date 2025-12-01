# Home Away Project — Minimal Airbnb Clone

A clean, modern, and fully functional short-term rental booking app built with Next.js 14+ App Router.

## Overview

Home Away is a minimal yet complete Airbnb-like marketplace where authenticated users can:

- Create personal profiles
- List properties for short-term rental
- Browse and favorite properties
- Write reviews with ratings
- Book stays with check-in / check-out dates and automatic price calculation

All form submissions and data mutations are handled securely using **Next.js Server Actions**.  
Images are uploaded to **Supabase Storage**, and all data is persisted in **PostgreSQL** via **Prisma**.

## Core Features

- User authentication with Clerk (email + social logins)
- Profile creation editing (profile image upload to Supabase)
- Full CRUD for properties (only the owner can edit/delete)
- Multi-image upload per property stored in Supabase Storage
- Favorite / unfavorite properties (wishlist)
- Reviews system (1–5 stars + text comment)
- Booking system with date range picker and total price calculation
- Responsive mobile-first UI
- Optimized images served from Supabase using next/image
- All forms powered by Server Actions (no separate API routes)

## Technologies Used

- **Next.js 14+** (App Router Server Actions)
- **TypeScript**
- **Prisma** (prisma-client-js)
- **PostgreSQL** (Neon)
- **Clerk** – Authentication user management
- **Supabase Storage** – Image uploads hosting
- **Tailwind CSS** – Styling
- **SHADCN/UI** – Accessible components (Select, Dialog, ScrollArea, etc.)
- **next/image** – Optimized image delivery
- **Zod** – Form validation (inferred from Prisma schema)
