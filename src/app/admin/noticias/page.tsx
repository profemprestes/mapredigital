import Link from 'next/link'
import { Mail, PlusCircle } from 'lucide-react'
import { getAllPosts } from '@/lib/actions/posts.actions'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { DeletePostButton } from '@/components/admin/DeletePostButton'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const dynamic = 'force-dynamic'

export default async function AdminNoticiasPage() {
  const posts = await getAllPosts()
  // In a real app, you would fetch this from the DB
  const unreadMessages = 0; 

  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Administración de Noticias</h1>
        <div className="flex items-center gap-4">
           <Button asChild variant="outline" className="relative">
              <Link href="/admin/mensajes">
                  <Mail className="mr-2 h-4 w-4" />
                  Ver Mensajes
                  {unreadMessages > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-0.5 text-xs">
                          {unreadMessages}
                      </Badge>
                  )}
              </Link>
           </Button>
          <Button asChild>
            <Link href="/admin/noticias/crear">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear Nueva Noticia
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead className="hidden md:table-cell">Estado</TableHead>
              <TableHead className="hidden md:table-cell text-right">Fecha de Creación</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No se encontraron noticias.
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={post.published ? 'default' : 'secondary'}>
                      {post.published ? 'Publicado' : 'Borrador'}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {format(new Date(post.createdAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button asChild variant="outline" size="icon">
                        <Link href={`/admin/noticias/${post.id}/editar`}>
                           <span className="sr-only">Editar</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                        </Link>
                      </Button>
                      <DeletePostButton postId={post.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
