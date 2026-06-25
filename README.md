# Juliano Dawid Barboza Portfolio

React + TypeScript portfolio for GitHub Pages, localized in English, Spanish, and Portuguese.

## Development

```bash
npm install
npm run dev
```

## Content

Projects are defined in `src/content/projects.ts`. Localized copy lives in `src/locales/`.
Future PDFs, circuit files, photos, and validation notes should go under `public/projects/<slug>/` and be linked from the matching project data.

## Deployment

The GitHub Actions workflow builds and deploys `dist/` to GitHub Pages on pushes to `main`.
Dependabot is configured for weekly npm and GitHub Actions updates.
