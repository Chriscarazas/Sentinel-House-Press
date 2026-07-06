# V22 Mobile Stabilization

V22 consolidates mobile behavior after multiple earlier responsive layers began overriding one another.

## Primary technical changes

- Mobile navigation breakpoint changed from 901px to 1241px.
- Mobile menu now closes from the backdrop, an outside click, a navigation selection, or the Escape key.
- The hidden desktop press spine no longer leaves a 14px body offset.
- Desktop-only grid declarations are overridden with selectors strong enough to win at mobile widths.
- Mobile content widths use `minmax(0, 1fr)` to prevent grid children from forcing overflow.
- Hero typography and section headings now scale within the viewport.
- Homepage book imagery becomes a stable, centered cover on phones.
- Two-column ledgers and division panels stack below 900px.
- Decorative rotated elements are contained where they could interfere with content.
- Extra safeguards cover 320px devices and long labels.

## Cache update

All HTML pages now request CSS and JavaScript with `?v=22`.
