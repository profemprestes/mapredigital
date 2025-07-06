'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Home, Briefcase, Users, Mail, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio', icon: <Home className="h-5 w-5" /> },
  { href: '/servicios', label: 'Servicios', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/nosotros', label: 'Nosotros', icon: <Users className="h-5 w-5" /> },
  { href: '/contacto', label: 'Contacto', icon: <Mail className="h-5 w-5" /> },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full bg-foreground text-background shadow-lg"
    >
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo_Mapre.svg"
            alt="Mapre Digital Logo"
            width={140}
            height={40}
            className="h-auto transition-filter duration-300"
            data-ai-hint="company logo"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-2" onMouseLeave={() => setHoveredPath(pathname)}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseOver={() => setHoveredPath(link.href)}
              className={cn(
                "relative flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-background/80 transition-colors hover:text-background",
                pathname === link.href && 'text-background'
              )}
            >
              {link.icon}
              <span>{link.label}</span>
              {hoveredPath === link.href && (
                <motion.div
                  layoutId="header-underline"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="hidden rounded-full text-green-400 hover:bg-primary/50 hover:text-green-300 md:inline-flex">
                  <a href="https://wa.me/59897338241" target="_blank" rel="noopener noreferrer" aria-label="Chatea con nosotros por WhatsApp">
                    <FaWhatsapp className="h-6 w-6" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chatea con nosotros por WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              <Link href="/contacto">Solicitar Asesoría</Link>
            </Button>
          </motion.div>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú" className="text-background hover:bg-primary/50">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={isSheetOpen ? 'x' : 'menu'}
                      initial={{ rotate: isSheetOpen ? -90 : 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: isSheetOpen ? -90 : 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isSheetOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-card">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex h-full flex-col">
                  <ul className="flex flex-col items-start space-y-2 text-lg">
                    {navLinks.map((link) => (
                      <li key={link.href} className="w-full">
                        <Link
                          href={link.href}
                          onClick={() => setIsSheetOpen(false)}
                          className={cn(
                            "flex items-center gap-4 w-full rounded-md p-3 font-medium transition-colors",
                            pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'
                          )}
                        >
                          {link.icon}
                          <span>{link.label}</span>
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
    </motion.header>
  );
}
