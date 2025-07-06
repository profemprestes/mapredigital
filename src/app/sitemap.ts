import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/actions/posts.actions';
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mapredigital.netlify.app/';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['/', '/servicios', '/nosotros', '/contacto', '/noticias'].map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified: new Date().toISOString(),
    priority: route === '/' ? 1 : 0.8,
  }));

  const posts = await getAllPosts();
  const postRoutes = posts
    .filter(post => post.published)
    .map(post => ({
      url: `${siteUrl}noticias/${post.slug}`,
      lastModified: post.updatedAt.toISOString(),
      priority: 0.7
  }));

  return [...staticRoutes, ...postRoutes];
}
