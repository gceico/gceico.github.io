import rss from '@astrojs/rss';
import { site as siteData } from '../data/site';
import { getSortedPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getSortedPosts();

  return rss({
    title: `${siteData.title}, ${siteData.author.fullName}`,
    description: siteData.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en</language>`,
  });
}
