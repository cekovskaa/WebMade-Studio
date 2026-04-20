# WebMade Studio — Marketing site

A single-page marketing site for **WebMade Studio**, a web design and digital studio focused on high-converting websites, landing pages, and ongoing support for growing businesses. The page presents services, team, social proof, blog highlights, and a contact form—optimized for clarity on desktop, tablet, and mobile.

## What WebMade Studio is

WebMade Studio positions itself as a partner for **websites that convert**: custom design, performance and analytics, e-commerce, SEO, and stacks such as WordPress, Webflow, and React/Next.js. The copy emphasizes **small and mid-sized businesses** getting the same caliber of work as larger brands, with dedicated support after launch.

This repository implements that story as one scrolling landing page with anchored navigation (Home, Features, About, Team, Testimonials, Blog, Contact).

## Tech stack

| Layer              | Choice                                                                            |
| ------------------ | --------------------------------------------------------------------------------- |
| Framework          | **Next.js 16** (App Router)                                                       |
| UI                 | **React 19**                                                                      |
| Language           | **TypeScript**                                                                    |
| Styling            | **Sass** + **CSS Modules** (`.module.scss`)                                       |
| Layout / utilities | **Bootstrap 5** (grid, forms, carousel)                                           |
| Icons              | **Bootstrap Icons**, **Font Awesome**                                             |
| Motion             | **Framer Motion** (section entrances, mobile menu animation)                      |
| Bootstrap JS       | Loaded client-side via `BootstrapClient` for carousels and interactive components |

Global styles live in `src/styles/app/globals.scss` (Bootstrap imports, base typography). Section-specific styles sit next to their components under `src/styles/components/`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Bootstrap client
│   └── page.tsx            # Composes all sections (single route: /)
├── components/
│   ├── layout/             # SiteHeader, SiteFooter, BootstrapClient
│   ├── sections/           # Hero, Features, Highlights, About, Team, Testimonials, Blog, Contact
│   └── ui/                 # SectionHeading, FadeIn, etc.
├── data/
│   └── content.ts          # Nav items, features, team, testimonials, blog posts (single source of truth)
├── styles/
│   ├── app/                # globals.scss, page.module.scss
│   └── components/         # Mirrors components: layout/, sections/, ui/
└── types/                  # e.g. Bootstrap typings if needed
```

**Content edits:** Most marketing text and lists are defined in `src/data/content.ts`. Update arrays such as `navItems`, `features`, `team`, `testimonials`, and `blogPosts` to change what appears on the page without touching layout code.

**Assets:** Static files (images, SVGs) go in `public/` (e.g. `public/images/`).

## Getting started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** (ships with Node)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The App Router hot-reloads when you change files under `src/`.


