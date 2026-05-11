# Zheng Fang Personal Homepage

This repository contains the static source for Zheng Fang's personal academic
homepage at:

https://zhengfangwhu.github.io/

The site is intentionally build-free. GitHub Pages can serve it directly from
the repository root.

## Contents

- `index.html` - page shell, SEO metadata, and section anchors
- `data.js` - profile, research, publication, and contact data
- `render.js` - client-side rendering for the data file
- `styles.css` - responsive styling with light and dark modes
- `sitemap.xml` - search-engine sitemap

## Update Publications

The publication list was created from the Google Scholar profile:

https://scholar.google.com/citations?user=b_O92vsAAAAJ

To update the page, edit the publication entries in `data.js` and refresh the
`lastmod` value in `sitemap.xml` if the public page content changes.

## Publish With GitHub Pages

Create a public GitHub repository named `zhengfangwhu.github.io` under the
`zhengfangwhu` account, then push this repository's `main` branch.

GitHub Pages will publish the site from the root of the default branch.
