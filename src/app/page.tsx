import { HeroSection } from '@/components/page/hero-section';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('@/components/page/services-section').then(mod => mod.ServicesSection));
const TestimonialsSection = dynamic(() => import('@/components/page/testimonials-section').then(mod => mod.TestimonialsSection));
const PlanAssistantSection = dynamic(() => import('@/components/page/plan-assistant-section').then(mod => mod.PlanAssistantSection));
const ParticlesBackground = dynamic(() => 
  import('@/components/page/particles-background').then(mod => mod.ParticlesBackground)
);

export const metadata: Metadata = {
  title: 'Impulsamos tu Negocio al Siguiente Nivel Digital',
  description: 'Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.',
  keywords: ['estrategia digital', 'posicionamiento web', 'desarrollo de herramientas', 'consultoría digital', 'mapre digital', 'uruguay'],
};

export default function Home() {
  return (
    <main>
      <HeroSection>
        <ParticlesBackground />
      </HeroSection>
      <ServicesSection />
      <TestimonialsSection />
      <PlanAssistantSection />
    </main>
  );
}
