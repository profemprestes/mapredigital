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
    // Contenedor principal para el contexto de apilamiento
    <div className="relative isolate">
      {/* El fondo se renderiza en una capa inferior y no bloquea el contenido */}
      <div className="absolute inset-0 z-[-1] h-full w-full opacity-30">
        <ClientParticles />
      </div>

      {/* El contenido principal se renderiza en una capa superior y no es hijo de la animación */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PlanAssistantSection />
      </main>
    </div>
  );
}
