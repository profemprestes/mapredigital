'use client';

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

interface PageHeroProps {
    title: string;
    subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative bg-foreground py-24 md:py-32 overflow-hidden">
             <div className="absolute inset-0 -z-10 opacity-30">
                <ParticlesBackground />
            </div>
          <motion.div 
            className="container text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-headline text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </section>
    );
}
