// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            author: z.string(),
            description: z.string(),
            img: z.object({
                url: z.string().url(),
                alt: z.string(),
            }).optional(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            tags: z.array(z.string()).optional(),
        }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };