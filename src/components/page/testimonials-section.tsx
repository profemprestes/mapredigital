'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        <section id="testimonials" className="py-16 md:py-24 bg-background">
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
              className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3"
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
                  <Card className="h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border bg-card">
                    <CardContent className="p-8 relative">
                      <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    );
}
