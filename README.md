# Documentación del Proyecto: Mapre Digital

Este documento proporciona una descripción general de la arquitectura del frontend del proyecto "Mapre Digital". El objetivo es servir como una guía para los desarrolladores, detallando la estructura de las páginas, los componentes utilizados y la lógica de renderizado.

## Pila Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes de UI**: ShadCN UI
- **Animaciones**: Framer Motion
- **Iconos**: lucide-react
- **Gestión de Formularios**: React Hook Form & Zod

---

## Páginas Implementadas

A continuación, se detalla la estructura y propósito de cada página principal de la aplicación.

### Página de Inicio (`/`)

- **Archivo Principal**: `src/app/page.tsx`
- **Propósito**: Actúa como la landing page principal. Presenta la propuesta de valor de la empresa, resume los servicios, muestra testimonios y ofrece una herramienta de IA para la selección de planes.
- **Componentes Utilizados**:
  - `ParticlesBackground` (`src/components/page/particles-background.tsx`): Fondo animado interactivo.
  - `HeroSection` (`src/components/page/hero-section.tsx`): Sección de presentación principal.
  - `ServicesSection` (`src/components/page/services-section.tsx`): Resumen de los servicios ofrecidos.
  - `TestimonialsSection` (`src/components/page/testimonials-section.tsx`): Muestra testimonios de clientes.
  - `PlanAssistantSection` (`src/components/page/plan-assistant-section.tsx`): Contiene el formulario del asistente de IA.
- **Lógica y Tipo de Renderizado**:
  - La página y la mayoría de sus componentes son **Componentes de Cliente** (`'use client'`) para permitir animaciones fluidas con **Framer Motion** al cargar y al hacer scroll.
  - El componente `PlanAssistantForm` dentro de `PlanAssistantSection` utiliza `useActionState` para gestionar el estado de un formulario que se comunica con una **Server Action** para obtener sugerencias del asistente de IA.

### Página de Servicios (`/servicios`)

- **Archivo Principal**: `src/app/servicios/page.tsx`
- **Propósito**: Ofrece una descripción detallada de cada servicio, explica la metodología de trabajo de la empresa y finaliza con una llamada a la acción.
- **Componentes Utilizados**:
  - `HeroSection` (`src/components/services/HeroSection.tsx`): Encabezado específico para la página de servicios.
  - `DetailedServicesSection` (`src/components/services/DetailedServicesSection.tsx`): Detalla cada servicio con texto, listas de características e imágenes.
  - `WorkProcessSection` (`src/components/services/WorkProcessSection.tsx`): Muestra el proceso de trabajo en 4 pasos.
  - `CTASection` (`src/components/shared/CTASection.tsx`): Componente reutilizable de llamada a la acción.
- **Lógica y Tipo de Renderizado**:
  - La página es un **Componente de Servidor** por defecto.
  - Todos los subcomponentes de la sección son **Componentes de Cliente** (`'use client'`) para implementar animaciones de aparición con **Framer Motion** a medida que el usuario navega por la página.

### Página "Nosotros" (`/nosotros`)

- **Archivo Principal**: `src/app/nosotros/page.tsx`
- **Propósito**: Contar la historia de la marca (Brand Storytelling), presentando la misión, visión, al fundador y los valores fundamentales de la empresa.
- **Componentes Utilizados**:
  - `StoryHeroSection` (`src/components/about/StoryHeroSection.tsx`): Introduce la narrativa de la marca.
  - `MissionVisionSection` (`src/components/about/MissionVisionSection.tsx`): Presenta la misión y visión en dos columnas.
  - `FounderSection` (`src/components/about/FounderSection.tsx`): Dedicada al fundador de la empresa.
  - `ValuesSection` (`src/components/about/ValuesSection.tsx`): Muestra los valores de la empresa.
  - `CTASection` (`src/components/shared/CTASection.tsx`): Llamada a la acción para fomentar el contacto.
- **Lógica y Tipo de Renderizado**:
  - Al igual que la página de servicios, la página "Nosotros" es un **Componente de Servidor** compuesto por **Componentes de Cliente** (`'use client'`) que utilizan **Framer Motion** para animaciones y transiciones.

### Página de Contacto (`/contacto`)

- **Archivo Principal**: `src/app/contacto/page.tsx`
- **Propósito**: Proporcionar a los usuarios un medio para comunicarse con la empresa a través de un formulario de contacto y detalles de contacto directo.
- **Componentes Utilizados**:
  - `ContactForm` (`src/components/contact/ContactForm.tsx`): Formulario de contacto interactivo.
  - `ContactDetails` (`src/components/contact/ContactDetails.tsx`): Muestra información de contacto estática.
- **Lógica y Tipo de Renderizado**:
  - La página `page.tsx` es un **Componente de Cliente** para poder utilizar `framer-motion` en el layout principal.
  - `ContactForm` es un **Componente de Cliente** (`'use client'`) que utiliza **react-hook-form** para la gestión del estado y **zod** para la validación del esquema de datos del lado del cliente.
  - `ContactDetails` es un **Componente de Servidor**, ya que solo renderiza información estática sin interactividad del lado del cliente.
