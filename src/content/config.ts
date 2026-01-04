import { defineCollection, z } from "astro:content";

const BlogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const PortafolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: BlogCollection,
  portafolio: PortafolioCollection,
};
