'use client';

import { motion } from 'framer-motion';
import { Rocket, Eye } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function MissionVisionSection() {
  return (
    <motion.section 
      className="bg-card py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestra Filosofía</h2>
            <p className="mt-4 text-lg text-muted-foreground">Los dos pilares que guían nuestro propósito y dirección.</p>
        </div>
        
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start md:gap-8">
          <motion.div className="flex flex-col items-center md:w-1/2" variants={itemVariants}>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Misión</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Transformar la manera en que las empresas interactúan con el mundo online, convirtiéndolas en líderes dentro de su nicho a través de estrategias digitales innovadoras, herramientas a medida y una consultoría basada en la transparencia y los resultados.
            </p>
          </motion.div>

          <Separator orientation="vertical" className="hidden h-auto self-stretch md:block" />

          <motion.div className="flex flex-col items-center md:w-1/2" variants={itemVariants}>
             <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Eye className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Visión</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Ser el referente en innovación y estrategia digital en Uruguay, reconocido por impulsar el crecimiento sostenible de nuestros clientes a nivel global. Aspiramos a construir un futuro donde cualquier empresa, sin importar su tamaño, pueda competir en igualdad de condiciones en el ecosistema digital.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
