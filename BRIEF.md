# McCormick's Palm Springs — Design Brief

## Brand Synopsis

McCormick's is a family-owned classic and exotic car auction house, founded in 1985 by Keith McCormick after a move from the United Kingdom to the California desert. They run two auctions a year — February and November — each with 500+ vehicles crossing the block at their Palm Springs facility on North Indian Canyon Drive. Between sales, the showroom is open year-round for consignment intake and walk-in browsing. The reputation rides on documentation, family operation, and longevity — they've moved hundreds of vehicles per sale across more than eighty auctions, with recent results topping $181K on a single 1960 Porsche Super 90 Convertible.

The current public site (classic-carauction.com) is functional and information-dense but visually thin — small images, dense paragraphs, dropdown navigation, no real editorial point of view. The mockup positions the brand the way a serious collector imagines them: quiet, confident, family-owned, built on integrity. Bodoni Moda + champagne ink. Less brochure, more catalogue.

## Design Decisions

### Direction: Editorial Luxury (Ink + Brass)

- **Mood**: A serious auction house catalogue at golden hour. Quiet, considered, never loud. The page should feel like leafing through a Christie's preview, not browsing a dealer lot.
- **Fonts**: [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) (display, optical sizing) + [Manrope](https://fonts.google.com/specimen/Manrope) (body). High-contrast Bodoni serifs do the editorial heavy lifting; Manrope keeps body type clean without sliding into Inter-territory.
- **Colors**:
  - `#0A0908` — ink (page background)
  - `#15110E` — ink-2 (alternating section backgrounds)
  - `#E8DCC4` — champagne (primary type)
  - `#C9A961` — brass (accent / dates / italic emphasis)
  - `#7A2E2E` — auction red (reserved, unused in this build but available)
- **Layout**: Editorial vertical scroll with full-bleed hero, an outlined-marquee divider, calendar grid, asymmetric image-left/text-right story block, and a centered editorial blockquote.
- **Signature element**: Stroke-outlined oversized italic Bodoni marquee scrolling auction-stat phrases ("Auction 81 / Nov 20–22, 2026 / 500+ Lots / Family Owned / Est. 1985 / Palm Springs"). It's the only animated element other than a subtle parallax on hero, and it's load-bearing — it ties the brand voice and the date together in one piece of type.
- **Trends used**:
  1. **Big editorial type** — Bodoni Moda at 8–15vw, italic emphasis on key words ("stories", "crossed", "Canyon")
  2. **Dark mode editorial** — ink palette with champagne/brass against deep blacks, restrained accent use
  3. **Marquee text** — stroke-outlined oversized italic, vanilla CSS @keyframes (no animation-timeline)
- **Logos used (Logo Search)**: None. The on-page sponsor row is type-only by design — a logo grid would dilute the editorial feel. Available to add if Daddy wants the actual Hagerty / J.J. Best Banc / Plycar / Swisstrax / NADA marks.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Floating header | Floating Header | `nav minimal transparent` | `21st-sources/floating-header.tsx` | Pill-shaped centered floating nav with backdrop blur (top-5 z-50, max-w-3xl, rounded, border, bg-background/95 + backdrop-blur-lg) — translated to a serif "M" mark + Bodoni wordmark for editorial luxury |
| From the Archive grid | Elite Plan Card | `product showcase editorial` | `21st-sources/elite-plan-card.tsx` | Image-on-top + dark content panel pattern with gradient fade between image and panel; uppercase tracking-wider subtitle ("LOT HIGHLIGHT") above a serif title — translated for past-lot showcase cards |
| Auction stats marquee | Marquee (stroke text outlined) | `marquee ticker scrolling` | `21st-sources/marquee-stroke.tsx` | WebkitTextStroke outlined oversized italic type animating horizontally — translated to vanilla CSS `@keyframes marquee` for the auction-stats ticker |
| Editorial testimonial | Split Testimonial | `testimonial editorial quote` | `21st-sources/split-testimonial.tsx` | Editorial typography hierarchy: small uppercase tracking-[0.2em] tag with horizontal rule + large light-weight blockquote + thin horizontal rule + author/role — translated for the McCormick's "House Position" quote |

## Content Inventory

- **Images pulled** (all from classic-carauction.com CDN, downloaded locally to `/images/`):
  - `hp_slide01.jpg` — wide auction-floor shot under the white tents (used as hero + Card 1)
  - `hp_slide02–06.jpg` — five additional auction-floor and bidder-action shots (Cards 2–6)
  - `aboutmccormicks.jpg` — close-up of a McCormick's classic at the showroom (Story section)
  - `ourstory.jpg` — secondary brand image (held in reserve, not currently in the build)
  - `source-icon.ico` — original McCormick's favicon (16x16 + 32x32, used as-is)
  - `og.jpg` — derived 1200×630 share preview, cropped from `hp_slide01.jpg`
- **Key copy preserved verbatim or near-verbatim**:
  - "Family owned and operated"
  - "Choosing an auction company should be based on the company's integrity and stability along with expert level knowledge"
  - "More than 600 cars crossing the block"
  - "Bidders trust us for our well-documented cars"
- **Links preserved**:
  - `tel:7603203290`
  - `mailto:joe@classic-carauction.com`
  - Google Maps deep-link to 244 N. Indian Canyon Dr.
  - Facebook, YouTube placeholder links (need actual handles before client review — see ACCURACY.md)

## Share Preview

- **OG image source**: `hp_slide01.jpg` (real McCormick's auction-floor photo from the homepage rotator, downloaded locally), then sips-scaled to height 630, cropped center 1200 wide, JPEG quality 85. Final: `images/og.jpg` at 1200×630, ~276 KB.
- **OG title**: `McCormick's Palm Springs — Family-owned classic car auctions since 1985`
- **OG description**: `Two auctions a year, 500+ vehicles each, in Palm Springs since 1985. Auction 81 — November 20–22, 2026.`
- **Favicon source**: `source-icon.ico` from McCormick's site (the actual brand favicon, real 16/32 multi-resolution ICO). Apple-touch-icon omitted on this build — could be added later from a higher-res source.
- **Theme color**: `#0A0908` (ink — matches page background, gives a clean unified address-bar tint on iOS Safari and Android Chrome)
- **Sub-pages with their own OG**: None — single-page mockup.

## Image Generation Prompts

None generated. Auction inventory is the business's product, so per the accuracy rules the build does not generate synthetic vehicle images. All visuals are real McCormick's photography. If Daddy ever wants to add atmospheric filler (e.g., a Palm Springs desert landscape shot or an abstract brass-on-ink hero texture), I'd write Grok prompts at that time.

## Suggested Next Mockups

1. **Auction 81 catalog page** — once McCormick's publishes the featured cars list closer to November 2026, build a real catalog grid with lot numbers, year/make/model, reserve indicators, and per-lot detail pages
2. **Consign flow** — multi-step intake form for sellers (vehicle details, photo upload, reserve preference, contact)
3. **Showroom inventory page** — year-round consignments with filterable grid (decade, make, body style, price range)
4. **Bidder registration / live-bid page** — pre-auction account creation, paddle assignment, mobile-friendly bid interface for the auction floor
5. **Past Results / Archive** — searchable history of all 80+ auctions with top sales, total sold, and notable lots

## Build Timing

Tracking was inconsistent across the resumed-from-failure build, so this is approximate.

| Phase | Notes |
|---|---|
| Recovery + diagnosis | ~2 min (identifying the 47,485-byte HTML files, cleaning up, re-fetching the site) |
| Step 1: READ (re-fetch) | ~2 min |
| Step 2: DIRECTION (already locked from prior session) | 0 (cached in `21st-sources/`) |
| Step 3: BUILD (HTML + share preview meta) | ~6 min including animation-removal fix |
| Step 4: VERIFY + ACCURACY.md | ~2 min |
| Step 5: BRIEF | ~2 min |

## Production Notes

To build this for production, use Claude Code (Opus, high effort) with the cached `21st-sources/` React components as a head start. Recommended stack: **Next.js + Tailwind + shadcn/ui** so the elite-plan-card, floating-header, marquee-stroke, and split-testimonial components drop in with minimal rework. The hero parallax can be re-implemented with `framer-motion` for smoother behavior on scroll. Real backend needs include: a CMS (Sanity or Contentful) for the rolling Auction 81 catalog, a consignment intake form (formspree or Resend → email), and a Squarespace-style image proxy for high-res lot photos at multiple sizes. Bidder accounts and live bidding are a separate platform — for that, point Daddy at Proxibid or Bidpath integrations rather than building from scratch.
