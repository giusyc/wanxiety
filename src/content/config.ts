import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      podcastLink: z.string(),
      draft: z.boolean().optional().default(false),
    }),
});

const careersCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      link: z.string(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
  careers: careersCollection,
};
