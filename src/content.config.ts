import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      hero: image(),
      heroAlt: z.string(),
      // Original publication URL for republished/syndicated posts. When set, the
      // page emits <link rel="canonical"> pointing here instead of at itself, so
      // search engines credit the original (LinkedIn, aibl.to) and don't treat
      // this copy as duplicate content.
      canonical: z.string().url().optional(),
    }),
});

const portfolios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolios' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      order: z.number().int(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
    }),
});

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    category: z.enum(['education', 'experience', 'skills', 'tools']),
    company: z.string().optional().default(''),
    position: z.string().optional().default(''),
    period: z.string().optional().default(''),
    address: z.string().optional().default(''),
    order: z.number().int(),
  }),
});

export const collections = { posts, portfolios, experiences };
