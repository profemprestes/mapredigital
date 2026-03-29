'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  service: z.string().min(1, { message: 'Por favor, selecciona un servicio.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
})

export type ContactFormState = {
    message: string
    success: boolean
    errors?: {
        name?: string[]
        email?: string[]
        service?: string[]
        message?: string[]
    }
}

export async function createContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    return {
      success: false,
      message: 'Error de validación. Por favor, corrige los campos indicados.',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    if (!prisma) throw new Error('Database connection not available.')
    await prisma.contactMessage.create({
      data: parsed.data,
    })

    revalidatePath('/admin/mensajes')
    return { success: true, message: 'Gracias por contactarnos. Te responderemos a la brevedad.' }
  } catch (error) {
    console.error('Error creating contact message:', error);
    return { success: false, message: 'Error en el servidor. No se pudo enviar el mensaje.' }
  }
}

export async function getAllMessages() {
  try {
    if (!prisma) return []
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

export async function toggleReadStatus(id: string) {
    if (!prisma) return
    const message = await prisma.contactMessage.findUnique({ where: { id } });
    if (!message) throw new Error('Message not found');

    await prisma.contactMessage.update({
        where: { id },
        data: { isRead: !message.isRead },
    });
    revalidatePath('/admin/mensajes');
}

export async function deleteMessage(id: string) {
    if (!prisma) return
    await prisma.contactMessage.delete({ where: { id } });
    revalidatePath('/admin/mensajes');
}
