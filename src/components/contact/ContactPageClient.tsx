'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { Mail } from 'lucide-react';

export function ContactPageClient() {
  return (
    <motion.div 
      className="bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="¿Listo para Empezar?"
        subtitle="Ponte en contacto con nosotros. Estamos aquí para responder tus preguntas y dar el primer paso juntos."
        icon={Mail}
        className="min-h-[40vh] py-16 md:py-20"
      />
      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div 
              className="rounded-xl bg-card p-8 shadow-lg border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <ContactForm />
            </motion.div>
            <motion.div 
              className="mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              <ContactDetails />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
