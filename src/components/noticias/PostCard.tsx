import type { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function PostCard({ post }: { post: Post }) {
  const excerpt = post.content.substring(0, 150) + (post.content.length > 150 ? '...' : '');

  return (
    <Card className="h-full flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border bg-card">
      <Link href={`/noticias/${post.slug}`} className="block">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl}
            alt={`Imagen destacada para ${post.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground pt-2">
            {format(new Date(post.createdAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/noticias/${post.slug}`}>
            Leer Más <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
