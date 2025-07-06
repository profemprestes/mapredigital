import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import { TestimonialsSection } from '@/components/page/testimonials-section';
import { PlanAssistantSection } from '@/components/page/plan-assistant-section';
import { ParticlesBackground } from '@/components/page/particles-background';
export default function Home() {
  return (
    <main className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PlanAssistantSection />
    </main>
    
  );
}
