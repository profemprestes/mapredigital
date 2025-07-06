'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function StoryHeroSection() {
    return (
        <section className="bg-background py-24 md:py-32">
          <motion.div 
            className="container text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              Somos tu Socio Estratégico en el Mundo Digital
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Fundada por Matías Prestes, el nombre 'Mapre' fusiona la identidad del fundador con la esencia de una propuesta de valor basada en la Maximización y la Presencia digital estratégica. Nacimos para desmitificar la complejidad del entorno online y ofrecer resultados tangibles.
            </motion.p>
          </motion.div>
        </section>
    );
}
