// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    emoji: z.string().optional(),
    excerpt: z.string(),
    image: image().optional(),
    imageCaption: z.string().optional(), // Legenda da imagem
    imageCredit: z.string().optional(),  // Crédito/fotógrafo
  }),
});

export const collections = { blog };