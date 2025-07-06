
import { AboutPageClient } from '@/components/about/AboutPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Nuestra Historia y Misión',
  description: 'Conoce nuestra misión de transformar empresas y nuestra visión de ser líderes en innovación digital. Descubre la historia de Mapre Digital y nuestros valores.',
  keywords: ['historia de mapre digital', 'misión y visión', 'innovación digital', 'matías prestes', 'agencia digital uruguay', 'valores de empresa'],
  openGraph: {
    url: '/nosotros',
  }
};

export default function NosotrosPage() {
  return <AboutPageClient />;
}
