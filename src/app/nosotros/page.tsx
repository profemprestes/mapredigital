import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { FounderSection } from '@/components/about/FounderSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/shared/CTASection';
import { PageHero } from '@/components/shared/PageHero';

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <main className="flex-1">
        <PageHero
            title="Tu Socio Estratégico en el Mundo Digital"
            subtitle="Conoce la historia, misión y los valores que nos impulsan a innovar."
        />
        <MissionVisionSection />
        <FounderSection />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}
