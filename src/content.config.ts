// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod from its new location (astro:content re-export is deprecated in Astro 7)
import { z } from "astro/zod";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            description: z.string(),
            image: z
                .object({
                    src: image(),
                    alt: z.string(),
                })
                .optional(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };