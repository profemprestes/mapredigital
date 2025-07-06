import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
    {
      name: "Ana García",
      title: "CEO",
      company: "Tech Solutions",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "tech logo",
      quote: "Mapre Digital transformó nuestra presencia online. ¡Nuestro tráfico se duplicó en solo tres meses!",
    },
    {
      name: "Carlos Rodríguez",
      title: "Project Manager",
      company: "Innova Corp",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "corporate logo",
      quote: "El equipo desarrolló una herramienta interna que ha revolucionado nuestra gestión de proyectos. Impresionante.",
    },
    {
      name: "Sofía Martínez",
      title: "Marketing Director",
      company: "Creative Minds",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "creative logo",
      quote: "La consultoría fue clave para redefinir nuestra estrategia digital. Ahora tenemos un camino claro y resultados tangibles.",
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Historias de Éxito</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Descubre cómo hemos ayudado a otros negocios a crecer.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Card className="h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border bg-card">
                    <CardContent className="p-8 relative">
                      <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" aria-hidden="true" />
                      <div className="flex items-center gap-4 mb-6">
                         <Image
                          src={testimonial.logo}
                          alt={`${testimonial.company} logo`}
                          width={100}
                          height={40}
                          className="object-contain self-start"
                          data-ai-hint={testimonial.dataAiHint}
                        />
                         <div>
                          <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-lg text-foreground/90 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}
