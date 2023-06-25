import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
	// Type-check frontmatter using a schema
	type: "content",
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
		relatedPosts: z.array(reference('blog')).optional(),
	}),
});

export const collections = { posts };
