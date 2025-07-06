'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Code, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Descubrimiento y Análisis',
    description: 'Investigamos tu negocio, mercado y competencia para entender tus desafíos y oportunidades.',
    icon: <Search className="h-8 w-8 text-primary-foreground" aria-hidden="true" />,
  },
  {
    step: 2,
    title: 'Estrategia y Planificación',
    description: 'Diseñamos una hoja de ruta a medida con objetivos claros y acciones concretas para alcanzarlos.',
    icon: <Compass className="h-8 w-8 text-primary-foreground" aria-hidden="true" />,
  },
  {
    step: 3,
    title: 'Implementación y Desarrollo',
    description: 'Ejecutamos la estrategia con las mejores prácticas, desde la optimización SEO hasta el desarrollo de código.',
    icon: <Code className="h-8 w-8 text-primary-foreground" aria-hidden="true" />,
  },
  {
    step: 4,
    title: 'Medición y Optimización',
    description: 'Monitorizamos los resultados, analizamos los datos y ajustamos la estrategia para una mejora continua.',
    icon: <TrendingUp className="h-8 w-8 text-primary-foreground" aria-hidden="true" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Nuestra Metodología de Trabajo
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Un proceso probado en 4 fases que garantiza resultados transparentes y efectivos.
          </p>
        </motion.div>
        
        <div className="mt-20">
          <motion.div 
            className="relative flex flex-col items-start justify-between gap-16 md:flex-row md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* The connecting line for desktop */}
            <div className="absolute left-0 top-10 hidden h-1 w-full rounded-full bg-primary/30 md:block"></div>
            
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.step} 
                className="relative z-10 flex w-full flex-row items-start gap-6 text-left md:w-auto md:flex-col md:items-center md:gap-0 md:text-center"
                variants={itemVariants}
              >
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 border-primary bg-foreground shadow-lg">
                  {step.icon}
                </div>
                <div className="md:mt-6">
                  <h3 className="font-headline text-xl font-bold text-background">{step.title}</h3>
                  <p className="mt-2 text-sm text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
