'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Handshake, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    {
      icon: <Gem className="h-10 w-10 text-primary" />,
      title: "Innovación Constante",
      description: "Buscamos y aplicamos las últimas tecnologías y estrategias para mantener a nuestros clientes a la vanguardia.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: "Compromiso Absoluto",
      description: "El éxito de nuestros clientes es nuestro éxito. Nos implicamos en cada proyecto como si fuera nuestro.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Transparencia Radical",
      description: "Comunicación clara, reportes honestos y una colaboración basada en la confianza mútua.",
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

export function ValuesSection() {
    return (
        <section id="values" className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestros Valores Fundamentales</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Los pilares que guían cada una de nuestras decisiones y acciones.
              </p>
            </motion.div>
            <motion.div 
              className="mt-12 grid gap-8 md:grid-cols-3"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                >
                  <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary bg-card/50">
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    );
}
