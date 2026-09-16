# peterphanouv.ong

Personal site built with [Astro](https://astro.build). Cream paper, Chicago FLF headings, and a scroll-driven philosophy footer where the app screenshots clear the runway to reveal the quote.

## Updating content

All copy and links live in `src/data/` — you shouldn't need to touch any component to update the site.

### Projects (`src/data/projects.json`)

```json
{
  "title": "Voice Stat Capture",
  "description": "One sentence about what it does.",
  "url": "https://example.com",
  "tags": ["ai", "desktop"],
  "image": "/projects/voice-stat-capture.png"
}
```

- Drop the screenshot (PNG, JPG, or GIF — GIFs animate) into `public/projects/` and reference it as `/projects/<filename>`.
- **Videos work too**: point `image` at an `.mp4`, `.webm`, or `.mov` file and the card renders an auto-playing, muted, looping video instead. Optionally add a `"poster": "/projects/<still>.png"` field — it shows while the video loads.
- The current `.svg` images are placeholders — replace them with real screenshots.
- Project images are also reused as the tiles in the philosophy footer animation. Video projects show a still there (the poster if set, otherwise the video's first frame) so the scroll animation stays smooth.

### Blog posts (`src/data/posts.json`)

```json
{ "title": "Can you steal taste?", "url": "https://..." }
```

### Everything else (`src/data/site.json`)

Name, headline, intro paragraphs (plain HTML allowed for links), section headings, email/contact links, and the philosophy quote + background photo (`public/philosophy.jpg`).

## Fonts

Self-hosted in `public/fonts/`:

- **Chicago FLF** (headings) — public domain, by Robin Casady
- **Open Sauce One** (body) — SIL OFL, by [Creative Sauce](https://github.com/marcologous/Open-Sauce-Fonts)

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally before deploying  |
