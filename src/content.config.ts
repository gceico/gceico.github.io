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
    }),
});

const portfolios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolios' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      order: z.number().int(),
      hero: image(),
      heroAlt: z.string(),
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
