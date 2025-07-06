
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo_mapre.jpg"
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
            <h3 className="text-lg font-semibold text-white">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-sm hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="#testimonials" className="text-sm hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-sm hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Nuestros Servicios</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/servicios#seo" className="text-sm hover:text-white transition-colors">Posicionamiento Web (SEO)</Link></li>
              <li><Link href="/servicios#tools" className="text-sm hover:text-white transition-colors">Herramientas a Medida</Link></li>
              <li><Link href="/servicios#consulting" className="text-sm hover:text-white transition-colors">Consultoría Digital</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:contacto@mapredigital.com" className="text-sm hover:text-white transition-colors">contacto@mapredigital.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <a href="tel:+34123456789" className="text-sm hover:text-white transition-colors">+34 123 456 789</a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Mapre Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
