import { defineCollection, z } from "astro:content";



const BlogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),    
    draft: z.boolean().optional(),
    slug: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: BlogCollection,
};
