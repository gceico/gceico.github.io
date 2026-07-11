# gceico.me

Personal site of Gabriel Ceicoschi, blog, portfolio, and CV. Built with [Astro](https://astro.build), all content lives as local markdown in this repo (no external CMS).

## Commands

```sh
npm install      # install dependencies
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Content

Everything is a markdown file with frontmatter, edit, commit, done.

| What | Where | Frontmatter |
|---|---|---|
| Blog posts | `src/content/posts/*.md` | `title`, `description`, `date`, `hero`, `heroAlt` |
| Portfolio items | `src/content/portfolios/*.md` | `title`, `date`, `order`, `hero`, `heroAlt` |
| CV entries | `src/content/experiences/*.md` | `category` (education/experience/skills/tools), `company`, `position`, `period`, `address`, `order` |
| Site settings & bio | `src/data/site.ts` |, |

Images go in `src/assets/` (referenced from frontmatter, optimized at build) or `public/` (served as-is).

**Add a blog post:** create `src/content/posts/my-post.md`, the filename becomes the URL slug (`/posts/my-post/`). It appears automatically in the posts list, home preview, RSS feed, and sitemap.

**Add a portfolio/CV item:** create the file with an `order` value; lists render in ascending `order`.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `master`. The custom domain is set via `public/CNAME`.

## SEO

`src/layouts/BaseLayout.astro` owns all meta tags, Open Graph, canonical URLs, and JSON-LD structured data. The build also emits `sitemap-index.xml`, `rss.xml`, and `public/llms.txt` is served for AI crawlers.
