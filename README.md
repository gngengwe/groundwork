# Groundwork — Landing Page

> The gym should come with instructions.

A simplicity-first fitness education system. Phase One: landing page / coming-soon.

Live URL: **[groundwork.ngengwe.com](https://groundwork.ngengwe.com)**

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS |
| Typography | DM Serif Display + DM Sans (Google Fonts) |
| Deployment | Cloudflare Pages |
| Domain | `groundwork.ngengwe.com` → Cloudflare DNS |

---

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## Build

```bash
npm run build
# Static output → ./out/
```

The `out/` directory is a fully static site — no Node server required.

---

## Deploy to Cloudflare Pages

### First-time setup

1. Push the repo to `github.com/gngengwe/groundwork`
2. Go to **Cloudflare Pages → Create a project → Connect to Git**
3. Select the `gngengwe/groundwork` repo
4. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version env var**: `NODE_VERSION = 20`
5. Click **Save and Deploy**

### Custom domain

1. In the Cloudflare Pages project → **Custom Domains** → Add `groundwork.ngengwe.com`
2. Cloudflare auto-creates the CNAME record pointing to your Pages deployment
3. SSL is provisioned automatically

### Environment variables

No env vars are required for the static landing page.

When email capture is wired up, add:

```
EMAIL_API_KEY=your_key_here
EMAIL_LIST_ID=your_list_id_here
```

Add these in Cloudflare Pages → **Settings → Environment variables**.

---

## TODO — Email capture

The early access form in `components/EarlyAccess.tsx` currently uses a placeholder
submission delay. To make it functional:

1. **Choose a provider** — [Loops](https://loops.so) is recommended for founder-led
   products; ConvertKit/Kit and Mailchimp both work too
2. **Get an API key** from the provider
3. **Replace the placeholder block** in `EarlyAccess.tsx` (marked with a `TODO` comment)
   with a real `fetch` call to the provider's API
4. **Add your API key** as an env var in Cloudflare Pages

The form collects:
- Email address *(required)*
- Current gym experience level *(optional)*
- Biggest gym struggle *(optional)*
- Biggest food struggle *(optional)*
- Preferred learning format *(optional, multi-select)*

---

## TODO — Founder photo

The founder section uses a placeholder. To add Jeremy's photo:

1. Add the image at `public/jeremy.jpg` (portrait, ~4:5 ratio)
2. In `components/Founder.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from 'next/image'
   // ...
   <Image src="/jeremy.jpg" alt="Jeremy" width={480} height={600} className="w-full" />
   ```

---

## TODO — Social links

Footer links in `components/Footer.tsx` are set to `#`. Replace with real URLs
when accounts are live.

---

## Project structure

```
groundwork/
├── app/
│   ├── layout.tsx       # Root layout — fonts, metadata
│   ├── globals.css      # Tailwind + base styles + utility classes
│   └── page.tsx         # Page composition (imports all sections)
├── components/
│   ├── Hero.tsx         # Hero — headline, CTA
│   ├── Problem.tsx      # Problem statement
│   ├── Philosophy.tsx   # Simplicity → clarity → confidence → consistency
│   ├── System.tsx       # Five-part system cards
│   ├── Founder.tsx      # Jeremy / founder story
│   ├── EarlyAccess.tsx  # Email capture + optional survey
│   └── Footer.tsx       # Footer
├── public/              # Static assets (add jeremy.jpg here)
├── next.config.js       # Static export config
├── tailwind.config.ts   # Color palette + typography scale
├── tsconfig.json
└── package.json
```

---

## Phase Two

Do not begin MVP development until this landing page is reviewed, approved, and live.
MVP scope to be defined separately.

---

## Color palette

| Token | Hex | Role |
|---|---|---|
| `cream` | `#F7F4EF` | Page background |
| `stone` | `#EDE9E1` | Surface / section bg |
| `pebble` | `#D4CEC5` | Borders |
| `ink` | `#1C1917` | Primary text |
| `muted` | `#7A7470` | Secondary text |
| `earth` | `#8B6B44` | Accent / brand colour |
| `dark` | `#111009` | Dark sections |
| `dark-mid` | `#1A1712` | Dark surface (form fields) |
