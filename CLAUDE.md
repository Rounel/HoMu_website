# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HoMu is a price comparison and intelligent search application that allows users to search by image/video, compare prices across multiple platforms, check local availability, and conduct market research. This is a Next.js 16 landing page implementation using React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server (must run build first)
pnpm start

# Linting
pnpm lint
```

## Tech Stack

- **Framework**: Next.js 16.0.5 (App Router)
- **React**: 19.2.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Linting**: ESLint 9 with eslint-config-next

## Architecture

### Next.js App Router Structure

This project uses the Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.tsx` - Root layout with font configuration and global styles
- `app/page.tsx` - Homepage/landing page
- `app/globals.css` - Global CSS with Tailwind imports and CSS variables

### Path Aliases

The project uses `@/*` path alias which maps to the project root:
```typescript
import { Component } from "@/components/Component"
```

### Styling System

- **Tailwind CSS v4** with PostCSS integration
- CSS variables defined in `globals.css` for theme colors
- Dark mode via `prefers-color-scheme` media query
- Custom theme tokens defined with `@theme inline` directive
- Font variables injected via Next.js font optimization:
  - `--font-geist-sans`
  - `--font-geist-mono`

### TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (not preserve)
- Module resolution: bundler
- Incremental builds enabled
- Next.js TypeScript plugin included

## Project Context

The SITEMAP.md file contains the complete landing page copywriting and structure for the HoMu product. This defines:

- Hero section messaging
- Feature descriptions
- User case segmentation (consumers, merchants, students, dropshippers)
- Pricing tiers (Standard/Free, Premium, Business)
- FAQ content
- SEO-optimized headings and content

When implementing UI components, refer to SITEMAP.md for correct messaging, value propositions, and content structure.

## Current State

The application is in early development:
- Basic Next.js scaffolding complete
- Root layout configured with fonts
- Empty homepage with basic styling shell
- No components or features implemented yet

## Development Notes

- **Package Manager**: Use `pnpm` (lockfile present)
- **Git**: Repository initialized with main branch
- **Deployment Target**: Vercel (standard Next.js deployment)
- When creating new pages/routes, add them in the `app/` directory following App Router conventions
- Server Components are the default; mark Client Components with `'use client'` directive
