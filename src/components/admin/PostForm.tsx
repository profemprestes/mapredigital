'use client'

import { useFormStatus } from 'react-dom'
import { useState, useTransition } from 'react'
import type { Post } from '@prisma/client'
import { createPost, updatePost, enhancePostWithAI } from '@/lib/actions/posts.actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Loader2, Sparkles } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

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
  const { toast } = useToast()

  const [title, setTitle] = useState(post?.title ?? '')
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [isAiPending, startAiTransition] = useTransition()

  const handleAiEnhancement = async () => {
    if (!title && !content) {
      toast({
        variant: 'destructive',
        title: 'Faltan datos',
        description: 'Por favor, escribe un título y algo de contenido antes de usar la IA.',
      })
      return
    }

    startAiTransition(async () => {
      try {
        const result = await enhancePostWithAI(title, content)
        setTitle(result.enhancedTitle)
        setContent(result.enhancedContent)
        toast({
          title: '¡Contenido Mejorado!',
          description: 'La IA ha reescrito y formateado tu artículo.',
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error de IA',
          description: error instanceof Error ? error.message : 'Ocurrió un error inesperado.',
        })
      }
    })
  }

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          placeholder="El Título de tu Noticia"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">URL de la Imagen Destacada</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          placeholder="/noticias/nombre-imagen.png o https://..."
          required
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="content">Contenido (Markdown)</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAiEnhancement}
            disabled={isAiPending}
          >
            {isAiPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Mejorar con IA
          </Button>
        </div>
        <Textarea
          id="content"
          name="content"
          placeholder="Escribe el contenido de tu noticia aquí. Puedes usar Markdown."
          required
          rows={15}
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
