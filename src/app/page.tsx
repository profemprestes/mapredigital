import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import { TestimonialsSection } from '@/components/page/testimonials-section';
import type { Metadata } from 'next';

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
    </main>
  );
}
