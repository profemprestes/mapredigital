import { getLatestPosts } from '@/lib/actions/posts.actions';
import { PostCard } from '@/components/noticias/PostCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function NewsSection() {
  let latestPosts: any[] = [];
  try {
    latestPosts = await getLatestPosts(3);
  } catch (error) {
    console.warn('Could not fetch latest posts for news section. Skipping section.', error);
  }

  if (!latestPosts || latestPosts.length === 0) {
    return null; // Don't render the section if there are no posts or if DB failed
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Últimas Noticias</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mantente al día con nuestras últimas publicaciones, consejos y análisis del sector.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="/noticias">
                Ver Todas las Noticias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/noticias">
                Ver Todas las Noticias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
