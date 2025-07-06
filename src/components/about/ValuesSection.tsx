import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Handshake, Gem } from 'lucide-react';

const values = [
    {
      icon: <Gem className="h-10 w-10 text-primary" aria-hidden="true" />,
      title: "Innovación Constante",
      description: "Buscamos y aplicamos las últimas tecnologías y estrategias para mantener a nuestros clientes a la vanguardia.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" aria-hidden="true" />,
      title: "Compromiso Absoluto",
      description: "El éxito de nuestros clientes es nuestro éxito. Nos implicamos en cada proyecto como si fuera nuestro.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" aria-hidden="true" />,
      title: "Transparencia Radical",
      description: "Comunicación clara, reportes honestos y una colaboración basada en la confianza mútua.",
    },
];

export function ValuesSection() {
    return (
        <section id="values" className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestros Valores Fundamentales</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Los pilares que guían cada una de nuestras decisiones y acciones.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <div key={index}>
                  <Card className="h-full text-center transition-all duration-300 bg-transparent border-2 border-primary/20 shadow-lg hover:shadow-primary/20 hover:bg-card/80 hover:-translate-y-2">
                    <CardHeader className="items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {value.icon}
                      </div>
                      <CardTitle className="font-headline mt-4">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      {value.description}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}
