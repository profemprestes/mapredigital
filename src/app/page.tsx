import { HeroSection } from '@/components/page/hero-section';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ClientParticles } from '@/components/page/ClientParticles';

const ServicesSection = dynamic(() => import('@/components/page/services-section').then(mod => mod.ServicesSection));
const TestimonialsSection = dynamic(() => import('@/components/page/testimonials-section').then(mod => mod.TestimonialsSection));
const PlanAssistantSection = dynamic(() => import('@/components/page/plan-assistant-section').then(mod => mod.PlanAssistantSection));

export const metadata: Metadata = {
  title: 'Impulsamos tu Negocio al Siguiente Nivel Digital',
  description: 'Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.',
  keywords: ['estrategia digital', 'posicionamiento web', 'desarrollo de herramientas', 'consultoría digital', 'mapre digital', 'uruguay'],
};

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <ClientParticles />
      </div>
      
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PlanAssistantSection />
    </main>
  );
}
