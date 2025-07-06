'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
      name: "Ana García",
      company: "Tech Solutions",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "tech logo",
      quote: "Mapre Digital transformó nuestra presencia online. ¡Nuestro tráfico se duplicó en solo tres meses!",
    },
    {
      name: "Carlos Rodríguez",
      company: "Innova Corp",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "corporate logo",
      quote: "El equipo desarrolló una herramienta interna que ha revolucionado nuestra gestión de proyectos. Impresionante.",
    },
    {
      name: "Sofía Martínez",
      company: "Creative Minds",
      logo: "https://placehold.co/120x40.png",
      dataAiHint: "creative logo",
      quote: "La consultoría fue clave para redefinir nuestra estrategia digital. Ahora tenemos un camino claro y resultados tangibles.",
    },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
      
export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Historias de Éxito</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Descubre cómo hemos ayudado a otros negocios a crecer.
              </p>
            </motion.div>
            <motion.div 
              className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                >
                  <Card className="flex h-full flex-col justify-between overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-2xl hover:-translate-y-2 duration-300">
                    <CardContent className="pt-6">
                      <p className="italic text-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardHeader className="mt-auto flex-row items-center gap-4 border-t bg-background/50 p-4">
                       <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        width={100}
                        height={40}
                        className="object-contain"
                        data-ai-hint={testimonial.dataAiHint}
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    );
}
