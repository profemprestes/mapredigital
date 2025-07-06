// src/components/shared/CTASection.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos. La consulta inicial es gratuita y sin compromiso.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Link href="/contacto">
              Contáctanos y empecemos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
