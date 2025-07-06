import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ParticlesBackground } from '@/components/page/particles-background';
import { HeroLogo } from './hero-logo';

export function HeroSection() {
    return (
        <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <ParticlesBackground />
          </div>
          <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
                <h1 
                  className="font-headline text-5xl font-extrabold tracking-tighter text-foreground drop-shadow-lg sm:text-6xl md:text-7xl opacity-0 animate-slide-up-fade uppercase"
                  style={{ animationDelay: '0.2s' }}
                >
                  Impulsamos tu Negocio al{' '}
                  <span className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
                    Siguiente
                  </span>
                  {' '}Nivel Digital
                </h1>
                <p 
                  className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl opacity-0 animate-slide-up-fade"
                  style={{ animationDelay: '0.4s' }}
                >
                  Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.
                </p>
                <div 
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start opacity-0 animate-slide-up-fade"
                  style={{ animationDelay: '0.6s' }}
                >
                  <Button asChild size="lg" className="w-full bg-foreground text-background shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-foreground/90 hover:shadow-xl sm:w-auto">
                    <Link href="/contacto">Solicita tu Consulta Gratuita</Link>
                  </Button>
                   <Button asChild size="lg" variant="outline" className="w-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
                    <Link href="/servicios">Nuestros Servicios</Link>
                  </Button>
                </div>
            </div>
            
            <HeroLogo />
          </div>
        </section>
    );
}
