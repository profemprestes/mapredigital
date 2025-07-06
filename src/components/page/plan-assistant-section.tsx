'use client';

import { PlanAssistantForm } from './plan-assistant-form';
import { motion } from 'framer-motion';

export function PlanAssistantSection() {
    return (
        <section id="plan-assistant" className="py-16 md:py-24 bg-white">
          <div className="container">
            <motion.div 
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">¿No sabes qué plan elegir?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nuestro asistente con IA te ayudará a encontrar el plan perfecto para tus necesidades. Responde unas pocas preguntas y obtén una recomendación personalizada al instante.
              </p>
            </motion.div>
            <motion.div 
              className="mt-12 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PlanAssistantForm />
            </motion.div>
          </div>
        </section>
    );
}
