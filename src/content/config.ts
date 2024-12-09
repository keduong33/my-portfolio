import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const workExperience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    url: z.string().url().optional(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.coerce.date(),
    demoUrl: z.string().optional(),
    repoSlug: z.string().optional(),
  }),
});

export const collections = {
  blogs,
  "work-experience": workExperience,
  projects,
};
