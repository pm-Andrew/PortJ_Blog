// // This is an example of an RSS feed for your blog. You can customize this to fit your needs.
// import { getCollection } from 'astro:content';

// export async function GET(context) {
//     const posts = await getCollection("blog");
//     return rss({
//         title: 'Astro Learner | Example Blog',
//         description: 'My journey learning Astro ',
//         site: context.site,
//         items: posts.map((post) => ({
//             title: post.data.title,
//             pubDate: post.data.pubDate,
//             description: post.data.description,
//             link: `/posts/${post.id}/`,
//         })),
//         customData: `<language>en-us</language>`,
//     });
// }