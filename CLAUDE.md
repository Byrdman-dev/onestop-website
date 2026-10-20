# One Stop Construction And Leveling — Website Project

Persistent rules for this project. Follow these across every session.

## Who / what

Client: One Stop Construction And Leveling LLC, Lake Charles, LA.
Services: house leveling, house lifting, foundation repair.
Owner: ~30 years of experience (current live site says "28+ years" — **unconfirmed, do not state a number without owner confirmation**).

Selling points carried over from the current site (verify before reusing): free estimates, free foundation inspections, workers' comp coverage, gentle air bag lifting, warranty on all work, BBB profile.

Phone: (337) 309-7301. Hours: Mon–Sat 7am–7pm. Address: 31 B Rd, Lake Charles, LA 70601.

Current site (reference only — do not copy its text or assets, owner dislikes it, it has no photos of actual work): https://www.foundationcontractorlakecharlesla.com/

Goal: a professional, visually strong site whose core proof is before/after house-leveling photos and videos. Primary audience: homeowners on phones, often stressed about a damaged house. Design for trust and clarity.

## Working relationship

Davis is a solo developer building this for the client. Davis makes every design decision. Claude proposes, builds previews, and waits — never settles a design question unilaterally.

## Phase scope — IMPORTANT

**We are currently in Phase 1: visual design only.**

Do NOT build or stub:
- form handling or lead capture
- referral codes
- backend/API routes
- hosting setup or deployment
- accounts/auth
- secrets/env vars of any kind

Forms and buttons may exist only as visual mockups (no working submit behavior). Hosting and the lead system come later, in a separate phase. If asked to do something that drifts into Phase 2 territory, flag it and confirm scope before proceeding.

## Decision protocol

- Never settle a design question solo. For each design aspect, present 3–4 distinct options (no more).
- Show options as real previews: static HTML files in `/site-mockup/`, with real photos (metadata stripped) once cleared. Include a short pro/con per option. A recommendation may be marked, but labeled as such.
- Cover at most two aspects per round. Wait for explicit choice. Davis may mix options or reject all.
- After each decision: record it in `DECISIONS.md` (what, options considered, what was chosen, why) and make a git commit.

Order of decisions after the header banner (Step 1):
1. color palette (derived from the logo, with contrast checks)
2. typography
3. overall style and mood
4. homepage layout and hero
5. before/after photo component
6. video presentation (visual treatment only)
7. navigation and phone/call button (visual only)
8. trust-signals section
9. service page structure
10. gallery layout
11. footer and contact section (visual mockup only)

## Content rules

- Never invent facts, statistics, testimonials, reviews, license numbers, certifications, or years. Use clearly marked placeholders.
- Keep a running "owner must confirm/supply" list (see DECISIONS.md) including: exact years of experience, contractor license/registration number, BBB rating, insurance and warranty terms, photo releases from homeowners, a contact email, and the original (source/vector) logo file.
- Keep these exact page slugs/names so SEO isn't lost: `/house-leveling-lake-charles-la`, `/house-lifting-lake-charles-la`, `/foundation-repair-lake-charles-la`, `/about`, `/contact`.
- Design mobile-first and accessible (sufficient contrast, readable text sizes, reduced motion).
- Videos are embedded from an external host later — visual placeholders only, never commit large video files.

## Stack

Astro (static output), Tailwind CSS, TypeScript. The static-HTML site mockup lives in `/site-mockup/` and opens directly in a browser (no build step) — it's the visual reference the eventual Astro build will follow.

**Tell Davis before installing anything beyond Astro, Tailwind, TypeScript, and small image utilities** (e.g. image conversion/compression tools needed to prep assets). If this section ever conflicts with an invoked skill, this section wins.

## Privacy / asset rules

- `logo/` and `before-after-pics/` hold originals. **Never modify or overwrite originals.** Write all derived files to a separate folder, e.g. `assets/derived/`.
- Every photo must be checked for EXIF metadata, especially GPS, before any derived/web copy is made. Strip all metadata in derived copies. Never publish an image that still carries location data.
- Flag (don't silently use) any photo showing: house numbers, street signs, license plates, or identifiable people's faces. Get explicit sign-off from Davis/owner before using such a photo, even cropped.

## Source photo inventory notes (as of Step 0, 2026-10-17)

- `before-after-pics/` has 5 project folders, each with an auto-generated `_overview.jpg` plus original `before_*` / `during_*` / `after_*` HEIC photos (4032×3024, iPhone, no GPS EXIF found in any of the 43 photos checked).
- Folder `02_Tan house full leveling`, file `during_2_202502_a_IMG_1316.HEIC`, shows a clearly identifiable man's face (presumably the owner or a worker, visible under the house). Needs explicit confirmation before use.
- Before/after/during counts are uneven per project (e.g. folder 02 has 3 before vs 4 after); pairing for a before/after component will need manual curation, not strict 1:1 file matching.
- Full findings are in `DECISIONS.md` under "Step 0 findings."
