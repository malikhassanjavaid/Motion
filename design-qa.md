# Design QA: Responsive Hero Carousel

## Comparison Target

- Source visual truth:
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-c0ed3b99-3f80-42cf-a0ea-3d253401e6d3.png` (control pill to remove)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-af409bde-27b3-4427-9b0c-8dfa2f075ae2.png` (Campus Essentials)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-a76df1fd-4f59-4a20-ace2-8e574179215c.png` (Play in Motion)
  - existing approved Polo hero and editorial overlay in `components/Hero.tsx`
- Source pixels:
  - Campus: 1849 × 850 (2.175:1)
  - Padel: 1846 × 852 (2.167:1)
- Implementation URL: `http://127.0.0.1:3000/`
- Browser-rendered implementation screenshot: unavailable
- Intended CSS viewports:
  - laptop: 1918 × 828 at device scale 1
  - mobile: 390 × 844 at device scale 1
- State: home-page carousel with Polo, Campus Essentials, and Play in Motion slides, using three bare bottom-center pagination dots

## Full-View Comparison Evidence

- The supplied Campus image shows the two T-shirt models in a sunlit campus environment; the supplied Padel image shows two tracksuit-clad players on a dark blue court.
- Generated 3:1 laptop variants preserve the supplied people, clothing palettes, and environments while keeping the left campaign-copy region clear.
- Generated 4:5 mobile variants preserve complete faces, garments, rackets, hands, and shoes while moving the campaign action below the upper copy region.
- A same-viewport browser comparison is blocked because the in-app browser runtime cannot initialize under the current Windows sandbox. The browser connection fails twice with `windows sandbox failed: helper_unknown_error: apply deny-read ACLs`.

## Focused Comparison Evidence

- Campus wide asset: 2172 × 724; both models remain on the right and the left campus walkway stays free of people and text.
- Campus mobile asset: 1122 × 1402; both T-shirts remain prominent and the upper-left copy area is clear.
- Padel wide asset: 2172 × 724; both players, rackets, ball, tracksuits, and shoes remain visible with dark negative space on the left.
- Padel mobile asset: 1122 × 1402; both players and all essential sports equipment remain inside the portrait frame.
- Server-rendered evidence confirms exactly three campaign dot buttons, a current-slide state, no pagination background, and no previous, next, pause, or play controls.
- Focused browser-rendered typography, crop, and dot appearance checks remain blocked without an implementation screenshot.

## Findings

- [P2] Browser-rendered responsive clearance and dot appearance are not certified.
  - Location: all three hero slides and the bottom-center pagination at laptop and mobile breakpoints.
  - Evidence: source and generated assets were visibly reviewed, but the local page could not be captured through the required in-app browser.
  - Impact: a browser-specific crop or text collision could remain despite the correct art-directed image ratios.
  - Fix required: capture each slide at 1918 × 828 and 390 × 844, then compare those renders against the matching source and generated assets.

## Required Fidelity Surfaces

- Fonts and typography: the approved Libre Bodoni display type, uppercase eyebrow, and underlined CTA system are shared by all slides; page-level visual verification is blocked.
- Spacing and layout rhythm: the approved full-viewport hero frame and overlay positions are shared by all slides; page-level verification is blocked.
- Colors and visual tokens: Polo and Campus use the approved navy editorial copy; Padel uses white copy for contrast on the dark court.
- Image quality and asset fidelity: supplied HD sources plus purpose-built 2172 × 724 laptop and 1122 × 1402 mobile raster assets are present for both new campaigns.
- Copy and content: Campus uses “THE CAMPUS EDIT,” “Campus Essentials,” and “SHOP T-SHIRTS”; Padel uses “THE ACTIVE COLLECTION,” “Play in Motion,” and “SHOP ACTIVEWEAR.”

## Interaction And Automated Verification

- Crossfade timing: 6000 ms between slides with an 800 ms opacity transition.
- Manual controls: three direct slide selectors with the active dot exposed through `aria-current`.
- Accessibility behavior: carousel and slide labels, current-slide state, keyboard-focus pausing, hover pausing, and reduced-motion handling.
- Primary interactions tested in browser: blocked by the in-app browser connection.
- Browser console checked: blocked by the in-app browser connection.
- HTTP health: local page responds with status 200 and includes all three campaigns.
- Automated tests: 5 passed, 0 failed.
- ESLint: passed.
- Next.js production build: passed.

## Comparison History

