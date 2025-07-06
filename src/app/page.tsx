import { HeroSection } from '@/components/page/hero-section';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Carga dinámica de los componentes que no son críticos para el LCP
const ServicesSection = dynamic(() => import('@/components/page/services-section').then(mod => mod.ServicesSection));
const TestimonialsSection = dynamic(() => import('@/components/page/testimonials-section').then(mod => mod.TestimonialsSection));
const NewsSection = dynamic(() => import('@/components/page/news-section').then(mod => mod.NewsSection));

// Carga el nuevo componente de partículas de forma dinámica
const ClientParticles = dynamic(() =>
  import('@/components/page/ClientParticles').then(mod => mod.ClientParticles)
);

export const metadata: Metadata = {
  description: 'Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.',
  keywords: ['estrategia digital', 'posicionamiento web', 'desarrollo de herramientas', 'consultoría digital', 'mapre digital', 'uruguay'],
};

export default function Home() {
  return (
    <div className="relative isolate">
      {/* El fondo animado se posiciona absolutamente detrás del contenido */}
      <div className="absolute inset-0 z-[-1] h-screen min-h-[700px] w-full opacity-30">
        <ClientParticles />
      </div>

      {/* El contenido principal se renderiza en una capa superior */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
    </div>
  );
}
