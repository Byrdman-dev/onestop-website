# Decisions Log

One entry per design decision: what was decided, options considered, and why. Newest at top.

---

## Step 8 — Navigation & phone/call button, mobile (2026-10-20)

**Decided:** Option 2 — Dropdown Accordion, revised to float over content.

Tapping the hamburger expands a panel directly below the mobile header (same visual style as a basic dropdown), but the panel is absolutely positioned over a dimmed backdrop instead of pushing page content down — tapping the backdrop or the hamburger again closes it, and the page never shifts. Preview: `design-previews/step-8-nav-phone-button/option-2-dropdown.html`.

**Options considered** (all four previews kept in `design-previews/step-8-nav-phone-button/`, each in a 390px-wide phone frame):
- 1 — Slide-Out Drawer: hamburger opens a full-height side drawer with a dimmed backdrop. Most familiar pattern, but a bigger motion/build than needed here.
- 2 — Dropdown Accordion: panel below the header. *Chosen*, revised per Davis's request (see below).
- 3 — Sticky Bottom Call Bar: a persistent call button fixed to the bottom of the screen while scrolling. Rejected — permanently uses screen real estate and adds a second sticky element to keep in sync with the header.
- 4 — Full-Screen Minimal: icon-only header, full-screen nav overlay. Rejected — hides the phone number from casual view.

**Revision (same day):** First pass of Option 2 pushed page content down when opened (plain in-flow panel). Davis asked to keep the dropdown's look but avoid the layout shift. Changed the panel to `position: absolute` with a semi-transparent backdrop behind it (same open/close triggers), so it now floats over the page instead of displacing it — closer to a lightweight drawer in behavior, without the side-slide motion.

**Why:** Keeps the simplest visual style (a panel under the header, not a side-sliding drawer) while removing the layout-jump drawback that the original in-flow version had. The phone/call button stays visible as a small icon button in the header at all times (not hidden inside the menu), consistent with keeping the call action always one tap away.

---

## Step 7 — Video presentation (2026-10-20)

**Decided:** Option 4 — Card Grid.

A "Watch Our Work" section with a grid of video thumbnails (one per project), each with a play-button overlay and a caption. Clicking a card opens the video (lightbox reused from Option 1's pattern in this preview; final interaction can be refined when real videos exist). Preview: `design-previews/step-7-video-presentation/option-4-card-grid.html`.

**Options considered** (all four previews kept in `design-previews/step-7-video-presentation/`):
- 1 — Lightbox Play: click thumbnail → video opens in a dimmed modal overlay. Focused viewing, needs modal JS.
- 2 — Inline Expand: click thumbnail → video plays in place, no overlay. Simplest to build, but content shifts down when it expands.
- 3 — Autoplay Background Loop: muted ambient loop plays automatically behind a section. Most dynamic, but adds page weight and needs a `prefers-reduced-motion` fallback.
- 4 — Card Grid: a dedicated grid of video thumbnails with captions. *Chosen.*

**Why:** Scales naturally once there's more than one video (one per project, matching the gallery's project-based structure), and keeps video content organized in its own section rather than scattered through the homepage. Davis accepted the trade-off that it needs genuinely distinct thumbnails per card to avoid feeling repetitive, and that it reads as more of a separate destination than something woven into the main homepage narrative.

**Still pending (Phase 2, not now):** No real video files exist. This decision is visual treatment only — actual videos will be embedded from an external host (e.g. YouTube/Vimeo) in a later phase, per project scope rules. Thumbnails in the preview reuse the one approved before/after photo as a stand-in.

---

## Step 6 — Before/after photo component (2026-10-20)

**Decided:** Option 1 — Drag Slider.

A draggable vertical handle splits the before/after images; dragging it left/right reveals more of each side via CSS `clip-path`. Built with a plain `<input type="range">` under the hood for native touch/keyboard support. Preview: `design-previews/step-6-before-after-component/option-1-drag-slider.html`.

**Options considered** (all four previews kept in `design-previews/step-6-before-after-component/`):
- 1 — Drag Slider: draggable reveal handle. Most engaging/familiar before/after pattern. *Chosen.*
- 2 — Side-by-Side: both photos shown at once, no JS. Simplest to build, but each image is smaller on narrow phones.
- 3 — Toggle: tap Before/After buttons to swap one full-size image. Max image impact on mobile, but requires an active tap to see the payoff.
- 4 — Stacked: before/after stacked vertically, full width each. Most mobile-friendly, but loses the instant side-by-side comparison.

**Why:** Most engaging and recognizable pattern for before/after proof, and directly reinforces the "drag to see the transformation" framing that fits the Before/After-Led Hero from Step 5. Davis accepted the added JS complexity and the need for a visual hint (handle + Before/After labels) so first-time visitors notice it's interactive.

