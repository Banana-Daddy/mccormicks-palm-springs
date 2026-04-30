# Accuracy Review — McCormick's Palm Springs

Source of truth: https://www.classic-carauction.com/ and `/About-Us`.

## Verified

Cross-referenced against the official site, About-Us page, and Auction-80 results page.

- **Founded**: 1985 ✓ (About-Us: "In 1985, Keith hosted his very first exotic car auction")
- **Founder**: Keith McCormick, formerly a UK entrepreneur ✓ (About-Us: "Back in 1981, Keith McCormick had already become a successful entrepreneur in his native United Kingdom")
- **Ownership**: Family owned and operated ✓ (About-Us: "We are a family owned and operated Classic Car Auction house based in Palm Springs, California")
- **Address**: 244 N. Indian Canyon Dr., Palm Springs, CA 92262 ✓
- **Phone**: 760.320.3290 ✓ (About-Us)
- **Email**: joe@classic-carauction.com ✓ (About-Us, listed as webmaster contact)
- **Auction frequency**: Two auctions per year, February and November ✓ (About-Us)
- **Lot count per auction**: 500+ vehicles ✓ (About-Us)
- **Year-round showroom + consignment** ✓
- **Auction 81 dates**: November 20–22, 2026 ✓ (homepage calendar widget)
- **Auction 80 results**: 297 vehicles crossed the block, 170 sold ✓ (Auction-80 page)
- **Auction 80 top sale**: 1960 Porsche Super 90 Convertible at $181,000 ✓ (Auction-80 page)
- **House positioning quote**: "Choosing an auction company should be based on the company's integrity and stability along with expert level knowledge" — paraphrased on the mockup as "Choosing an auction company should come down to integrity, stability, and expert-level knowledge — and not much else." Marked as house position rather than quoted from a named individual, since the source attributes it to the company, not a person.
- **Sponsors / partners**: J.J. Best Banc (financing), Hagerty (insurance), Plycar (transport), Swisstrax (showroom flooring), NADA (valuation) ✓ — all visible as sponsor logos on the live site
- **All hotlinked images** (`hp_slide01–06.jpg`, `aboutmccormicks.jpg`, `ourstory.jpg`) are downloaded locally and confirmed real JPEGs, not placeholder HTML

## Flagged for Daddy

Things written for tone or implied that the official site doesn't directly state — please confirm or replace before sharing with a client.

- **Tagline / hero headline** "Five hundred stories at the desert's edge." — written by me. The site itself has no equivalent tagline; positioning on McCormick's site is functional rather than poetic. Confirm if you'd like something closer to their voice.
- **"Forty-one years on, still family run."** — written by me, derived from the verified 1985 founding (1985 → 2026 = 41 years). Mathematically accurate; phrasing is mine.
- **"The country's most documented classics"** — derived from the site's repeated emphasis on "well-documented cars" but stretched into a positioning claim. Consider softening or letting Daddy confirm.
- **Calendar block messaging** — "Doors open / Preview opens" Friday, "Day 1 across the block" Saturday, "Day 2 + closing lots" Sunday — pattern is plausible for a 3-day weekend auction but not directly stated on the site. Confirm with the actual schedule once it's published closer to November.
- **Featured cars / inventory** — McCormick's site says "Featured cars page updated daily as we get closer to the auction" and currently shows none. The mockup deliberately does NOT invent specific lots. Instead, the "From the Archive" section uses the actual McCormick's homepage rotator photos (real auction floor) labeled honestly as "Lot Highlight / From the Floor / Across the Block / etc." — meta descriptors, not invented year/make/model claims.
- **Business hours** — not stated on the source site. The mockup uses the soft phrasing "Open year-round by appointment and during auction weekends" — accurate to the year-round-showroom claim but not a precise schedule.
- **Social links** — Facebook and YouTube link to platform homepages, not the actual McCormick's profile URLs (couldn't extract handle from source HTML). Replace with real account URLs before client review.

## Fixed During Review

- Originally tried to pull individual lot images from invented URLs (`bentley-spur.jpg`, `chevelle-malibu.jpg`, etc.). All returned a "Sorry, but that page is not available" HTML error page disguised as a JPEG (10 files at exactly 47,485 bytes). Moved to `_failed-html-attempts/` and renamed `.html`. Build now uses only verified real images from the McCormick's homepage rotator and about pages.
- Confirmed all 6 `hp_slide` images, `aboutmccormicks.jpg`, and `ourstory.jpg` are valid JPEGs from the McCormick's CDN before referencing them in the build.
- Per accuracy rules: did NOT generate any synthetic vehicle images. Auction inventory is the product — generating fake cars and labeling them as McCormick's lots would misrepresent the business.
