'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export function HeroSection() {
    return (
        <section className="py-24 md:py-32 bg-white">
          <motion.div 
            className="container text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Impulsamos tu Negocio al Siguiente Nivel Digital
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.
            </motion.p>
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Link href="#plan-assistant">Solicita tu Consulta Gratuita</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
    );
}
