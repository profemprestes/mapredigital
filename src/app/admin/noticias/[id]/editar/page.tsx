import { getPostById } from '@/lib/actions/posts.actions'
import { PostForm } from '@/components/admin/PostForm'
import { notFound } from 'next/navigation'

export default async function EditarNoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = await getPostById(resolvedParams.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Editar Noticia</h1>
        <PostForm post={post} />
      </div>
    </div>
  )
}
