# Eizel Jimenez — Portfolio

A single-page portfolio built with **React + Vite**. Hand-built components, plain CSS,
no UI framework — it loads fast and scores high on Lighthouse, which is part of the point.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

## Build for production

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build locally
```

## Deploy (free options)

The build output in `/dist` is plain static files — host it anywhere:

- **Vercel** — import the repo at vercel.com, framework preset "Vite", deploy. Auto-deploys on every push.
- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.
- **Netlify** — drag the `dist` folder onto app.netlify.com/drop, or connect the repo (build `npm run build`, publish `dist`).
- **GitHub Pages** — push `/dist` to a `gh-pages` branch (or use an action).

## Structure

```
src/
  data.js              # all page content (edit copy here)
  index.css            # design tokens + styles
  App.jsx              # composes the sections
  components/
    common.jsx         # Reveal (scroll animation), Nav, Footer
    Hero.jsx           # hero + live status panel
    About.jsx          # intro + story
    BuildRun.jsx       # "Build & Run" two-column
    Work.jsx           # selected work
    Toolkit.jsx        # tech stack
    Approach.jsx       # how I work
    Contact.jsx        # contact / CTA
```

To update wording, edit `src/data.js`. To change colors or type, edit the `:root`
variables at the top of `src/index.css`.

## Edit before publishing

- Confirm the email and LinkedIn in `src/data.js` (`profile`).
- Add a headshot/photo if you want (drop it in `public/` and reference it).
- Swap or expand the work descriptions to taste.
