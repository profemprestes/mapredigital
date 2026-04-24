# Mapre Digital - Technical Blueprint

## 🧬 Project DNA
Digital Agency / AI-Powered Business Website

## 🛠️ Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript (Strict)
- **Base de Datos:** PostgreSQL (via Prisma)
- **Autenticación:** Ninguna identificada (Sin NextAuth o Clerk)
- **UI/UX:** Tailwind CSS + Shadcn UI + Radix UI

## 🎯 Feature Set
- [x] Feature 1: Landing page interactiva con animaciones Framer Motion y Particles.js
- [x] Feature 2: Blog/Noticias con CMS integrado para crear, editar, eliminar y leer posts.
- [x] Feature 3: Asistente de selección de planes impulsado por IA (Genkit).
- [x] Feature 4: Formulario de contacto funcional validado con Zod y React Hook Form.
- [x] Feature 5: Sistema de comentarios en los posts del blog.

## 💾 Data Model (TypeScript / SQL)
```prisma
model Post {
  id        String    @id @default(cuid())
  title     String
  slug      String    @unique
  content   String    @db.Text
  imageUrl  String
  published Boolean   @default(false)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  comments  Comment[]
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  author    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    String
}

model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  service   String
  message   String   @db.Text
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 UI/UX Design System
- **Tone:** Profesional / Tecnológico / Moderno
- **Typography:** Poppins (Headline), PT Sans (Body), Monospace (Code)
- **Special Components:** Framer Motion, @tsparticles/react, Embla Carousel, Lucide React, Recharts

## 🚨 Best Practices Detectadas
- Uso intensivo de **App Router** de Next.js 15.
- Empleo de **Server Actions** para las operaciones de base de datos (Posts, Comments, Contact) y la interacción con la IA.
- Validación de esquemas del lado del cliente y servidor usando **Zod**.
- Implementación de estado de servidor mediante `useActionState` para el formulario de la IA.
- Configurado para despliegue en **Netlify** (referencia en el `layout.tsx`).
- Uso de **Turbopack** para desarrollo local (`next dev --turbopack`).
- Integración de **Genkit** para flujos de IA.
