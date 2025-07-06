'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Eye } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export function MissionVisionSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="h-full bg-card/60 text-center shadow-lg">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Transformar la manera en que las empresas interactúan con el mundo online, convirtiéndolas en líderes dentro de su nicho a través de estrategias digitales innovadoras, herramientas a medida y una consultoría basada en la transparencia y los resultados.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, delay: 0.2 }}
          >
            <Card className="h-full bg-card/60 text-center shadow-lg">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-3xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Ser el referente en innovación y estrategia digital en Uruguay, reconocido por impulsar el crecimiento sostenible de nuestros clientes a nivel global. Aspiramos a construir un futuro donde cualquier empresa, sin importar su tamaño, pueda competir en igualdad de condiciones en el ecosistema digital.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
