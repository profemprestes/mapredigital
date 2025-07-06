import { getAllMessages } from '@/lib/actions/contact.actions';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Inbox, Mail } from 'lucide-react';
import { MessageActions } from '@/components/admin/MessageActions';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminMessagesPage() {
  const messages = await getAllMessages();
  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
            <Inbox className="h-6 w-6" />
            Bandeja de Entrada
        </h1>
        <div className="flex items-center gap-4">
            <Badge variant={unreadCount > 0 ? "default" : "secondary"}>
                {unreadCount} mensaje(s) sin leer
            </Badge>
            <Button asChild variant="outline">
                <Link href="/admin/noticias">Volver a Noticias</Link>
            </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Remitente</TableHead>
              <TableHead>Asunto</TableHead>
              <TableHead className="hidden md:table-cell w-[180px]">Servicio</TableHead>
              <TableHead className="hidden md:table-cell text-right w-[200px]">Fecha</TableHead>
              <TableHead className="text-right w-[150px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No hay mensajes en la bandeja de entrada.
                </TableCell>
              </TableRow>
            ) : (
              messages.map((msg) => (
                <TableRow key={msg.id} className={cn(!msg.isRead && "bg-secondary/50 font-semibold")}>
                  <TableCell>
                    <div className="flex flex-col">
                        <span>{msg.name}</span>
                        <span className={cn("text-xs", !msg.isRead ? "text-foreground/80" : "text-muted-foreground")}>{msg.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="line-clamp-2">{msg.message}</p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{msg.service}</TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {format(new Date(msg.createdAt), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                  </TableCell>
                  <TableCell className="text-right">
                    <MessageActions message={msg} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
