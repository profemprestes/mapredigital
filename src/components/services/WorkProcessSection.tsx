// src/components/services/WorkProcessSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Compass, Code, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Descubrimiento y Análisis',
    description: 'Investigamos tu negocio, mercado y competencia para entender tus desafíos y oportunidades.',
    icon: <Search className="h-8 w-8 text-primary" />,
  },
  {
    step: 2,
    title: 'Estrategia y Planificación',
    description: 'Diseñamos una hoja de ruta a medida con objetivos claros y acciones concretas para alcanzarlos.',
    icon: <Compass className="h-8 w-8 text-primary" />,
  },
  {
    step: 3,
    title: 'Implementación y Desarrollo',
    description: 'Ejecutamos la estrategia con las mejores prácticas, desde la optimización SEO hasta el desarrollo de código.',
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    step: 4,
    title: 'Medición y Optimización',
    description: 'Monitorizamos los resultados, analizamos los datos y ajustamos la estrategia para una mejora continua.',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
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

export function WorkProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            Nuestra Metodología de Trabajo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un proceso probado en 4 fases que garantiza resultados transparentes y efectivos.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step) => (
            <motion.div key={step.step} variants={itemVariants}>
              <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary/50 bg-card/50">
                <CardHeader className="items-center">
                  <div className="relative mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {step.step}
                    </span>
                  </div>
                  <CardTitle className="font-headline mt-2 text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
