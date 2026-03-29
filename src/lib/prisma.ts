import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaClientSingleton = () => {
  // En entornos de CI (como Netlify build) sin URL de base de datos,
  // no inicializar Prisma para evitar fallos de compilación por variables faltantes
  if (!process.env.DATABASE_URL) {
    return null as any;
  }
  return new PrismaClient().$extends(withAccelerate())
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
