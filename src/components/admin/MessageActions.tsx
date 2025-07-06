'use client'

import type { ContactMessage } from '@prisma/client'
import { useTransition } from 'react'
import { Loader2, Trash2, Eye, EyeOff, Mail } from 'lucide-react'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { toggleReadStatus, deleteMessage } from '@/lib/actions/contact.actions'
import { useToast } from '@/hooks/use-toast'

export function MessageActions({ message }: { message: ContactMessage }) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleToggleRead = () => {
    startTransition(async () => {
      try {
        await toggleReadStatus(message.id)
        toast({
          title: 'Éxito',
          description: `Mensaje marcado como ${message.isRead ? 'no leído' : 'leído'}.`,
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo actualizar el estado del mensaje.',
        })
      }
    })
  }
  
  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteMessage(message.id)
        toast({
          title: 'Éxito',
          description: 'El mensaje ha sido eliminado.',
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo eliminar el mensaje.',
        })
      }
    })
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" onClick={handleToggleRead}>
            <Mail className="h-4 w-4" />
            <span className="sr-only">Ver Mensaje</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Mensaje de: {message.name}</DialogTitle>
                <DialogDescription>{message.email} - Servicio: {message.service}</DialogDescription>
            </DialogHeader>
            <div className="py-4 whitespace-pre-wrap">{message.message}</div>
        </DialogContent>
      </Dialog>
      
      <Button onClick={handleToggleRead} disabled={isPending} variant="ghost" size="icon">
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : message.isRead ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        <span className="sr-only">Marcar como {message.isRead ? 'no leído' : 'leído'}</span>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Eliminar</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente el mensaje.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={isPending} className="bg-destructive hover:bg-destructive/90">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
