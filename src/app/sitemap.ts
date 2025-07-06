import { MetadataRoute } from 'next'
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mapredigital.netlify.app/';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/servicios', '/nosotros', '/contacto'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
