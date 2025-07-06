import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { PageHero } from '@/components/shared/PageHero';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FounderSection = dynamic(() => import('@/components/about/FounderSection').then(mod => mod.FounderSection), { ssr: false });
const ValuesSection = dynamic(() => import('@/components/about/ValuesSection').then(mod => mod.ValuesSection), { ssr: false });
const CTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection), { ssr: false });

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Nuestra Historia y Misión',
  description: 'Conoce nuestra misión de transformar empresas y nuestra visión de ser líderes en innovación digital. Descubre la historia de Mapre Digital y nuestros valores.',
  keywords: ['historia de mapre digital', 'misión y visión', 'innovación digital', 'matías prestes', 'agencia digital uruguay', 'valores de empresa'],
  openGraph: {
    url: '/nosotros',
  }
};

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <main className="flex-1">
        <PageHero
            title="Tu Socio Estratégico en el Mundo Digital"
            subtitle="Conoce la historia, misión y los valores que nos impulsan a innovar."
        />
        <MissionVisionSection />
        <FounderSection />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}
