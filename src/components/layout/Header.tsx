
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => isSheetOpen && setIsSheetOpen(false)}>
          <Image
            src="/assets/logo_mapre.jpg"
            alt="Mapre Digital Logo"
            width={140}
            height={40}
            className="h-auto"
            data-ai-hint="company logo"
            priority
          />
        </Link>
        
        {/* Desktop Navigation (Centrado absoluto) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contacto">Solicitar Asesoría</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/" className="flex items-center" onClick={() => setIsSheetOpen(false)}>
                            <Image
                                src="/assets/logo_mapre.jpg"
                                alt="Mapre Digital Logo"
                                width={140}
                                height={40}
                                className="h-auto"
                                data-ai-hint="company logo"
                            />
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                  <div className="mt-8 flex h-full flex-col">
                    <ul className="flex flex-col items-start space-y-6 text-lg">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setIsSheetOpen(false)}
                              className="font-medium text-foreground/80 transition-colors hover:text-foreground"
                            >
                              {link.label}
                            </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pb-8">
                       <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contacto" onClick={() => setIsSheetOpen(false)}>Solicitar Asesoría</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>

      </div>
    </header>
  );
}
