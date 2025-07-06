import { DetailedServicesSection } from '@/components/services/DetailedServicesSection';
import { PageHero } from '@/components/shared/PageHero';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const WorkProcessSection = dynamic(() => import('@/components/services/WorkProcessSection').then(mod => mod.WorkProcessSection));
const CTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection));


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
