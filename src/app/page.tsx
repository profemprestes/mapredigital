import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/page/testimonials-section').then(mod => mod.TestimonialsSection), { ssr: false });
const PlanAssistantSection = dynamic(() => import('@/components/page/plan-assistant-section').then(mod => mod.PlanAssistantSection), { ssr: false });


export const metadata: Metadata = {
  title: 'Impulsamos tu Negocio al Siguiente Nivel Digital',
  description: 'Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.',
  keywords: ['estrategia digital', 'posicionamiento web', 'desarrollo de herramientas', 'consultoría digital', 'mapre digital', 'uruguay'],
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PlanAssistantSection />
    </main>
  );
}
