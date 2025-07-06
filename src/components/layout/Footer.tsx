'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemHover = {
    y: -2,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <>
      <motion.footer 
        className="bg-foreground text-background/80 relative"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo & Description */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/Logo_Mapre.svg"
                  alt="Mapre Digital Logo"
                  width={150}
                  height={40}
                  className="h-auto object-contain brightness-0 invert"
                  data-ai-hint="company logo white"
                />
              </Link>
              <p className="text-sm">
                Impulsando tu negocio al siguiente nivel digital con estrategias y herramientas a medida.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-background">Navegación</h3>
              <ul className="mt-4 space-y-2">
                <li><motion.div whileHover={itemHover}><Link href="/" className="text-sm hover:text-background transition-colors">Inicio</Link></motion.div></li>
                <li><motion.div whileHover={itemHover}><Link href="/servicios" className="text-sm hover:text-background transition-colors">Servicios</Link></motion.div></li>
                <li><motion.div whileHover={itemHover}><Link href="/nosotros" className="text-sm hover:text-background transition-colors">Nosotros</Link></motion.div></li>
                <li><motion.div whileHover={itemHover}><Link href="/contacto" className="text-sm hover:text-background transition-colors">Contacto</Link></motion.div></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold text-background">Nuestros Servicios</h3>
              <ul className="mt-4 space-y-2">
                <li><motion.div whileHover={itemHover}><Link href="/servicios#seo" className="text-sm hover:text-background transition-colors">Posicionamiento Web (SEO)</Link></motion.div></li>
                <li><motion.div whileHover={itemHover}><Link href="/servicios#tools" className="text-sm hover:text-background transition-colors">Herramientas a Medida</Link></motion.div></li>
                <li><motion.div whileHover={itemHover}><Link href="/servicios#consulting" className="text-sm hover:text-background transition-colors">Consultoría Digital</Link></motion.div></li>
              </ul>
            </div>

            {/* Column 4: Contact & Socials */}
            <div>
              <h3 className="text-lg font-semibold text-background">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <motion.a whileHover={itemHover} href="mailto:contacto@mapredigital.com" className="text-sm hover:text-background transition-colors">contacto@mapredigital.com</motion.a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <motion.a whileHover={itemHover} href="tel:+34123456789" className="text-sm hover:text-background transition-colors">+34 123 456 789</motion.a>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <motion.div whileHover={itemHover}>
                  <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-background transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </motion.div>
                <motion.div whileHover={itemHover}>
                  <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-background transition-colors">
                    <Instagram className="h-6 w-6" />
                  </Link>
                </motion.div>
                <motion.div whileHover={itemHover}>
                  <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-background transition-colors">
                    <Twitter className="h-6 w-6" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-primary pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mapre Digital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </motion.footer>

      <div className="fixed bottom-6 right-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
              aria-label="Volver arriba"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>
      </div>
    </>
  );
}