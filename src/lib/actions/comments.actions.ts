'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const commentSchema = z.object({
  content: z.string().min(1, 'El comentario no puede estar vacío.'),
  author: z.string().min(1, 'El nombre no puede estar vacío.'),
})

export async function createComment(postId: string, formData: FormData) {
  if (!prisma) throw new Error('Database connection not available.');
  const parsed = commentSchema.safeParse({
    content: formData.get('content'),
    author: formData.get('author'),
  })

  if (!parsed.success) {
    // In a real app, you'd return an error state here
    throw new Error(parsed.error.issues.map((i) => i.message).join(', '))
  }

  const { content, author } = parsed.data

  if (!postId) {
    throw new Error('Post ID is required.')
  }

  await prisma.comment.create({
    data: {
      content,
      author,
      postId,
    },
  })

  const post = await prisma.post.findUnique({ where: { id: postId }, select: { slug: true }})

  if(post) {
    revalidatePath(`/noticias/${post.slug}`)
  }
}

export async function getCommentsByPostId(postId: string) {
  if (!postId) {
    return []
  }

  if (!prisma) return [];

  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return comments
}
