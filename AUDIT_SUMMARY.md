# Sentinel House Press V22 Audit and Mobile Repair

## Status

The mobile layout has been repaired across the full 34-page site. The work preserves the existing literary visual system while making the content readable, navigable, and conversion-ready on narrow screens.

## Root causes found

1. Several generations of responsive CSS were competing with one another.
2. Higher-specificity desktop grid rules continued to control layouts below the mobile breakpoint.
3. The decorative press spine disappeared on smaller screens, but its reserved body spacing remained.
4. The navigation JavaScript switched to desktop behavior at 901 pixels while the visual navigation remained mobile through 1240 pixels.
5. Several special layouts, including the house divisions, author-fit ledger, process handoff, homepage system case study, and service grids, had no authoritative narrow-screen layout.
6. Rotated decorative elements could extend beyond their containers and visually clip content.

## Repairs completed

- Added one authoritative responsive layer for 1240, 900, 640, 390, and 360 pixel breakpoints.
- Removed obsolete left-side spacing when the decorative press spine is hidden.
- Converted critical desktop grids into readable single-column mobile layouts.
- Rebuilt mobile hero spacing, typography, buttons, service cards, trust panels, ledgers, process rows, case-study sections, and Studio layouts.
- Preserved the homepage book cover at its correct proportions and removed mobile-only manuscript decorations that were crowding it.
- Stacked the Press and Studio division panels on mobile.
- Stacked the strong-fit and poor-fit author panels on mobile.
- Contained the contact-page pencil, process handoff layers, and other decorative elements.
- Added a narrow-phone safeguard for the process documentation label.
- Aligned the navigation JavaScript breakpoint with the actual CSS breakpoint.
- Added click-outside and backdrop closing for the mobile menu while preserving Escape-key and focus behavior.
- Updated all HTML cache versions from V21 to V22 so browsers request the repaired CSS and JavaScript.

## Automated validation completed

- 34 of 34 HTML pages rendered at 320 pixels with no horizontal page overflow or clipped content.
- 34 of 34 HTML pages rendered at 390 pixels with no horizontal page overflow or clipped content.
- Representative Press, Studio, service, process, contact, case-study, guidance, and error pages were checked at 768 and 1440 pixels.
- No broken internal links.
- No missing local assets.
- No duplicate IDs.
- No images missing alternative text.
- Every page has one H1 and a viewport declaration.
- All form-style controls have accessible labels.
- CSS parsing completed with zero syntax errors.
- JavaScript syntax validation passed.
- All 34 pages ran with zero browser JavaScript errors in the test environment.
- Mobile navigation open, Escape close, and click-outside close behavior passed on Press and Studio templates.

## Files changed

- `assets/css/final.css`
- `assets/js/main.js`
- All 34 HTML pages, cache version only
- `AUDIT_SUMMARY.md`
- `V22_FIXES.md`

## Deployment

Replace the current repository contents with this package, commit the changes, and publish through the existing GitHub Pages workflow. After deployment, perform a hard refresh so the V22 assets load.

## Remaining live checks

The code package has been browser-rendered and source-validated locally. Live Core Web Vitals, third-party font loading, analytics delivery, and behavior on physical iPhone and Android hardware should be checked after deployment because those depend on the live hosting and network environment.
