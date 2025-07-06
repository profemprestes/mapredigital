
'use client';

import { DetailedServicesSection } from '@/components/services/DetailedServicesSection';
import { PageHero } from '@/components/shared/PageHero';
import dynamic from 'next/dynamic';
import { Puzzle } from 'lucide-react';

const WorkProcessSection = dynamic(() => import('@/components/services/WorkProcessSection').then(mod => mod.WorkProcessSection));
const CTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection));

export function ServicesPageClient() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-body">
            <main className="flex-1">
                <PageHero 
                    title="Soluciones a Medida para tu Éxito"
                    subtitle="Explora nuestros servicios de SEO, desarrollo y consultoría, diseñados para transformar tu presencia digital y generar resultados tangibles."
                    icon={Puzzle}
                />
                <DetailedServicesSection />
                <WorkProcessSection />
                <CTASection />
            </main>
        </div>
    );
}
