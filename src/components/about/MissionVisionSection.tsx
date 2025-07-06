import { Rocket, Eye } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestra Filosofía</h2>
            <p className="mt-4 text-lg text-muted-foreground">Los dos pilares que guían nuestro propósito y dirección.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12">
          {/* Misión */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:border-r md:border-border md:pr-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Rocket className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Misión</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Transformar la manera en que las empresas interactúan con el mundo online, convirtiéndolas en líderes dentro de su nicho a través de estrategias digitales innovadoras, herramientas a medida y una consultoría basada en la transparencia y los resultados.
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-8">
             <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Eye className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Visión</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Ser el referente en innovación y estrategia digital en Uruguay, reconocido por impulsar el crecimiento sostenible de nuestros clientes a nivel global. Aspiramos a construir un futuro donde cualquier empresa, sin importar su tamaño, pueda competir en igualdad de condiciones en el ecosistema digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
