'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Home,
  LayoutGrid,
  Users,
  MessageSquare,
  Target,
  Wrench,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
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

  return (
    <>
      <footer className="bg-foreground text-background/80 relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/Logo_Mapre.svg"
                  alt="Mapre Digital Logo"
                  width={150}
                  height={40}
                  className="h-auto w-auto object-contain brightness-0 invert"
                  data-ai-hint="company logo white"
                />
              </Link>
              <p className="text-sm">
                Impulsando tu negocio al siguiente nivel digital con estrategias y herramientas a medida.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-background">Navegación</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <Home className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <LayoutGrid className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Servicios</span>
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <Users className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Nosotros</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <MessageSquare className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-background">Nuestros Servicios</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/servicios#seo" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <Target className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Posicionamiento Web (SEO)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/servicios#tools" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <Wrench className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Herramientas a Medida</span>
                  </Link>
                </li>
                <li>
                  <Link href="/servicios#consulting" className="flex items-center gap-2 text-sm hover:text-background transition-colors">
                    <Lightbulb className="h-4 w-4 text-muted" aria-hidden="true" />
                    <span>Consultoría Digital</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-background">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted" aria-hidden="true" />
                  <a href="mailto:profematiasprestes@gmail.com" className="text-sm hover:text-background transition-colors">profematiasprestes@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted" aria-hidden="true" />
                  <a href="tel:+59897338241" className="text-sm hover:text-background transition-colors">+598 097 338 241</a>
                </li>
              </ul>
              <div className="mt-6 flex space-x-2">
                <Link href="https://www.facebook.com/MAPREUY" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-background/80 transition-colors hover:bg-primary/40 hover:text-background">
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://www.instagram.com/mapreuy/" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-background/80 transition-colors hover:bg-primary/40 hover:text-background">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-background/80 transition-colors hover:bg-primary/40 hover:text-background">
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-primary/40 pt-8 text-center">
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} Mapre Digital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {isVisible && (
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
              aria-label="Volver arriba"
            >
              <ArrowUp className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
      )}
    </>
  );
}
