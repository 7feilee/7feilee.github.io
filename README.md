# 7feilee.github.io — static site

This is the fully static version of the personal site (no Astro, no build step).
Every file here is plain HTML/CSS/JS that runs as-is in a browser.

## Structure

```
index.html                                   →  /
about.html  tools.html  contact.html         →  /about.html  etc.
blog/index.html                              →  /blog/
blog/eu-ai-act-art10-chinese-companies/      →  /blog/eu-ai-act-art10-chinese-companies/
blog/hd-wallet-best-practices/               →  /blog/hd-wallet-best-practices/
ai-act-risk/index.html                       →  /ai-act-risk/      (EU AI Act classifier)
hd-keygen/index.html                         →  /hd-keygen/        (HD wallet generator)
site.css   site.js   favicon.svg             →  shared assets
404.html
```

Links are relative, so the folder works the same locally (open index.html) and on GitHub Pages.

## Deploy to GitHub Pages (no build)

You are replacing the Astro build pipeline with direct static hosting.

1. **Back up the old repo** (or work on a branch) — the Astro source (`src/`,
   `astro.config.mjs`, `package.json`) and the Actions workflow are about to go.
2. **Put these files at the repo root.** Copy everything inside this `site/`
   folder into the root of the `7feilee.github.io` repository, replacing the
   old project. (Keep `.git/` and `CNAME` if you have a custom domain.)
3. **Remove the Astro build workflow** so it stops trying to run `astro build`:
   delete `.github/workflows/deploy.yml`. (You may also delete `src/`,
   `public/`, `astro.config.mjs`, `package.json`, `tsconfig.json`,
   `node_modules/` — none are needed anymore.)
4. **Switch Pages to branch deploy:** repo **Settings → Pages → Build and
   deployment → Source = "Deploy from a branch"**, Branch = `master`, Folder = `/ (root)`.
5. **Commit & push** to `master`. Pages publishes in ~1 minute at
   https://7feilee.github.io.

### URLs preserved
`/`, `/blog/`, `/blog/<slug>/`, `/ai-act-risk/`, `/hd-keygen/` all keep working.
The only change: the standalone pages are now `/about.html`, `/tools.html`,
`/contact.html` (previously `/about`, `/tools`, `/contact`). If you want those
exact extension-less URLs back, rename each to a folder — e.g.
`about.html` → `about/index.html` — and update the matching nav links.

### What you lose by dropping Astro
- The markdown-driven blog (posts are now hand-maintained HTML in `blog/<slug>/`).
- Auto-generated `rss.xml` and `sitemap-index.xml`. Add static versions if you
  want them, or regenerate the two files by hand.
