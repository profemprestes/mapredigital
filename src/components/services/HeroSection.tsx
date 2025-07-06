// src/components/services/HeroSection.tsx
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

export function HeroSection() {
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
              Servicios Diseñados para tu Crecimiento Digital
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Desde el posicionamiento en buscadores hasta el desarrollo de herramientas a medida, te ofrecemos soluciones que generan un impacto real.
            </motion.p>
          </motion.div>
        </section>
    );
}
