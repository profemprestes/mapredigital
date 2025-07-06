'use client'

import { useFormStatus } from 'react-dom'
import type { Post } from '@prisma/client'
import { createPost, updatePost } from '@/lib/actions/posts.actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Loader2 } from 'lucide-react'

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isEditing ? 'Actualizar Noticia' : 'Crear Noticia'}
    </Button>
  )
}

export function PostForm({ post }: { post?: Post | null }) {
  const isEditing = !!post
  const formAction = isEditing ? updatePost.bind(null, post.id) : createPost

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          placeholder="El Título de tu Noticia"
          required
          defaultValue={post?.title}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">URL de la Imagen Destacada</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          placeholder="https://placehold.co/1200x630.png"
          required
          defaultValue={post?.imageUrl}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Contenido (Markdown)</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Escribe el contenido de tu noticia aquí. Puedes usar Markdown."
          required
          rows={15}
          defaultValue={post?.content}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch 
            id="published" 
            name="published"
            defaultChecked={post?.published ?? false} 
        />
        <Label htmlFor="published">Publicar</Label>
      </div>

      <div className="flex justify-end">
        <SubmitButton isEditing={isEditing} />
      </div>
    </form>
  )
}
