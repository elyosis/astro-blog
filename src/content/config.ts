import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	// Type-check frontmatter using a schema
	type: "content",
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		summary: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string().optional(),
		heroImageAltText: z.string().optional(),
		tags: z.array(z.string()),
		url: z.string().optional()
	}),
});

export const collections = { posts };
