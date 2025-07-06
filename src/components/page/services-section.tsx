'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Code, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Posicionamiento Web",
      description: "Aumentamos tu visibilidad en buscadores para atraer más clientes potenciales y superar a tu competencia.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo de Herramientas Online",
      description: "Creamos soluciones a medida, desde calculadoras interactivas hasta CRMs, para optimizar tus procesos.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
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
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-24 bg-background">
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
              className="mt-12 grid gap-8 md:grid-cols-3"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                >
                  <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary bg-card/50">
                    <CardHeader className="items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
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
