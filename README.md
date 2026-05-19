# CumaCode — #BayarCumaCuma

Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack. Harga: terserah kamu.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Font:** Geist Mono

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push project to GitHub
2. Import repository in Vercel
3. No additional config needed — `next.config.ts` and `package.json` are ready

### Self-Hosted

```bash
npm run build
npm run start
```

The build output is configured as `standalone` for easy deployment to VPS, Docker, or any Node.js environment.

## Project Structure

```
app/
  components/       # Reusable UI components
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    Layanan.tsx
    CaraKerja.tsx
    Portfolio.tsx
    Testimoni.tsx
    FAQ.tsx
    Kontak.tsx
    ScrollReveal.tsx
    JsonLd.tsx
  data/              # Centralized content data
    types.ts
    services.ts
    portfolio.ts
    testimonials.ts
    faq.ts
    steps.ts
  pesan/             # Order form page
    page.tsx
    layout.tsx
  portofolio/        # Portfolio gallery page
    page.tsx
    layout.tsx
  layout.tsx         # Root layout
  page.tsx           # Home page
  not-found.tsx      # 404 page
  error.tsx          # Error boundary
  loading.tsx        # Loading state
  sitemap.ts         # Dynamic sitemap
  icon.tsx           # Favicon
  globals.css        # Global styles + brutalist utilities
public/
  robots.txt
```

## Brand

- **Colors:** Black (#1D1D1D), Yellow (#F5F500), White (#FFFFFF)
- **Design:** Brutalist — bold borders, flat colors, monospace typography
- **Tone:** Honest, casual, inclusive
