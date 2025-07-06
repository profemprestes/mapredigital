import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StoryHeroSection } from '@/components/about/StoryHeroSection';
import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { FounderSection } from '@/components/about/FounderSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/shared/CTASection';

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        <StoryHeroSection />
        <MissionVisionSection />
        <FounderSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
