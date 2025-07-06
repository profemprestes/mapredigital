import { PostForm } from '@/components/admin/PostForm'

export default function CrearNoticiaPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Crear Nueva Noticia</h1>
        <PostForm />
      </div>
    </div>
  )
}
