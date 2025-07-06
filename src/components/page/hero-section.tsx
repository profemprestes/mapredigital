'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '@/components/page/particles-background';

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
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint
    },
  },
};

export function HeroSection() {
    return (
        <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <ParticlesBackground />
          </div>
          <motion.div 
            className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center lg:text-left">
                <motion.h1 
                  className="font-headline text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl"
                  variants={itemVariants}
                >
                  Impulsamos tu Negocio al Siguiente Nivel Digital
                </motion.h1>
                <motion.p 
                  className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0"
                  variants={itemVariants}
                >
                  Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.
                </motion.p>
                <motion.div 
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                  variants={itemVariants}
                >
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-xl sm:w-auto">
                    <Link href="#plan-assistant">Solicita tu Consulta Gratuita</Link>
                  </Button>
                   <Button asChild size="lg" variant="outline" className="w-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
                    <Link href="/servicios">Nuestros Servicios</Link>
                  </Button>
                </motion.div>
            </div>
            
            <motion.div 
              className="hidden lg:flex justify-center items-center"
              variants={imageVariants}
            >
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/Logo_Mapre.svg"
                  alt="Logo animado de Mapre Digital"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                  data-ai-hint="company logo"
                />
              </motion.div>
            </motion.div>

          </motion.div>
        </section>
    );
}
