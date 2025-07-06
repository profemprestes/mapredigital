import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import dynamic from 'next/dynamic';

import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { PageHero } from '@/components/shared/PageHero';
import { FounderSection } from '@/components/about/FounderSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/shared/CTASection';

const ParticlesBackground = dynamic(() => 
  import('@/components/page/particles-background').then(mod => mod.ParticlesBackground)
);

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
                title="La Pasión Detrás de la Innovación"
                subtitle="Descubre nuestra historia, el equipo y los valores que nos convierten en tu socio digital ideal."
                icon={Users}
            >
              <div className="absolute inset-0 -z-10 opacity-30">
                <ParticlesBackground />
              </div>
            </PageHero>
            <MissionVisionSection />
            <FounderSection />
            <ValuesSection />
            <CTASection />
        </main>
    </div>
  );
}
