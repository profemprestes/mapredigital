import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/actions/posts.actions';
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mapredigital.netlify.app/';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['/', '/servicios', '/nosotros', '/contacto', '/noticias'].map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified: new Date().toISOString(),
    priority: route === '/' ? 1 : 0.8,
  }));

  let postRoutes: any[] = [];
  try {
    // Attempt to fetch posts from the database during build, but don't crash if DB is not available (e.g., in CI)
    const posts = await getAllPosts();
    postRoutes = posts
      .filter(post => post.published)
      .map(post => ({
        url: `${siteUrl}noticias/${post.slug}`,
        lastModified: post.updatedAt.toISOString(),
        priority: 0.7
    }));
  } catch (error) {
    console.warn('Could not fetch posts for sitemap. Using static routes only.', error);
  }

  return [...staticRoutes, ...postRoutes];
}
