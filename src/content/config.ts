import { z, defineCollection } from "astro:content";

const episodeSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    episode: z.number().optional(),
    season: z.number().optional(),
    episodeType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
    description: z.string().optional(),
});

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      cover: z.string().optional(),
      smlImage: z.string().optional(),
    })
});

export type episodeSchema = z.infer<typeof episodeSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });

export const collections = {
    'episode': episodeCollection,
    'posts': postsCollection,
}