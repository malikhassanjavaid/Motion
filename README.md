# MOTION

Contemporary essentials engineered for movement and refined for everyday life.

MOTION is an e-commerce storefront built with Next.js 16 (Turbopack), React 19, and Tailwind CSS v4. It features accessible catalog rails, interactive product filtering, art-directed carousels, and design QA verification.

---

## Features

- **Sale Announcement Bar**: Accessible banner notifying customers of current seasonal sales with quick shop actions.
- **MOTION Navbar**: Minimalist sticky header with brand wordmark in Anton typography, search, bag, and profile shortcuts.
- **Art-Directed Hero Carousel**: Full-bleed campaign slides direct-tailored for mobile, laptop, and ultrawide viewports with subtle dot pagination.
- **The Everyday Standard**: Six-category visual grid featuring essential apparel categories with fluid responsive layouts.
- **The Polo Collection**: Horizontally scrollable product rail with smooth button navigation and responsive card sizing.
- **Sweatshirts in Focus**: Interactive split-layout showcase pairing editorial campaign photography with a dynamic category filter (All Sweatshirts, Crewnecks, Zip & Relaxed) and add-to-bag toggles.
- **Brand Footer**: Comprehensive site footer with newsletter subscription, collection links, concierge help, and social channels.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & State**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`)
- **Typography**: [Geist](https://vercel.com/font), [Anton](https://fonts.google.com/specimen/Anton), and [Libre Bodoni](https://fonts.google.com/specimen/Libre+Bodoni) via `next/font`
- **Testing**: Built-in Node.js test runner (`node:test`, `node:assert/strict`)

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/malikhassanjavaid/Motion.git
cd Motion
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
npm run build
npm run start
```

### Running Tests

Execute the automated server-rendered test suite:

```bash
npm test
```

---

## Architecture & Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with Geist font variables and SEO metadata
│   ├── page.tsx           # Home page composing all brand sections
│   └── globals.css        # Global Tailwind CSS directives and styles
├── components/
│   ├── Banner.tsx         # Top sale announcement bar
│   ├── EverydayStandard.tsx # Six-card category collection gallery
│   ├── Footer.tsx         # Brand footer with newsletter form
│   ├── Hero.tsx           # Art-directed hero slideshow
│   ├── Navbar.tsx         # Primary brand navigation bar
│   ├── PoloCollection.tsx # Responsive horizontal polo carousel
│   └── SweatshirtFocus.tsx # Split campaign showcase & filtered rail
├── public/
│   └── images/            # Art-directed hero, polo, and sweatshirt assets
├── tests/
│   ├── announcement-bar.test.mjs  # Tests for banner and navbar
│   ├── everyday-standard.test.mjs # Tests for category grid and polo rail
│   ├── hero-section.test.mjs      # Tests for hero carousel and art-direction
│   ├── sweatshirt-focus.test.mjs  # Tests for sweatshirt section and filtering
│   └── footer.test.mjs            # Tests for brand footer
└── design-qa.md           # Visual verification and capture report
```

---

## License

This project is private and proprietary to MOTION Inc.
