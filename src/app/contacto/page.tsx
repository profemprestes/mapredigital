import { ContactPageClient } from '@/components/contact/ContactPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de tu Proyecto',
  description: 'Contacta con Mapre Digital para una consulta gratuita. Envíanos un mensaje a través de nuestro formulario o encuéntranos en profematiasprestes@gmail.com.',
  keywords: ['contacto mapre digital', 'consulta gratuita', 'asesoría digital', 'email de contacto', 'teléfono mapre digital'],
  openGraph: {
    url: '/contacto',
  }
};

export default function ContactoPage() {
  return <ContactPageClient />;
}
