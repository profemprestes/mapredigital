// src/app/servicios/page.tsx
import { DetailedServicesSection } from '@/components/services/DetailedServicesSection';
import { WorkProcessSection } from '@/components/services/WorkProcessSection';
import { CTASection } from '@/components/shared/CTASection';
import { PageHero } from '@/components/shared/PageHero';

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <main className="flex-1">
        <PageHero 
            title="Servicios Diseñados para tu Crecimiento Digital"
            subtitle="Desde el posicionamiento en buscadores hasta el desarrollo de herramientas a medida, te ofrecemos soluciones que generan un impacto real."
        />
        <DetailedServicesSection />
        <WorkProcessSection />
        <CTASection />
      </main>
    </div>
  );
}
