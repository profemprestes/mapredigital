
'use client';

import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { PageHero } from '@/components/shared/PageHero';
import dynamic from 'next/dynamic';
import { Users } from 'lucide-react';

const FounderSection = dynamic(() => import('@/components/about/FounderSection').then(mod => mod.FounderSection));
const ValuesSection = dynamic(() => import('@/components/about/ValuesSection').then(mod => mod.ValuesSection));
const CTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection));

export function AboutPageClient() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-body">
            <main className="flex-1">
                <PageHero
                    title="La Pasión Detrás de la Innovación"
                    subtitle="Descubre nuestra historia, el equipo y los valores que nos convierten en tu socio digital ideal."
                    icon={Users}
                />
                <MissionVisionSection />
                <FounderSection />
                <ValuesSection />
                <CTASection />
            </main>
        </div>
    );
}
