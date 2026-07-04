# Final QA Checklists

## Responsive-design QA

- [x] Mobile-first stabilization CSS loaded after the core design system
- [x] Fluid heading sizes use clamp()
- [x] Containers use flexible maximum widths
- [x] Grid layouts stack below 768px
- [x] Service cards remain legible without hover
- [x] Stable media frames prevent image distortion
- [x] Horizontal overflow is clipped at the document level
- [x] Large screens retain controlled reading widths
- [ ] Complete live-browser visual review after deployment

## Mobile QA

- [x] Menu uses 100dvh and independent vertical scrolling
- [x] Mobile menu supports momentum scrolling and overscroll containment
- [x] Close control remains above the menu layer
- [x] Press and Studio switcher remains visible
- [x] Buttons meet a minimum 48px touch target
- [x] Body text uses comfortable line height
- [x] Multi-column layouts stack intentionally
- [x] Sticky mobile CTA accounts for safe-area insets
- [x] Reduced-motion behavior is preserved
- [ ] Verify on physical iPhone and Android devices

## SEO QA

- [x] Page-specific titles and descriptions preserved
- [x] Canonical URLs preserved
- [x] Open Graph and Twitter metadata preserved
- [x] Organization, Service, Book, Article, and Breadcrumb schema preserved where present
- [x] Sitemap and robots.txt preserved
- [x] New image filenames are descriptive
- [x] New image alt text is descriptive
- [x] Relative paths remain GitHub Pages compatible
- [ ] Submit sitemap and inspect live coverage in Google Search Console after deployment

## Accessibility QA

- [x] One H1 on every page
- [x] Skip links preserved
- [x] Keyboard-operable navigation preserved
- [x] Escape-to-close behavior preserved
- [x] Visible focus treatment strengthened
- [x] Image alt text present
- [x] Buttons and links retain semantic elements
- [x] Reduced-motion support strengthened
- [x] No forms remain to create inaccessible validation states
- [ ] Screen-reader spot check after deployment

## Performance QA

- [x] New Victorian images converted to responsive WebP
- [x] 640, 1200, and 1448 pixel variants generated
- [x] Width and height attributes added to prevent layout shift
- [x] Below-the-fold images use lazy loading
- [x] JavaScript remains framework-free
- [x] Nonessential preview-form code removed
- [x] Analytics remains async
- [ ] Measure live Core Web Vitals after deployment
