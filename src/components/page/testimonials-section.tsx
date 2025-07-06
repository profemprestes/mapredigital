import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export function TestimonialsSection() {
    const testimonials = [
        {
          name: "Ana García",
          company: "Tech Solutions",
          logo: "https://placehold.co/100x40.png",
          dataAiHint: "tech logo",
          quote: "Mapre Digital transformó nuestra presencia online. ¡Nuestro tráfico se duplicó en solo tres meses!",
        },
        {
          name: "Carlos Rodríguez",
          company: "Innova Corp",
          logo: "https://placehold.co/100x40.png",
          dataAiHint: "corporate logo",
          quote: "El equipo desarrolló una herramienta interna que ha revolucionado nuestra gestión de proyectos. Impresionante.",
        },
        {
          name: "Sofía Martínez",
          company: "Creative Minds",
          logo: "https://placehold.co/100x40.png",
          dataAiHint: "creative logo",
          quote: "La consultoría fue clave para redefinir nuestra estrategia digital. Ahora tenemos un camino claro y resultados tangibles.",
        },
      ];
      
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Historias de Éxito</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Descubre cómo hemos ayudado a otros negocios a crecer.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <CardContent className="pt-6">
                    <p className="italic text-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4 border-t mt-4 pt-6">
                     <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                      data-ai-hint={testimonial.dataAiHint}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
    );
}
