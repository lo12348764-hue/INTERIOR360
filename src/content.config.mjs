import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    author: z.string().default("INTERIOR.360"),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
