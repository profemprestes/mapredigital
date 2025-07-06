'use server';
/**
 * @fileOverview An AI flow to enhance blog post content.
 *
 * - enhanceContent - A function that improves a title and content using AI.
 * - EnhanceContentInput - The input type for the enhanceContent function.
 * - EnhanceContentOutput - The return type for the enhanceContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceContentInputSchema = z.object({
  title: z.string().describe('The original title of the blog post.'),
  content: z.string().describe('The original content of the blog post in Markdown.'),
});
export type EnhanceContentInput = z.infer<typeof EnhanceContentInputSchema>;

const EnhanceContentOutputSchema = z.object({
  enhancedTitle: z.string().describe('The improved, more engaging title.'),
  enhancedContent: z.string().describe('The improved, professionally formatted content in Markdown.'),
});
export type EnhanceContentOutput = z.infer<typeof EnhanceContentOutputSchema>;

export async function enhanceContent(input: EnhanceContentInput): Promise<EnhanceContentOutput> {
  return contentEnhancementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentEnhancementPrompt',
  input: {schema: EnhanceContentInputSchema},
  output: {schema: EnhanceContentOutputSchema},
  prompt: `Eres un copywriter experto y estratega de contenido para una agencia de marketing digital llamada "Mapre Digital".
Tu tarea es tomar un borrador de título y contenido de una publicación de blog y mejorarlo.

Objetivos:
1.  **Título:** Hazlo más atractivo, orientado a SEO y que genere curiosidad.
2.  **Contenido:** Transfórmalo en un artículo profesional y creativo. Mejora la estructura, el flujo y la legibilidad utilizando el formato Markdown de forma extensiva. No cambies el mensaje central, pero enriquece su entrega.

Requisitos de formato para el contenido (Markdown):
-   Utiliza encabezados (#, ##, ###) para estructurar el artículo.
-   Usa **negrita** para resaltar términos clave e *itálica* para dar énfasis.
-   Crea listas con viñetas (-) o numeradas (1.) para desglosar información.
-   Usa blockquotes (>) para citas o puntos importantes.
-   Asegúrate de que el tono sea profesional, pero accesible y atractivo.

Título Original: {{{title}}}
Contenido Original:
{{{content}}}
`,
});

const contentEnhancementFlow = ai.defineFlow(
  {
    name: 'contentEnhancementFlow',
    inputSchema: EnhanceContentInputSchema,
    outputSchema: EnhanceContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