- Iteration 1: measured both supplied landscape images at approximately 2.17:1 and identified that CSS-only cropping would not safely cover 3:1 laptops and 4:5 phones.
- Iteration 2: generated and reviewed four art-directed responsive assets with explicit copy-safe zones and complete subject framing.
- Iteration 3: added the accessible three-slide crossfade carousel and verified its server-rendered behavior, asset selection, lint, type checking, and production build.
- Iteration 4: removed the background pill, arrows, divider, and playback control; replaced them with three bare dots using an 8 px solid active dot and 6 px translucent inactive dots.
- Post-fix browser-rendered evidence remains blocked by the Windows sandbox ACL failure.

## Implementation Checklist

- Capture all three slides at 1918 × 828.
- Capture all three slides at 390 × 844.
- Test previous, next, dots, pause/play, hover/focus pause, and automatic advance.
- Check the browser console and repeat the combined source-to-render comparison.

## Everyday Standard Collection Addition

### Comparison Target

- Source visual truth:
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-a0f60286-1cbc-422d-8c33-1e2bdf393fee.png` (T-Shirts)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-0f7ee619-4020-460e-888a-5dead9b6328c.png` (Polos)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-e4bf5746-0ec4-4e10-894b-742efd540b01.png` (Women)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-8f76ee09-eadd-4951-b4a8-67d1f104fb96.png` (Hoodies)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-1b6613e4-f867-4c90-9451-846e1300dca4.png` (Knitwear)
  - `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-d61b62a7-0d27-495f-b8c6-8ce9b06a76e5.png` (Sweatshirts)
- Implementation screenshots:
  - `C:/Users/lenovo/Desktop/Nextjs/motion/qa-everyday-desktop.png`
  - `C:/Users/lenovo/Desktop/Nextjs/motion/qa-everyday-mobile.png`
- Source pixels: 1086 × 1448, 1086 × 1448, 1476 × 1065, 1448 × 1086, 1023 × 1537, and 1122 × 1402.
- Implementation pixels and CSS viewports: 1920 × 1200 desktop and 390 × 844 mobile, both captured at device scale 1 with no density normalization needed.
- State: `#everyday-standard` section aligned to the top of each viewport.

### Full-View And Focused Comparison Evidence

- The implementation uses the six supplied assets directly and presents them in a uniform 3:4 editorial card system.
- Desktop uses six equal grid columns in one row. Mobile retains the 3:4 crop in one horizontally scrollable, snap-aligned row instead of compressing all six products.
- The heading uses the same Anton family and condensed weight as the navbar wordmark. The tagline uses the existing Libre Bodoni editorial display family.
- A same-input visual comparison could not be completed: Chrome produced both implementation screenshots successfully, but the Codex image inspection surface failed to open either capture because the Windows sandbox could not apply its read ACLs.
- Focused crop, text contrast, and inter-card alignment therefore remain visually uncertified.

### Findings

- [P2] Final visual crop and label contrast are not certified.
  - Location: `components/EverydayStandard.tsx`, all six category cards.
  - Evidence: exact source images are present and browser captures exist at both target viewports, but the capture viewer is blocked by `windows sandbox failed: helper_unknown_error: apply deny-read ACLs`.
  - Impact: a focal point or text-label contrast issue could remain even though the responsive structure is correct.
  - Fix required: open the two implementation captures with the six source images in one comparison surface, then adjust per-card `object-position` values if any garment is cropped poorly.

### Required Fidelity Surfaces

- Fonts and typography: Anton matches the navbar wordmark; Libre Bodoni continues the approved editorial hierarchy; browser-rendered optical comparison is blocked.
- Spacing and layout rhythm: six equal 3:4 desktop tracks and one mobile snap row are encoded and server-rendered; visual rhythm comparison is blocked.
- Colors and visual tokens: the section uses the requested dark forest green `#0d2f26` with white copy.
- Image quality and asset fidelity: all six original supplied PNGs are used through `next/image` with proportional `object-cover`; no placeholder or recreated art is present.
- Copy and content: `MOTION`, `The Everyday Standard`, and the six one-word category labels are present.

### Comparison History

- Iteration 1: standardized the mixed portrait and landscape sources into equal 3:4 product cards, preserving subject-specific focal points.
- Iteration 2: added a six-column desktop grid and a horizontal snap row for smaller screens, then captured 1920 × 1200 and 390 × 844 renders.
- Post-fix visual comparison remains blocked by the Windows sandbox image-viewer failure.

final result: blocked
