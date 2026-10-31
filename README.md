# Top Notch Quotes

A lightweight, mobile-friendly book-quote discovery app designed for Farcaster and Base App. It presents a quote with its author and book, with controls to discover another quote, favorite it, copy/share it, and create a shareable quote image.

**Live app:** https://top-notch-quotes-base-app-farcaster.vercel.app  
**Stack:** HTML, CSS, vanilla JavaScript, and `serve` for local development.

## Features

- Discover a book quote from the app's quote collection.
- View the quote's author and book information.
- Mark quotes as favorites.
- Copy/share a quote and generate an image for sharing.
- Mobile-friendly interface and Farcaster/Base App metadata.
- Farcaster mini-app manifest at `.well-known/farcaster.json`.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

The `dev` script serves the static app from the repository root. There is no build step defined in the current `package.json`.

## Project structure

- `index.html` — page structure and app metadata.
- `style.css` — visual styles and responsive layout.
- `game.js` — quote selection and interactive behavior.
- `icon.png`, `preview.png` — app icon and preview image.
- `.well-known/farcaster.json` — Farcaster mini-app manifest and domain association.

## Deployment

The page metadata and manifest currently point to the Vercel deployment above. If deploying to a different domain, update the URLs in `index.html` and `.well-known/farcaster.json`, and verify the Farcaster domain association for that domain.

## Development notes

- Test the quote, favorite, copy/image, and share controls on both desktop and mobile.
- Verify the deployed app URL and manifest after any domain or metadata changes.
- No automated test or lint command is currently defined in `package.json`.

## License

No license file was found during this documentation pass. Check the project's intended license before reusing or redistributing its code.
