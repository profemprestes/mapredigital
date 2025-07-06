import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Code, MessageCircle } from 'lucide-react';

export function ServicesSection() {
    const services = [
        {
          icon: <Target className="h-10 w-10 text-accent" />,
          title: "Posicionamiento Web",
          description: "Aumentamos tu visibilidad en buscadores para atraer más clientes potenciales y superar a tu competencia.",
        },
        {
          icon: <Code className="h-10 w-10 text-accent" />,
          title: "Desarrollo de Herramientas Online",
          description: "Creamos soluciones a medida, desde calculadoras interactivas hasta CRMs, para optimizar tus procesos.",
        },
        {
          icon: <MessageCircle className="h-10 w-10 text-accent" />,
          title: "Consultoría Digital",
          description: "Te guiamos con estrategias efectivas para asegurar que cada paso en el mundo digital sea un éxito.",
        },
      ];

    return (
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Soluciones diseñadas para potenciar tu éxito en el mundo digital.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="items-center text-center">
                    {service.icon}
                    <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    {service.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    );
}
