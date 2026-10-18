# Decisions Log

One entry per design decision: what was decided, options considered, and why. Newest at top.

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
