import type { Metadata } from 'next';
import { ServicesPageClient } from '@/components/services/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Servicios de SEO, Desarrollo y Consultoría Digital',
  description: 'Ofrecemos posicionamiento web (SEO) estratégico, desarrollo de herramientas a medida y consultoría digital integral para potenciar tu éxito en el mundo online.',
  keywords: ['posicionamiento web uruguay', 'auditoría seo', 'desarrollo de software a medida', 'consultoría digital integral', 'optimización de conversión', 'cro'],
  openGraph: {
    url: '/servicios',
  }
};


export default function ServiciosPage() {
  return <ServicesPageClient />;
}
