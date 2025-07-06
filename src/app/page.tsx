import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import { TestimonialsSection } from '@/components/page/testimonials-section';
import { PlanAssistantSection } from '@/components/page/plan-assistant-section';

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
