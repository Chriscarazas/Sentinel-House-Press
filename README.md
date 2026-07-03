# Sentinel House V14

A static, responsive website for `sentinelhousepress.com`, prepared for GitHub Pages.

## Brand architecture

Sentinel House is the master organization with two divisions:

- **Sentinel House Press** for authors, manuscripts, books, publishing, and author platforms
- **Sentinel House Studio** for mission-driven organizations, reports, websites, content systems, and public communication

## V14 improvements

### Clearer conversion paths

- Press now distinguishes a **free project inquiry** from a **paid manuscript assessment**.
- Studio distinguishes a **free project brief** from a **paid, defined engagement**.
- Both paths explain submission, fit review, response expectations, scope, and next steps.
- Capacity language remains visible: Sentinel House accepts a limited number of major engagements at one time.
- No prices were invented. Starting prices should be added only after package economics and delivery hours are finalized.

### Stronger proof

- The Press case study now separates the challenge, decisions, deliverables, and outcomes.
- The Studio demonstration archive contains three clearly labeled composite demonstrations:
  - The Stronger Report
  - Website Clarity Sprint
  - One Source, Many Stories
- Demonstrations are explicitly described as composites, not fictional clients.

### Deeper Studio pages

The three flagship Studio pages now include:

- Audience and problem
- Core deliverables
- Typical timeline
- Client responsibilities
- Exclusions
- Investment approach
- Clear next action

### SEO structure

- One master `Organization` entity identifies **Sentinel House**.
- Press and Studio are represented as divisions under the same organization.
- Existing titles, descriptions, canonical URLs, social metadata, breadcrumbs, service schema, article schema, and sitemap remain in place.
- Sitemap dates were updated for this release.

### Responsive rebuild

The previous single stylesheet was replaced with six role-based files:

- `tokens.css`
- `base.css`
- `layout.css`
- `components.css`
- `press.css`
- `studio.css`

The system now uses four primary responsive thresholds: 1199px, 900px, 640px, and 380px.

Key protections include:

- Visible Press and Studio switcher on mobile
- Grid-based layouts that stack intentionally
- Stable media wrappers
- Complete book covers locked to their 3:5 ratio
- Report visuals simplified on mobile
- Decorative transforms removed from critical mobile content
- Full-screen accessible navigation with focus trapping and Escape-to-close
- Reduced-motion support
- 17px minimum mobile reading text
- 54px mobile action buttons

### Image delivery

- Unused duplicate image assets were removed.
- The image directory was reduced from roughly 11 MB to roughly 3 MB before adding responsive cover variants.
- The founding-book cover now includes responsive WebP delivery.
- Plymouth engravings retain responsive `srcset` files and explicit dimensions.

## Forms

Both forms currently validate and display a local preview confirmation. They do not send data.

Before launch, connect:

- `contact.html` to a secure Press inquiry endpoint
- `studio/project-assessment.html` to a separate secure Studio endpoint

Do not use one universal form. The two audiences require different intake questions and workflows.

## Before launch

1. Add a verified branded email address.
2. Connect both forms to secure endpoints.
3. Finalize package prices and add starting investment ranges.
4. Review privacy, accessibility, terms, service agreements, and client contracts with qualified professionals.
5. Add analytics and Search Console verification.
6. Test Safari, Chrome, Firefox, iPhone, iPad, Android, and browser zoom at 200 percent.
7. Test at 320, 375, 390, 430, 768, 1024, 1280, and 1600 pixels.
8. Submit `sitemap.xml` after deployment.

## Deployment

Upload the contents of this folder to the root of the GitHub repository. The included `CNAME` contains `sentinelhousepress.com`.

## Google Analytics

Google tag ID `G-NK69SKV7C1` is installed in the `<head>` of every HTML page, including all Sentinel House Studio pages.


## Contact links

Press inquiries open a message to authors@sentinelhousepress.com. Studio inquiries open a message to studio@sentinelhousepress.com. No form backend is required.
