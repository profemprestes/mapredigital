import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-foreground to-primary py-16 md:py-24 text-primary-foreground">
      <div
        className="container text-center"
      >
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos. La consulta inicial es gratuita y sin compromiso.
        </p>
        <div className="mt-10">
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground bg-transparent text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-background hover:scale-105"
          >
            <Link href="/contacto">
              Contáctanos y empecemos
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
