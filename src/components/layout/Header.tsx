
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Home, Briefcase, Users, Mail, Menu, X, Newspaper } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/servicios', label: 'Servicios', icon: Briefcase },
  { href: '/nosotros', label: 'Nosotros', icon: Users },
  { href: '/noticias', label: 'Noticias', icon: Newspaper },
  { href: '/contacto', label: 'Contacto', icon: Mail },
];

export function Header({ isHomePage }: { isHomePage: boolean }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground text-background shadow-lg">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Portada_MAFRE.svg"
            alt="Mapre Digital Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority={isHomePage}
            data-ai-hint="company logo white"
          />
           <div>
              <p className="font-headline font-bold text-lg leading-tight">Mapre Digital</p>
              <p className="hidden md:block text-xs text-background/80 leading-tight">Impulsamos tu Negocio al Siguiente Nivel Digital</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-background/80 transition-colors hover:text-background",
                  isActive && 'text-background'
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="hidden rounded-full text-green-400 hover:bg-primary/50 hover:text-green-300 md:inline-flex">
                  <a href="https://wa.me/59897338241" target="_blank" rel="noopener noreferrer" aria-label="Chatea con nosotros por WhatsApp">
                    <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chatea con nosotros por WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button asChild className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 shadow-lg border border-background/20">
            <Link href="/contacto">Solicitar Asesoría</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú" className="text-background hover:bg-primary/50">
                  {isSheetOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-card p-0 flex flex-col">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                  <Link href="/" className="flex items-center justify-center text-center gap-3" onClick={() => setIsSheetOpen(false)}>
                    <Image
                      src="/Portada_MAFRE.svg"
                      alt="Mapre Digital Logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                      data-ai-hint="company logo"
                    />
                     <div>
                        <p className="font-headline font-bold text-lg leading-tight">Mapre Digital</p>
                        <p className="text-xs text-foreground/80 leading-tight">Impulsamos tu Negocio al Siguiente Nivel Digital</p>
                    </div>
                  </Link>
                </SheetHeader>
                <div className="flex-1 flex flex-col p-4 overflow-y-auto">
                  <ul className="flex flex-col items-start space-y-2 text-lg">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.href} className="w-full">
                          <Link
                            href={link.href}
                            onClick={() => setIsSheetOpen(false)}
                            className={cn(
                              "flex items-center gap-4 w-full rounded-md p-3 font-medium transition-colors",
                              pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'
                            )}
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-auto space-y-4 pt-6">
                    <Button asChild variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">
                        <a href="https://wa.me/59897338241" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                            <span>Chatea por WhatsApp</span>
                        </a>
                    </Button>
                    <Button asChild size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
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
