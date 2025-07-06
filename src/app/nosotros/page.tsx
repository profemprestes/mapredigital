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
            title="Somos tu Socio Estratégico en el Mundo Digital"
            subtitle="Fundada por Matías Prestes, el nombre 'Mapre' fusiona la identidad del fundador con la esencia de una propuesta de valor basada en la Maximización y la Presencia digital estratégica. Nacimos para desmitificar la complejidad del entorno online y ofrecer resultados tangibles."
        />
        <MissionVisionSection />
        <FounderSection />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}
