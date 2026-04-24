# Mapre Digital - Technical Blueprint

## 🧬 Project DNA
LandingPage / Digital Agency Portfolio

## 🛠️ Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript (Strict)
- **Base de Datos:** PostgreSQL via Prisma ORM
- **Autenticación:** Firebase (configured/used for Genkit AI flows, seemingly for admin functions)
- **UI/UX:** Tailwind CSS + Shadcn UI + Radix UI + Framer Motion + tsParticles

## 🎯 Feature Set
- [x] Feature 1: Presentación de servicios (SEO, Consultoría Digital, Herramientas a Medida).
- [x] Feature 2: Asistente virtual impulsado por IA (Genkit + Google AI) para recomendación de planes.
- [x] Feature 3: Blog/Noticias con CMS integrado para administración de contenido.
- [x] Feature 4: Formulario de contacto con almacenamiento en base de datos.
- [x] Feature 5: Panel de administración para revisar mensajes de contacto y gestionar noticias.

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
- **Tone:** Profesional, Tecnológico, Minimalista.
- **Typography:** PT Sans (body), Poppins (headline).
- **Special Components:** Framer Motion (para animaciones de entrada y scroll), tsParticles (fondo interactivo de partículas), Lucide Icons.

## 🚨 Best Practices Detectadas
- **Arquitectura Next.js:** Uso intensivo de App Router y Server Actions (`'use server'`) para manipulación de datos.
- **Estilos:** Tailwind configurado con variables CSS para el sistema de temas (Light/Dark mode) en lugar de clases utilitarias estáticas (Shadcn pattern).
- **Validación:** Uso de `zod` y `react-hook-form` para validar entradas de usuario tanto en el cliente como en el servidor.
- **Optimización de renderizado:** Uso de `next/dynamic` para lazy-loading de componentes pesados (ParticlesBackground, secciones por debajo de the fold) mejorando el LCP.
- **Despliegue:** Preparado para despliegue en entornos como Vercel o Netlify (se han manejado excepciones para conectar con la base de datos de Prisma durante el pre-renderizado `sitemap.xml` para evitar caídas del build cuando la BD no está disponible).
