'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Code, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
      icon: <Target className="h-12 w-12 text-primary" aria-hidden="true" />,
      title: "Posicionamiento Web",
      description: "Aumentamos tu visibilidad en buscadores para atraer más clientes potenciales y superar a tu competencia.",
    },
    {
      icon: <Code className="h-12 w-12 text-primary" aria-hidden="true" />,
      title: "Desarrollo de Herramientas Online",
      description: "Creamos soluciones a medida, desde calculadoras interactivas hasta CRMs, para optimizar tus procesos.",
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-primary" aria-hidden="true" />,
      title: "Consultoría Digital",
      description: "Te guiamos con estrategias efectivas para asegurar que cada paso en el mundo digital sea un éxito.",
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

export function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Soluciones diseñadas para potenciar tu éxito en el mundo digital.
              </p>
            </motion.div>
            <motion.div 
              className="mt-16 grid gap-8 md:grid-cols-3"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                >
                  <Card className="h-full text-center transition-all duration-300 bg-card border-2 border-transparent group-hover:border-primary group-hover:shadow-2xl group-hover:-translate-y-2">
                    <CardHeader className="items-center pt-8">
                      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground px-8 pb-8">
                      {service.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    );
}
