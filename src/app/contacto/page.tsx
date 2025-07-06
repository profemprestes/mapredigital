import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Mail } from 'lucide-react';
import { ContactDetails } from '@/components/contact/ContactDetails';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ContactForm = dynamic(() => import('@/components/contact/ContactForm').then(mod => mod.ContactForm));

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de tu Proyecto',
  description: 'Contacta con Mapre Digital para una consulta gratuita. Envíanos un mensaje a través de nuestro formulario o encuéntranos en profematiasprestes@gmail.com.',
  keywords: ['contacto mapre digital', 'consulta gratuita', 'asesoría digital', 'email de contacto', 'teléfono mapre digital'],
  openGraph: {
    url: '/contacto',
  }
};

export default function ContactoPage() {
  return (
    <div className="bg-background">
      <PageHero 
        title="¿Listo para Empezar?"
        subtitle="Ponte en contacto con nosotros. Estamos aquí para responder tus preguntas y dar el primer paso juntos."
        icon={Mail}
        className="min-h-[40vh] py-16 md:py-20"
      />
      <div className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <ContactForm />
            
            {/* Wrapper div for ContactDetails - animation removed to favor server component rendering */}
            <div className="mt-8 lg:mt-0">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
