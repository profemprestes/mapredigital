import { ParticlesBackground } from '@/components/page/particles-background';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle: string;
    icon?: LucideIcon;
    className?: string;
}

export function PageHero({ title, subtitle, icon: Icon, className }: PageHeroProps) {
    return (
        <section className={cn("relative bg-foreground py-24 md:py-32 overflow-hidden", className)}>
             <div className="absolute inset-0 -z-10 opacity-30">
                <ParticlesBackground />
            </div>
          <div 
            className="container text-center relative z-10"
          >
            {Icon && (
                <div className="mb-6 flex justify-center">
                    <Icon className="h-16 w-16 text-accent" aria-hidden="true" />
                </div>
            )}
            <h1 
              className="font-headline text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl"
            >
              {title}
            </h1>
            <p 
              className="mx-auto mt-6 max-w-3xl text-lg text-secondary md:text-xl"
            >
              {subtitle}
            </p>
          </div>
        </section>
    );
}
