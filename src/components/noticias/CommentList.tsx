import type { Comment } from '@prisma/client'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserCircle } from 'lucide-react'

export function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        Sé el primero en comentar.
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <Card key={comment.id} className="bg-secondary/50 border-l-4 border-primary shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <UserCircle className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-semibold text-foreground">{comment.author}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(comment.createdAt), "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es })}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{comment.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
