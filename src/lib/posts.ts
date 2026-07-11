import { getCollection, type CollectionEntry } from 'astro:content';

/** Canonical post order for the whole site (lists, prev/next nav, RSS): date DESC. */
export async function getSortedPosts(): Promise<CollectionEntry<'posts'>[]> {
  return (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

// Frontmatter dates parse as UTC midnight, format in UTC so the calendar day
// never shifts with the build machine's timezone.

/** "06 August, 2020", the original "DD MMMM, YYYY" list format. */
export function formatDateList(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(date)
    .replace(/ (\d{4})$/, ', $1');
}

/** "August 06, 2020", the original "MMMM DD, YYYY" post-page format. */
export function formatDatePost(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
