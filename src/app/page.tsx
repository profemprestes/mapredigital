import { Header } from '@/components/page/header';
import { Footer } from '@/components/page/footer';
import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import { TestimonialsSection } from '@/components/page/testimonials-section';
import { PlanAssistantSection } from '@/components/page/plan-assistant-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PlanAssistantSection />
      </main>
      <Footer />
    </div>
  );
}
