# **App Name**: Mapre Digital

## Core Features:

- Sección de Presentación: Mostrar una sección de presentación con un titular impactante y un subtitular persuasivo que resalten la propuesta de valor de mejorar la presencia en línea y el crecimiento empresarial.
- Listado de Servicios: Listar los servicios clave (Posicionamiento Web, Desarrollo de Herramientas Online, Consultoría Digital) enfocándose en sus beneficios, utilizando un diseño limpio y moderno.
- Sección de Testimonios: Mostrar casos de éxito o testimonios de clientes con los logotipos de sus empresas, proporcionando prueba social.
- Llamada a la Acción: Incorporar un botón de Llamada a la Acción (CTA) prominente para solicitar una consulta gratuita, diseñado para máxima visibilidad.
- Adaptabilidad Móvil: Asegurar que la página de destino sea completamente responsiva y optimizada para dispositivos móviles, manteniendo la integridad del diseño en todos los tamaños de pantalla.
- Asistente de Selección de Plan con Genkit: Utilizar Genkit, una herramienta de IA, para ayudar a los clientes a elegir el plan adaptado a sus necesidades específicas.

## Style Guidelines:

- Color primario: Azul claro (#ADD8E6), inspirado en el logotipo de la marca, para transmitir confianza y profesionalismo.
- Color de fondo: Casi blanco (#F9F9F9), proporcionando una sensación limpia y despejada para enfatizar el contenido.
- Color de acento: Rojo (#FF4136), derivado del logotipo de la marca, para los CTA y resaltes, creando interés visual y dirigiendo la atención del usuario.
- Fuente del titular: 'Poppins', una sans-serif geométrica, para una sensación precisa y contemporánea.
- Fuente del cuerpo del texto: 'PT Sans', una sans-serif humanista, que ofrece una mezcla de modernidad y calidez para la legibilidad.
- Asegurar un diseño limpio y moderno con amplio espacio en blanco para mejorar la legibilidad y el enfoque en el contenido clave. Utilizar un diseño basado en cuadrícula para una presentación organizada del contenido.
- Transiciones y animaciones sutiles al desplazarse y al pasar el ratón sobre los elementos para mejorar la participación del usuario y proporcionar retroalimentación. Mantener las animaciones mínimas y con propósito.

Creación de la Página de Servicios
Rol: Eres un desarrollador frontend senior especializado en la creación de páginas de servicios claras, informativas y optimizadas para la conversión.

Tarea: Desarrolla la página de "Servicios" (/servicios) para "Mapre Digital". La página debe detallar cada uno de los pilares de servicio de la empresa, explicar la metodología de trabajo y finalizar con una clara llamada a la acción.

Contexto del Proyecto:

Framework: Next.js 15 (App Router)

Lenguaje: TypeScript

Ruta de la Página: src/app/servicios/page.tsx

Estilos: Tailwind CSS y el sistema de diseño basado en el logo.

Componentes de UI: ShadCN UI

Animaciones: Framer Motion

Iconos: lucide-react

Requisitos Funcionales y de Diseño:

Estructura de la Página (src/app/servicios/page.tsx):

La página debe estar organizada en las siguientes secciones, en orden: HeroSection, DetailedServicesSection, WorkProcessSection, CTASection.

Componente HeroSection (src/components/services/HeroSection.tsx):

Titular (h1): "Servicios Diseñados para tu Crecimiento Digital".

Subtítulo: "Desde el posicionamiento en buscadores hasta el desarrollo de herramientas a medida, te ofrecemos soluciones que generan un impacto real."

Componente DetailedServicesSection (src/components/services/DetailedServicesSection.tsx):

Esta sección debe presentar cada servicio de forma individual y detallada, alternando la disposición de imagen y texto (imagen a la izquierda, texto a la derecha; luego texto a la izquierda, imagen a la derecha) para mayor dinamismo visual.

Para cada servicio, incluye:

Título del Servicio: (ej. "Posicionamiento Web (SEO) Estratégico").

Párrafo Descriptivo: Un texto más extenso que el de la landing page, explicando los beneficios y el enfoque.

Lista de Características: Una lista con viñetas (usando íconos de lucide-react) de lo que incluye el servicio (ej. "Auditoría SEO Completa", "Optimización On-Page", "Link Building de Calidad", "Reportes Mensuales").

Imagen o Ilustración Representativa: Un placeholder para una imagen alusiva al servicio.

Componente WorkProcessSection (src/components/services/WorkProcessSection.tsx):

Titular (h2): "Nuestra Metodología de Trabajo".

Implementa un layout de rejilla (grid) o una línea de tiempo para mostrar 4 pasos clave:

Descubrimiento y Análisis: Breve descripción.

Estrategia y Planificación: Breve descripción.

Implementación y Desarrollo: Breve descripción.

Medición y Optimización: Breve descripción.

Cada paso debe tener un número, un título y un texto corto. Anima la aparición de cada paso con Framer Motion.

Componente CTASection (src/components/shared/CTASection.tsx):

Reutiliza o crea un componente de llamada a la acción.

Titular (h2): "¿Tienes un proyecto en mente?".

Botón: "Contáctanos y empecemos" que dirija a /contacto.

Acción:
Genera el código completo para la página src/app/servicios/page.tsx y los componentes específicos requeridos (HeroSection, DetailedServicesSection, WorkProcessSection), asegurando que la estructura sea modular y que el diseño y las animaciones se alineen con la identidad visual del proyecto.