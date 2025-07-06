'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Target, Code, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'seo',
    title: 'Posicionamiento Web (SEO) Estratégico',
    description: 'Optimizamos tu sitio web para que alcance las primeras posiciones en los motores de búsqueda. No se trata solo de atraer tráfico, sino de atraer al tráfico correcto que se convierta en cliente. Analizamos tu mercado, tu competencia y creamos una estrategia a largo plazo para un crecimiento sostenible.',
    features: [
      'Auditoría SEO Completa y Análisis de Competencia',
      'Optimización On-Page y Técnica Exhaustiva',
      'Estrategia de Link Building de Calidad y Sostenible',
      'Creación de Contenido Optimizado para SEO',
      'Reportes de Rendimiento Mensuales y Transparentes',
    ],
    icon: <Target className="h-24 w-24 text-primary" aria-hidden="true" />,
    bgColor: 'bg-secondary/20',
  },
  {
    id: 'tools',
    title: 'Desarrollo de Herramientas Online a Medida',
    description: 'Transformamos tus procesos manuales y complejos en herramientas digitales eficientes y fáciles de usar. Desde calculadoras de precios interactivas hasta sistemas de gestión de clientes (CRM) personalizados, desarrollamos soluciones que ahorran tiempo, reducen errores y mejoran la experiencia de tus usuarios.',
    features: [
      'Análisis de Requerimientos y Diseño de Solución',
      'Desarrollo Frontend y Backend Robusto',
      'Integración con APIs y Servicios de Terceros',
      'Diseño de Interfaz Intuitiva (UI/UX)',
      'Soporte y Mantenimiento Continuo',
    ],
    icon: <Code className="h-24 w-24 text-primary" aria-hidden="true" />,
    bgColor: 'bg-background',
  },
  {
    id: 'consulting',
    title: 'Consultoría Digital Integral',
    description: 'Te acompañamos en tu transformación digital, actuando como tu socio estratégico. Analizamos tu modelo de negocio y te ofrecemos una hoja de ruta clara para optimizar tu presencia online, mejorar tus conversiones y tomar decisiones basadas en datos. Te ayudamos a navegar el complejo ecosistema digital con confianza.',
    features: [
      'Análisis de Presencia Digital y Oportunidades',
      'Definición de KPIs y Objetivos Medibles',
      'Estrategia de Marketing de Contenidos y Redes Sociales',
      'Optimización de la Tasa de Conversión (CRO)',
      'Capacitación y Acompañamiento para tu Equipo',
    ],
    icon: <MessageCircle className="h-24 w-24 text-primary" aria-hidden="true" />,
    bgColor: 'bg-secondary/20',
  },
];

const sectionVariants = {
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
    <div id="services-detailed">
      {services.map((service) => (
        <motion.section
          id={service.id}
          key={service.id}
          className={`py-16 md:py-24 ${service.bgColor}`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="flex justify-center lg:col-span-1">
                {service.icon}
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.description}
              </p>
              <h3 className="font-headline mt-8 text-xl font-semibold text-foreground">
                Características Clave
              </h3>
              <ul className="mt-4 space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
