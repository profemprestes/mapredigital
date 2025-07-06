'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const founderVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

export function FounderSection() {
  return (
    <section className="bg-foreground text-background py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative flex justify-center items-center"
            variants={founderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-96 w-80 max-w-sm mx-auto lg:max-w-none lg:mx-0">
               <div className="absolute -inset-2 bg-primary/30 rounded-2xl transform -rotate-3" />
               <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src="https://placehold.co/600x800.png"
                      alt="Matías Prestes, fundador de Mapre Digital"
                      fill
                      className="object-cover object-top"
                      data-ai-hint="professional headshot man"
                    />
               </div>
            </div>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-headline text-3xl font-bold text-background sm:text-4xl mb-4">Nuestro Fundador</h2>
            <h3 className="font-headline text-2xl font-bold text-primary">Matías Prestes</h3>
            <p className="mt-4 text-lg text-secondary">
              Con una pasión por la tecnología y un enfoque en resultados, Matías Prestes fundó Mapre Digital para desmitificar la complejidad del entorno digital y ofrecer soluciones claras y efectivas.
            </p>
            <p className="mt-4 text-lg text-secondary">
              Su filosofía se centra en la colaboración estrecha con cada cliente, entendiendo que el éxito digital no es un producto, sino un proceso de mejora continua. Cree firmemente que las herramientas adecuadas y una estrategia bien ejecutada son la clave para desbloquear el verdadero potencial de cualquier negocio en el mundo online.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
