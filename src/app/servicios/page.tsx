import type { Metadata } from 'next';
import { DetailedServicesSection } from '@/components/services/DetailedServicesSection';
import { PageHero } from '@/components/shared/PageHero';
import { WorkProcessSection } from '@/components/services/WorkProcessSection';
import { CTASection } from '@/components/shared/CTASection';
import { Puzzle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios de SEO, Desarrollo y Consultoría Digital',
  description: 'Ofrecemos posicionamiento web (SEO) estratégico, desarrollo de herramientas a medida y consultoría digital integral para potenciar tu éxito en el mundo online.',
  keywords: ['posicionamiento web uruguay', 'auditoría seo', 'desarrollo de software a medida', 'consultoría digital integral', 'optimización de conversión', 'cro'],
  openGraph: {
    url: '/servicios',
  }
};


export default function ServiciosPage() {
  return (
      <div className="flex min-h-screen flex-col bg-background font-body">
          <main className="flex-1">
              <PageHero 
                  title="Soluciones a Medida para tu Éxito"
                  subtitle="Explora nuestros servicios de SEO, desarrollo y consultoría, diseñados para transformar tu presencia digital y generar resultados tangibles."
                  icon={Puzzle}
              />
              <DetailedServicesSection />
              <WorkProcessSection />
              <CTASection />
          </main>
      </div>
  );
}
