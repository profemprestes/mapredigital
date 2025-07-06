import type { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function PostCard({ post }: { post: Post & { _count: { comments: number } } }) {
  const excerpt = post.content.substring(0, 150) + (post.content.length > 150 ? '...' : '');

  // Estimate reading time (200 words per minute)
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  const commentCount = post._count.comments;

  return (
    <Card className="h-full flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border bg-card">
      <Link href={`/noticias/${post.slug}`} className="block group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={`Imagen destacada para ${post.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link href={`/noticias/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground pt-2">
          <span>{format(new Date(post.createdAt), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
          <div className="flex items-center gap-1.5" title={`${readingTime} minuto${readingTime === 1 ? '' : 's'} de lectura`}>
            <Clock className="h-4 w-4" />
            <span>{readingTime} min</span>
          </div>
          <div className="flex items-center gap-1.5" title={`${commentCount} comentario${commentCount === 1 ? '' : 's'}`}>
            <MessageSquare className="h-4 w-4" />
            <span>{commentCount}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/noticias/${post.slug}`}>
            Leer Más <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
