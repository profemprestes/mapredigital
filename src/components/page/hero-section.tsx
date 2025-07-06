import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Impulsamos tu Negocio al Siguiente Nivel Digital
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="#plan-assistant">Solicita tu Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>
    );
}
