# 7feilee.github.io — static site

Personal site of Qifei Li, typeset like a paper. Plain HTML/CSS — the main pages
carry **no JavaScript, no analytics, no cookies, and make zero third-party
requests** (system fonts only). No build step: every file runs as-is in a
browser and on GitHub Pages.

## Structure

```
index.html                                   →  /                  (one-page CV, "the paper")
about.html  writing.html  tools.html
contact.html  404.html                       →  /about.html  etc.
blog/index.html                              →  /blog/             (notes)
blog/eu-ai-act-art10-chinese-companies/      →  note
blog/hd-wallet-best-practices/               →  note
ai-act-risk/index.html                       →  /ai-act-risk/      (EU AI Act classifier, self-contained app)
hd-keygen/index.html                         →  /hd-keygen/        (HD wallet generator, self-contained app)
paper.css                                    →  design system for all pages above
site.css  site.js                            →  legacy assets kept for hd-keygen
favicon.svg  robots.txt  sitemap.xml
```

## Design

A journal-article aesthetic: title block, abstract, numbered sections,
booktabs-style tables, citation-format publications, colophon. Serif via the
system font stack (Charter / Iowan / Cambria / Georgia); monospace for labels.
One accent color. Links are underlined. Nothing animates.

The two tools keep their own inlined styles and JavaScript by necessity — both
run entirely client-side and work offline.

## Writing

Long-form wikis live in their own repositories and are indexed on
[/writing.html](https://7feilee.github.io/writing.html).
