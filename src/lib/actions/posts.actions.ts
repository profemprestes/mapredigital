'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { slugify } from '@/lib/utils'
import { enhanceContent } from '@/ai/flows/content-enhancement-flow'

// Create Post
export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string
  const published = formData.get('published') === 'on'

  if (!title || !content || !imageUrl) {
    throw new Error('Title, content, and image URL are required.')
  }

  const slug = slugify(title)

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      imageUrl,
      published,
    },
  })

  revalidatePath('/admin/noticias')
  revalidatePath('/noticias')
  revalidatePath(`/noticias/${slug}`)
  redirect('/admin/noticias')
}

// Update Post
export async function updatePost(id: string, formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string
  const published = formData.get('published') === 'on'

  if (!title || !content || !imageUrl) {
    throw new Error('Title, content, and image URL are required.')
  }

  const slug = slugify(title)

  await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      content,
      imageUrl,
      published,
    },
  })

  revalidatePath('/admin/noticias')
  revalidatePath('/noticias')
  revalidatePath(`/noticias/${slug}`)
  redirect('/admin/noticias')
}

// Delete Post
export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  })

  revalidatePath('/admin/noticias')
  revalidatePath('/noticias')
}

// Get All Posts (for admin dashboard and sitemap)
export async function getAllPosts() {
  try {
    const posts = await prisma?.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: { comments: true },
        },
      },
    });
    return posts || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

// Get All Published Posts (for public blog)
export async function getPublishedPosts() {
  try {
    const posts = await prisma?.post.findMany({
      where: { published: true },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: { comments: true },
        },
      },
    });
    return posts || [];
  } catch (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }
}

// Get Post By Slug (for post detail page)
export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
  })
  return post
}

// Get Post By ID (for edit form)
export async function getPostById(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
  })
  if (!post) {
    return null
  }
  return post
}

// Get Latest Posts (for homepage section)
export async function getLatestPosts(limit: number = 3) {
  try {
    const posts = await prisma?.post.findMany({
      where: { published: true },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      include: {
        _count: {
          select: { comments: true },
        },
      },
    });
    return posts || [];
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }
}

// Enhance Post with AI
export async function enhancePostWithAI(title: string, content: string) {
  if (!title && !content) {
    throw new Error('El título y el contenido son obligatorios para la mejora con IA.')
  }
  try {
    const result = await enhanceContent({ title: title || '', content: content || '' })
    return result
  } catch (error) {
    console.error('Error enhancing post with AI:', error)
    throw new Error('No se pudo mejorar el contenido con la IA. Inténtalo de nuevo.')
  }
}
