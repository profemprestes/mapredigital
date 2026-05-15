import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/actions/posts.actions';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Clock } from 'lucide-react';
import { CommentSection } from '@/components/noticias/CommentSection';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Noticia no encontrada',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      url: `/noticias/${resolvedParams.slug}`,
      images: [post.imageUrl, ...previousImages],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.content.substring(0, 160),
        images: [post.imageUrl],
    }
  };
}

export default async function NoticiaDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }
  
  // Estimate reading time (200 words per minute)
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <article>
        <header className="relative h-[40vh] md:h-[50vh] w-full">
            <Image 
                src={post.imageUrl}
                alt={`Imagen de portada para ${post.title}`}
                fill
                className="object-cover"
                priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
             <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white container">
                <h1 className="font-headline text-3xl md:text-5xl font-bold max-w-4xl text-balance">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 mt-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(post.createdAt), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{readingTime} min de lectura</span>
                    </div>
                </div>
             </div>
        </header>

        <div className="container max-w-3xl mx-auto py-12 md:py-16 px-4">
           <div className="prose prose-lg dark:prose-invert max-w-none">
             <ReactMarkdown>{post.content}</ReactMarkdown>
           </div>
           
           <CommentSection postId={post.id} />
        </div>
    </article>
  );
}