**Real photos used for the first time this project:** `assets/derived/before-after/02-tan-house-leveling-before.jpg` and `...-after.jpg`, sourced from `before-after-pics/02_Tan house full leveling (Feb-Apr 2025)/before_1_...IMG_1281.HEIC` and `after_3_...IMG_1457.HEIC`.

**Privacy flag + sign-off (2026-10-20):** Before use, these photos were found to show a house number ("10384") on the fascia in both shots, and a bystander (worker, back turned) at the right edge of the before photo. Flagged to Davis per project privacy rules; Davis approved cropping rather than switching photos. Both images were cropped to exclude the house number and the bystander entirely (not just visually obscured), then resized to 1400px wide, metadata already stripped during HEIC→JPEG conversion. No other photos have been cleared for use yet — any additional before/after photos used later (e.g. for the gallery, decision #10) need this same flag-and-confirm step.

---

## Step 5 — Homepage layout & hero (2026-10-20)

**Decided:** Option 2 — Before/After-Led Hero.

The hero section itself is a before/after photo pair (not a generic hero photo), with a short headline above it and CTAs below. Section order: Hero (before/after pair) → Trust row → Services → More Before/After Examples teaser → Footer. No testimonial band in this layout. Preview: `design-previews/step-5-homepage-hero/option-2-before-after-led.html`.

**Options considered** (all four previews kept in `design-previews/step-5-homepage-hero/`):
- 1 — Classic Stack: Hero → Trust → Services → Before/After teaser → Testimonial → Final CTA → Footer. Familiar/easy to build, but buries the before/after proof mid-page.
- 2 — Before/After-Led Hero: the hero *is* a before/after pair. *Chosen.*
- 3 — Dual-Path Hero: hero splits into "Need Help Now" (call) vs. "Just Looking" (see work) paths. Serves both visitor mindsets, but dilutes the single clearest CTA.
- 4 — Problem/Solution Narrative: hero names the problem first (cracks, sloping floors), then signs-to-watch, services, proof. Most empathetic arc, but longest path to the phone number/proof and leans on copy that's still placeholder in this visual phase.

**Why:** Directly matches this project's stated goal — before/after photos are the core proof — and sharply differentiates from the current site, which has no photos of actual work at all. Davis accepted the trade-off that this raises the bar on photo curation (the very first thing a visitor sees must be a strong, well-matched pair) and that there's no testimonial band in this layout.

**Depends on:** Step 6 (before/after photo component — slider vs. side-by-side, captions, etc.) is the next decision and directly determines how this hero is actually built, since the hero itself is now a before/after component instance.

---

## Step 4 — Overall style & mood (2026-10-20)

**Decided:** Option 1 — Sharp & Structural.

Square/near-square corners (rounded-sm at most — buttons included), thin 1px borders used for depth/separation instead of drop shadows, tight precise spacing, straight section dividers (hairline borders, not curves/angles). Preview: `design-previews/step-4-style-mood/option-1-sharp-structural.html`.

**Options considered** (all four previews kept in `design-previews/step-4-style-mood/`):
- 1 — Sharp & Structural: square corners, borders not shadows, tight spacing. Technical/engineered feel, fastest/simplest to build consistently. *Chosen.*
- 2 — Soft & Approachable: rounded corners, soft shadows, generous whitespace. Calm and reassuring, pairs naturally with the serif headings, but undersells structural seriousness a bit.
- 3 — Bold Editorial: oversized headlines, full-bleed photography, almost no UI chrome. Most striking and puts before/after photos front and center, but hardest to build/keep consistent and least scannable for quick facts.
- 4 — Dense & Functional: compact, bordered, information-forward, like a trade directory. Fast to scan, but least emotionally engaging and gives photography little room.

**Why:** Fits the "technical/engineered" read that suits structural repair work, and is the simplest of the four to build and keep visually consistent across pages (no shadow/elevation system to maintain). Davis accepted the noted trade-off — it's the coldest of the four moods and offers the least "soft landing" for an anxious homeowner — in favor of precision and build simplicity.

---

## Step 3 — Typography (2026-10-20)

**Decided:** Option 3 — Classic Trust (Roboto Slab headings + Open Sans body).

Headings use Roboto Slab (bold, weight 700), body copy uses Open Sans (weight 400/600). Preview: `design-previews/step-3-typography/option-3-classic-trust.html`.

**Options considered** (all four previews kept in `design-previews/step-3-typography/`):
- 1 — Bold Industrial (Oswald + Inter): condensed, heavy, uppercase headings echoing the logo's bold slanted wordmark. Strong/authoritative, but condensed type loses legibility in long headlines.
- 2 — Clean Modern (Inter, single family): one font family, different weights. Very legible and fast-loading, but least distinctive/branded of the four.
- 3 — Classic Trust (Roboto Slab + Open Sans): serif headings read as established/reputable. *Chosen.*
- 4 — Warm Humanist (Quicksand + Work Sans): rounded, friendly headings. Most reassuring tone, but least "heavy-duty construction" feeling and furthest from the logo's angular wordmark.

**Why:** Slab-serif headings read as established and reputable — the pattern homeowners associate with long-standing local service companies — and pair calmly with the steel blue-gray palette from Step 2 without competing against the red accent. Davis accepted the trade-off noted in the preview (serif headings are the least visually unified pairing with the logo's bold condensed sans wordmark) in favor of the trust-building tone.

**Note:** Previews load Roboto Slab/Open Sans via Google Fonts CDN for quick iteration. Production will likely self-host the chosen fonts for performance/privacy — that's a build-phase detail, not part of this decision.

---

## Step 2 — Color palette (2026-10-18)

**Decided:** Option 3 — Steel Blue-Gray Secondary.

Core brand colors stay black `#020202` / white `#FDFDFD` / red `#E7030A` (red reserved for primary CTAs and key accents). Adds one new hue, a muted steel blue-gray, for secondary buttons, icons, and section backgrounds. Preview: `design-previews/step-2-color-palette/option-3-steel-blue-gray.html`.

**Palette tokens:**
| Token | Hex |
|---|---|
| white | `#FDFDFD` |
| steel-50 | `#F4F6F8` |
| steel-200 | `#C9D1D9` |
| steel-400 | `#7E8C9A` |
| steel-500 | `#5C6B7A` |
| steel-600 | `#47535F` |
| steel-700 | `#363F48` |
| steel-800 | `#262C33` |
| steel-900 | `#171B1F` |
| red (brand) | `#E7030A` |
| red hover | `#C40208` |

**Contrast checks (computed WCAG 2.1 ratios):**
- steel-700 body text on white: 10.53:1 (AA/AAA pass)
- steel-600 text/buttons on white, and white on steel-600: 7.73:1 (AA/AAA pass)
- white on red (primary CTA): 4.68:1 (AA pass — keep CTA text bold/≥16px)
- steel-900 headings on white: 15+:1 (AAA pass)

**Options considered** (all four previews kept in `design-previews/step-2-color-palette/`):
- 1 — Pure Monochrome + Red Accent: true neutral grays, red as the only hue. Cleanest/most consistent with the logo, but can read cold/corporate.
- 2 — Warm Construction Neutrals: same core with grays shifted warm (tan/stone). More grounded/approachable, but more prone to looking muddy if not tuned well.
- 3 — Steel Blue-Gray Secondary: adds the steel blue-gray secondary hue. *Chosen.*
- 4 — High-Contrast Red-Forward: red used for full section backgrounds (red-900), not just CTAs. Most distinctive, but riskiest if overused and doesn't actually reduce the palette's complexity.

**Why:** Steel blue-gray gives the site a second usable color for hierarchy (secondary buttons, icons, backgrounds) without diluting red's role as the one color that means "act now" — and the blue-gray tone reads as stable/structural, which fits foundation and leveling work. It's the only option that adds a hue not literally extracted from the logo, so it needs its own contrast verification (done above) and should be used deliberately, not as a red substitute.

---

## Step 1 — Header banner (2026-10-18)

**Decided:** Option A — Classic White Bar.

White header bar, logo + "ONE STOP / Construction & Leveling" lockup on the left, full nav links (House Leveling, House Lifting, Foundation Repair, Gallery, About, Contact), red pill phone-number CTA on the right. Previews: `design-previews/step-1-header-banner/option-a-classic-white.html`.

**Options considered** (all four previews kept in `design-previews/step-1-header-banner/`):
- A — Classic White Bar: clean, familiar, nav fully visible on desktop, red CTA passes AA on white. *Chosen.*
- B — Bold Black Bar: matches the logo's own black-square badge directly, more premium tone, but red-on-black text only passes AA at large/bold sizes.
- C — Two-Tier Utility + Nav Bar: trust signals (free estimate, hours) above the main bar, but overlaps with the dedicated trust-signals section planned later (decision #8) and costs more mobile vertical space.
- D — Minimal Floating Overlay: logo-only transparent header over a hero photo, most modern, but hides phone/nav behind icons — judged too risky for a stressed-homeowner audience scanning fast on a phone.

**Why:** Clarity and immediate scannability for homeowners (often on mobile, often stressed about visible home damage) outweighed the bolder branding of Option B or the extra trust messaging of Option C. Mobile nav collapse behavior and final typography/spacing still need to be built out — this decision fixes the *structure and tone* of the bar, not final pixel-level styling.

**Assets produced:** `assets/derived/logo-circle-transparent.png` (circle-cropped, transparent outside the disc, metadata stripped) and `assets/derived/logo-square-black.png` (full badge, metadata stripped) — both derived from `logo/Onestop Logo.png`, original untouched. Logo PNG confirmed to carry no EXIF data (consistent with Step 0 findings).

**Revision (same day):** Davis asked to drop the circular badge entirely and instead place just the black roofline graphic above the "ONE STOP" wordmark. Extracted `assets/derived/logo-roofline.png` — the roofline stroke only, cropped from the original logo and keyed to transparent (white background removed, black stroke kept), no circle/square framing. `option-a-classic-white.html` updated to this treatment; it's now the current state of the chosen header.

---

## Step 0 — Logo & photo analysis (2026-10-17)

Not a design decision — a findings/intake record. See full report delivered in conversation. Summary below.

### Logo (`logo/Onestop Logo.png`)

- PNG, 1254×1254px, RGB, no alpha channel, no EXIF. File size 820KB.
- Matches Davis's description: circular badge, white disc on black square background, black "ONE" / red "STOP" in heavy slanted/italic type, "— CONSTRUCTION & LEVELING —" condensed tagline, roofline stroke above "ONE".
- Edge quality: clean antialiasing on letterforms and circle edge, no color fringing found at 4x zoom. Flat white/black fields are pixel-clean (std ≈ 0.5/255 — no compression noise).
- 1254px is adequate for web use (banners, cards) but is a flattened PNG, not vector — will look soft if ever blown up large or sent to print. **No source/vector file available — added to owner ask list.**
- Extracted true colors (by pixel-cluster averaging, not just "nearest named color"):
  - White: `#FDFDFD` (effectively pure white)
  - Black: `#020202` (effectively pure black)
  - Red: `#E7030A`
- WCAG contrast (logo colors as literally extracted):
  - Red `#E7030A` on white: **4.76:1** — passes AA normal text (≥4.5) and AA large text, fails AAA.
  - Red `#E7030A` on black: **4.42:1** — fails AA normal text, passes AA large text only (≥3.0). Red-on-black must stay large/bold (headings), not body copy.
  - White on red: same as red-on-white, 4.76:1 — passes AA normal/large.
  - Black `#000000` on white `#FFFFFF`: 21:1 — passes everything.
  - Takeaway for later palette decision: red is usable as an accent/heading color on white or black, but is borderline for AA body text on white (4.76 vs 4.5 threshold — little margin) and must not be used as small/thin body text on black.

### Before/after photos (`before-after-pics/`)

- 5 project folders, 43 original HEIC photos total (all 4032×3024, Apple/iPhone, high quality, well exposed) + 5 auto-generated `_overview.jpg` contact-sheet composites.
- **GPS EXIF: none found in any of the 43 photos** (checked via piexif, confirmed empty GPS IFD on every file). Camera Make/Model/DateTime EXIF is present but no location data. Still strip all EXIF in derived copies per policy.
- **Face flagged:** `02_Tan house full leveling/during_2_202502_a_IMG_1316.HEIC` shows a clearly identifiable man's face (presumably owner/worker) under the house. Do not use without explicit confirmation from Davis/owner.
- No clearly readable house numbers, street signs, or license plates found on close inspection of likely-risk frames (porch/door areas, a parked truck, a trailer). A few photos have small/distant background figures (workers) too far away to be identifiable — not flagged as a face concern.
- One frame (`02_Tan house full leveling/during_1_...IMG_1304`) has a faint reflection in a window that may contain sign text — too indistinct to read, noted for awareness only, not actionable.
- Before/after/during counts are uneven per project — pairing for a before/after slider will need manual curation per angle, not a strict file-count match:
  - 01 Blue house siding: 3 before / 3 during / 3 after
  - 02 Tan house leveling: 3 before / 5 during / 4 after
  - 06 Mobile home deck: 2 before / 3 during / 4 after
  - 11 Cabin on trailer: 2 before / 3 during / 3 after
  - 14 Porch and ramp: 2 before / 0 during / 3 after
- No low-resolution or corrupt images found; all originals are high enough resolution for large hero/gallery use.

### Owner must confirm/supply (running list)

- Exact years of experience (site currently says "28+", Davis says ~30 — unconfirmed)
- Contractor license/registration number
- BBB rating (current site references a BBB profile — confirm rating/standing)
- Insurance (workers' comp) and warranty terms — exact wording/scope
- Photo release / consent for the identifiable face in folder 02 `during_2`
- A contact email address
- Original/source (ideally vector) logo file, if one exists

---
