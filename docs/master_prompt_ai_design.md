# Mega Prompt / Prompt Maestro para Diseño con IA

Este es el Prompt Maestro que deberás utilizar al iniciar un nuevo proyecto o repositorio con un asistente de IA (como yo). Su objetivo es automatizar la extracción de la identidad corporativa y generar todos los prompts necesarios para crear los activos gráficos de la empresa utilizando IAs de generación de imágenes (Midjourney, DALL-E, etc.).

---

### Instrucciones de Uso

1.  Copia todo el texto que se encuentra debajo de la línea divisoria ("---").
2.  Pégalo como tu **primer mensaje** al iniciar un chat con el asistente de IA en el nuevo repositorio.
3.  El asistente se encargará automáticamente de leer el código, extraer colores, completar el briefing creativo y generar la estructura de carpetas `docs/design_prompts/` con todos los `.md` listos para usar.

---

### [COPIA A PARTIR DE AQUÍ]

**Rol y Objetivo:** Actúa como un Director de Arte y Analista de Sistemas Senior. Tu objetivo es analizar la base de código de este proyecto (repositorio) para extraer la identidad visual, los valores y la misión de la empresa, y generar automáticamente una estructura de documentación completa con prompts paramétricos para IAs generadoras de imágenes (DALL-E 3, Midjourney, etc.).

**PASO 1: Análisis del Repositorio**
Escanea el repositorio actual. Busca archivos como `README.md`, archivos de configuración de CSS (como `tailwind.config.js`, `globals.css`, `variables.css`), archivos `package.json` y documentos descriptivos de la empresa (como `empresa.md` o similares) para obtener contexto.

**PASO 2: Completar el Briefing Creativo**
A partir de la información extraída del código y los textos, completa internamente la siguiente plantilla de briefing:

1.  **Identidad Básica:**
    *   Nombre de la marca (Exacto como aparece en el código/repo).
    *   Slogan (Si existe o puede inferirse).
    *   Sector o industria.
2.  **Personalidad y Valores:**
    *   Tres adjetivos que definen la empresa.
    *   ¿Qué problema principal resuelve? (Propuesta de valor).
    *   Tono de comunicación (Inferido de los textos de la UI o README).
3.  **Público Objetivo:**
    *   ¿Quién es su cliente ideal?
    *   ¿Qué queremos que sientan al ver los recursos visuales y el logo?
4.  **Preferencias Visuales (Datos Técnicos del Código):**
    *   Extrae la paleta de colores exacta (Códigos HEX) identificando: Color de Fondo (Background), Color Primario (Foreground/Texto), Color de Acento (Primary/Accent).
    *   Estilo visual predominante (Minimalista, B2B, Lúdico, etc.).

**PASO 3: Generación de Archivos y Prompts (Acción)**
Una vez completado el análisis, **crea automáticamente la carpeta `docs/design_prompts/`** en el directorio raíz del proyecto y genera dentro los siguientes archivos Markdown (`.md`).

Cada archivo debe contener prompts detallados y listos para copiar y pegar en herramientas de IA (ej: Midjourney v6 / DALL-E 3). Cada prompt debe inyectar de manera explícita la paleta de colores extraída en el PASO 2 y el nombre de la empresa.

Archivos a crear:
*   **`00_global_brand_context.md`:** (El System Prompt global. Contiene el "Brand Book" simplificado con los colores HEX, valores y el estilo visual general de la marca para que sirva de base).
*   **`01_logo_and_favicon.md`:** (Prompts para el logotipo principal, versión en negativo/dark mode y un favicon geométrico 1:1).
*   **`02_web_assets.md`:** (Prompts para el fondo del 'Hero Section' panorámico 16:9 y al menos 2 ilustraciones 3D/isométricas para tarjetas de los servicios principales identificados en el repo).
*   **`03_social_media.md`:** (Prompts para banners de LinkedIn/Facebook, fondos para Historias de Instagram orientados a llamadas a la acción, y fondos de diseño limpio para posts cuadrados 1:1 donde escribir testimonios).
*   **`04_corporate_identity.md`:** (Prompts para mockups fotorealistas de tarjetas de presentación B2B, diseño base para una firma de email corporativa y portada para documentos institucionales A4).

**PASO 4: Confirmación**
No me imprimas el contenido de los archivos en el chat. Simplemente crea los archivos en el sistema, dame un breve resumen del briefing extraído (Paso 2) para confirmar que entendiste la marca correctamente, y avísame cuando los archivos `.md` estén listos en la carpeta `docs/design_prompts/`.

### [FIN DE LA COPIA]