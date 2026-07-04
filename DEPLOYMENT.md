# GitHub Pages Deployment Instructions

1. Download and unzip the final package.
2. Open the repository currently connected to `sentinelhousepress.com`.
3. Replace the existing root files with the **contents** of this folder. Do not upload the enclosing folder as a subfolder.
4. Confirm the repository root directly contains `index.html`, `assets/`, `studio/`, `CNAME`, `sitemap.xml`, and `robots.txt`.
5. Commit all additions, replacements, and deletions.
6. In **Settings > Pages**, confirm the source is the correct branch and `/ (root)` folder.
7. In **Actions**, wait for the latest Pages deployment to show a green checkmark.
8. Test `https://sentinelhousepress.com/?v=16` and `https://sentinelhousepress.com/studio/?v=16`.
9. Hard refresh with Command + Shift + R, then test in a private window.

## Custom-domain notes

- Keep the included `CNAME` file in the repository root.
- Do not recreate DNS records unless the custom domain stops resolving.
- Confirm **Enforce HTTPS** remains enabled in GitHub Pages.
- The Google tag is already included and uses measurement ID `G-NK69SKV7C1`.
