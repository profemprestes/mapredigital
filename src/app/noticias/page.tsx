import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import { Newspaper } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { getPublishedPosts } from '@/lib/actions/posts.actions';
import { PostList } from '@/components/noticias/PostList';

const ParticlesBackground = nextDynamic(() => 
  import('@/components/page/particles-background').then(mod => mod.ParticlesBackground)
);

export const metadata: Metadata = {
  title: 'Noticias - Novedades y Artículos',
  description: 'Mantente al día con las últimas noticias, artículos y análisis del mundo digital de la mano de Mapre Digital.',
  keywords: ['blog mapre digital', 'noticias de tecnología', 'marketing digital', 'seo', 'novedades'],
  openGraph: {
    url: '/noticias',
  }
};

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export default async function NoticiasPage() {
  let posts: any[] = [];
  try {
    const rawPosts = await getPublishedPosts();
    posts = rawPosts.map(p => ({ ...p, _count: (p as any)._count || { comments: 0 } }));
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }

  return (
    <>
      <PageHero
        title="Nuestro Blog"
        subtitle="Explora nuestros últimos artículos, noticias y análisis sobre el mundo digital."
        icon={Newspaper}
      >
        <div className="absolute inset-0 -z-10 opacity-30">
          <ParticlesBackground />
        </div>
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="container">
          {posts.length > 0 ? (
            <PostList posts={posts} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold">No hay noticias todavía</h2>
              <p className="text-muted-foreground mt-4">Vuelve pronto para ver nuestros últimos artículos.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
