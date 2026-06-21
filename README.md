# Pet Site — Next.js Starter

A starter project built from your wireframe, with 4 pages and 4 reusable layout
components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route             | File                              | Description                                   |
| ------------------ | ---------------------------------- | ---------------------------------------------- |
| `/`                 | `src/app/page.tsx`                 | Home page — Nav, Hero, Body, Footer            |
| `/pets`             | `src/app/pets/page.tsx`            | Grid of `PetCard` components                   |
| `/pets/[slug]`      | `src/app/pets/[slug]/page.tsx`     | Pet sub page (e.g. `/pets/bella`)              |
| `/contact`          | `src/app/contact/page.tsx`         | Contact page with info + form                  |

The pet listing page isn't one of the four you listed, but I added it so the
`PetCard` ("pet obj component") has somewhere to live and link out from —
otherwise it would be an orphaned component. Feel free to delete `/pets` and
link to `/pets/bella` etc. directly if you don't need a listing page.

## Shared layout components (`src/components`)

- **`Nav.tsx`** — top navigation bar (Brand + links)
- **`Footer.tsx`** — dark footer with copyright + social links
- **`Hero.tsx`** — reusable banner/CTA section, takes `title`, `subtitle`,
  `ctaLabel`, `ctaHref` props
- **`Body.tsx`** — reusable two-column image/text section (image placeholder
  on one side, heading + paragraphs on the other; pass `reverse` to flip
  sides, or `imageSrc` once you have real photos)
- **`PetCard.tsx`** — the "pet obj component": image, name, age, links to the
  pet's sub page
- **`ContactForm.tsx`** — client-side form used on the contact page (submit
  handler is stubbed — wire it up to your backend / email provider of choice)

## Data

Pet data lives in `src/lib/pets.ts` (typed by `src/types/pet.ts`) as a simple
in-memory array with `bella`, `milo`, and `pepper` as sample entries. Swap this
for a CMS or database call when you're ready — every page already reads
through `getPetBySlug` / `pets`, so that's the only file you need to touch.

## Styling

Tailwind CSS v4. Brand colors (slate-blue header, navy footer, light gray
placeholders) are defined as CSS variables in `src/app/globals.css` under
`brand-*` and `surface-*` — change them there to re-theme the whole site.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Inter via `next/font/google`
# PetAdopt-Pet-Adoption-Platform
