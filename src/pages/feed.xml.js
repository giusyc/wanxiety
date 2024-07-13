import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('careerPaths');
  return rss({
    title: 'Bye Wanxiety',
    description: 'A platform to help with work anxiety and to change career at any age!',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      author:post.data.author,
      description: post.data.description,
      link: `/careerPaths/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://brutal.elian.codes',
  });
}
