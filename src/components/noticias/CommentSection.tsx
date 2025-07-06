import { getCommentsByPostId } from '@/lib/actions/comments.actions'
import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'
import { Separator } from '@/components/ui/separator'

export async function CommentSection({ postId }: { postId: string }) {
  const comments = await getCommentsByPostId(postId)

  return (
    <div className="mt-16 pt-12 border-t">
        <h2 className="text-2xl font-bold font-headline mb-6">Comentarios ({comments.length})</h2>
        <div className="mb-8 p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-bold font-headline mb-4">Deja tu comentario</h3>
            <CommentForm postId={postId} />
        </div>
        <CommentList comments={comments} />
    </div>
  )
}
