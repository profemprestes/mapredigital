// src/app/servicios/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/services/HeroSection';
import { DetailedServicesSection } from '@/components/services/DetailedServicesSection';
import { WorkProcessSection } from '@/components/services/WorkProcessSection';
import { CTASection } from '@/components/shared/CTASection';
import { motion } from 'framer-motion';

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DetailedServicesSection />
        <WorkProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
