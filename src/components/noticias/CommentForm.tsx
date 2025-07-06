'use client'

import { useFormStatus } from 'react-dom'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { createComment } from '@/lib/actions/comments.actions'
import { Loader2 } from 'lucide-react'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Enviar Comentario
    </Button>
  )
}

export function CommentForm({ postId }: { postId: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  
  const formAction = async (formData: FormData) => {
    // In a real app, you might want to handle potential errors here
    await createComment(postId, formData)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="author">Tu Nombre</Label>
          <Input id="author" name="author" placeholder="John Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Tu Comentario</Label>
        <Textarea id="content" name="content" placeholder="Escribe tu opinión..." required rows={4} />
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  )
}
