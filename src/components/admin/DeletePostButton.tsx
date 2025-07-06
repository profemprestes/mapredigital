'use client'

import { useState, useTransition } from 'react'
import { Loader2, Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { deletePost } from '@/lib/actions/posts.actions'
import { useToast } from '@/hooks/use-toast'

export function DeletePostButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deletePost(postId)
        toast({
          title: 'Éxito',
          description: 'La noticia ha sido eliminada.',
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo eliminar la noticia.',
        })
      }
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Eliminar</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente la noticia de la base de datos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isPending} className="bg-destructive hover:bg-destructive/90">
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
