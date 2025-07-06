// src/components/services/DetailedServicesSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Posicionamiento Web (SEO) Estratégico',
    description: 'Optimizamos tu sitio web para que alcance las primeras posiciones en los motores de búsqueda. No se trata solo de atraer tráfico, sino de atraer al tráfico correcto que se convierta en cliente. Analizamos tu mercado, tu competencia y creamos una estrategia a largo plazo para un crecimiento sostenible.',
    features: [
      'Auditoría SEO Completa y Análisis de Competencia',
      'Optimización On-Page y Técnica Exhaustiva',
      'Estrategia de Link Building de Calidad y Sostenible',
      'Creación de Contenido Optimizado para SEO',
      'Reportes de Rendimiento Mensuales y Transparentes',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'seo strategy analytics',
  },
  {
    title: 'Desarrollo de Herramientas Online a Medida',
    description: 'Transformamos tus procesos manuales y complejos en herramientas digitales eficientes y fáciles de usar. Desde calculadoras de precios interactivas hasta sistemas de gestión de clientes (CRM) personalizados, desarrollamos soluciones que ahorran tiempo, reducen errores y mejoran la experiencia de tus usuarios.',
    features: [
      'Análisis de Requerimientos y Diseño de Solución',
      'Desarrollo Frontend y Backend Robusto',
      'Integración con APIs y Servicios de Terceros',
      'Diseño de Interfaz Intuitiva (UI/UX)',
      'Soporte y Mantenimiento Continuo',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'web development code',
  },
  {
    title: 'Consultoría Digital Integral',
    description: 'Te acompañamos en tu transformación digital, actuando como tu socio estratégico. Analizamos tu modelo de negocio y te ofrecemos una hoja de ruta clara para optimizar tu presencia online, mejorar tus conversiones y tomar decisiones basadas en datos. Te ayudamos a navegar el complejo ecosistema digital con confianza.',
    features: [
      'Análisis de Presencia Digital y Oportunidades',
      'Definición de KPIs y Objetivos Medibles',
      'Estrategia de Marketing de Contenidos y Redes Sociales',
      'Optimización de la Tasa de Conversión (CRO)',
      'Capacitación y Acompañamiento para tu Equipo',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'digital consulting meeting',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function DetailedServicesSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
              index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-8 space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative order-1 h-80 w-full overflow-hidden rounded-xl shadow-xl ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover"
                data-ai-hint={service.dataAiHint}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
