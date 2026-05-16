---
colors:
  background: "#f9f9f9"
  foreground: "#1e3957"
  primary: "#add8e6"
  primary-foreground: "#0e1c3e"
  secondary: "#f1f5f9"
  secondary-foreground: "#1e3957"
  accent: "#ff4136"
  accent-foreground: "#fafafa"
  destructive: "#ef4444"
  destructive-foreground: "#fafafa"
  muted: "#f1f5f9"
  muted-foreground: "#64748b"
  border: "#e2e8f0"
  input: "#e2e8f0"
  ring: "#1e3957"
  card: "#ffffff"
  card-foreground: "#1e3957"
  popover: "#ffffff"
  popover-foreground: "#1e3957"
typography:
  font-body:
    family: "var(--font-pt-sans), sans-serif"
    weights: [400, 700]
  font-headline:
    family: "var(--font-poppins), sans-serif"
    weights: [700, 900]
spacing:
  radius-lg: "var(--radius)"
  radius-md: "calc(var(--radius) - 2px)"
  radius-sm: "calc(var(--radius) - 4px)"
---

## Filosofía de Diseño

La identidad visual de **Mapre Digital** está estructurada en torno a los valores fundamentales de la empresa: innovación constante, compromiso absoluto y transparencia radical. La misión es ser un socio estratégico y transparente para el crecimiento digital sostenible, transformando la presencia online de las empresas.

### Paleta de Colores
- **Foreground (`#1e3957`)**: Un azul oscuro fuerte y profesional que transmite seguridad y autoridad técnica. Se utiliza de manera extensa en textos primarios y elementos de encabezados.
- **Primary (`#add8e6`)**: Un azul claro que aporta un contraste accesible e innovador. Es el hilo conductor que guía las interacciones sin abrumar visualmente.
- **Accent (`#ff4136`)**: Un rojo enérgico diseñado específicamente para llamadas a la acción críticas (Call To Action - CTA). Actúa como punto focal que impulsa la acción en momentos clave del usuario.
- **Background / Superficies (`#f9f9f9`, `#ffffff`, `#f1f5f9`)**: Espacios limpios y generosos para transmitir claridad y transparencia en el desarrollo del proceso y en la entrega de resultados, facilitando la legibilidad.

### Tipografía
- **Headline (`Poppins`)**: Se usa para todos los títulos y encabezados. Su morfología gruesa y moderna (pesos 700 y 900) refuerza la idea de solidez, liderazgo y posicionamiento firme.
- **Body (`PT Sans`)**: Tipografía con alta legibilidad, diseñada para ser funcional y limpia. Representa la transparencia radical y la claridad comunicacional en las explicaciones y servicios técnicos.

## Reglas de Componentes (Component Guidelines)

### Botones (Buttons)
- **Primary Buttons:** Deben utilizar el color `primary` (`#add8e6`) con texto `primary-foreground` (`#0e1c3e`). Su objetivo es guiar las acciones naturales del flujo de trabajo (e.g., "Siguiente", "Aceptar").
- **Accent / Call-to-Action (CTA):** Deben utilizar el color `accent` (`#ff4136`) con texto contrastante claro. Destinados únicamente a acciones de alta conversión (e.g., "Contactar Ahora", "Pedir Presupuesto").
- **Secondary Buttons:** Deben usar fondos sutiles (`secondary` `#f1f5f9`) para interacciones menos prioritarias.
- **Bordes:** Todos los botones deben respetar el radio de borde establecido (`.rounded-md` o similar dependiente del `var(--radius)`).

### Tarjetas (Cards)
- Las tarjetas (`.card`) deben usar fondo blanco (`#ffffff`) en temas claros y tener un borde sutil (`border: #e2e8f0`) que enmarque el contenido, separándolo limpia y lógicamente del fondo global (`#f9f9f9`).
- Su objetivo principal es empaquetar servicios ("Posicionamiento Web", "Herramientas a Medida") o testimonios, dando protagonismo al contenido.

### Formularios y Entradas (Inputs)
- Los campos de entrada (`.input`) deben tener bordes claros (`#e2e8f0`) y fondos transparentes o acordes a la superficie para no competir con los CTAs.
- El focus ring debe utilizar el color `ring` (`#1e3957`), mostrando una confirmación táctil y profesional cuando un campo está activo.

### Espaciado y Jerarquía
- Las páginas de contenido, en especial las relacionadas con SEO, Consultoría Digital y Servicios, utilizarán espacios generosos (`gap`, `padding`) y la clase `.prose` para mantener el ritmo vertical de lectura.
- Los títulos deben tener siempre un espacio superior e inferior (`mt-8 mb-4`) claramente marcado.
