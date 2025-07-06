// src/ai/flows/plan-selection-assistant.ts
'use server';

/**
 * @fileOverview An AI assistant to help customers select the best service plan for their business needs.
 *
 * - planSelectionAssistant - A function that handles the plan selection process.
 * - PlanSelectionAssistantInput - The input type for the planSelectionAssistant function.
 * - PlanSelectionAssistantOutput - The return type for the planSelectionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PlanSelectionAssistantInputSchema = z.object({
  businessNeeds: z.string().describe('A detailed description of the customer\'s business needs and requirements.'),
  budget: z.string().describe('The customer\'s budget for the service plan.'),
  technicalExpertise: z
    .string()
    .describe(
      'The customer\'s level of technical expertise (e.g., beginner, intermediate, advanced).'
    ),
});
export type PlanSelectionAssistantInput = z.infer<typeof PlanSelectionAssistantInputSchema>;

const PlanSelectionAssistantOutputSchema = z.object({
  recommendedPlan: z.string().describe('The name of the recommended service plan.'),
  planDescription: z
    .string()
    .describe('A detailed description of the recommended plan and its benefits.'),
  reasons: z
    .string()
    .describe('Reasons why the recommended plan is the best fit for the customer\'s needs.'),
});
export type PlanSelectionAssistantOutput = z.infer<typeof PlanSelectionAssistantOutputSchema>;

export async function planSelectionAssistant(
  input: PlanSelectionAssistantInput
): Promise<PlanSelectionAssistantOutput> {
  return planSelectionAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'planSelectionAssistantPrompt',
  input: {schema: PlanSelectionAssistantInputSchema},
  output: {schema: PlanSelectionAssistantOutputSchema},
  prompt: `You are an AI assistant that helps customers select the best service plan for their business needs.

  Based on the customer's input, recommend a service plan and explain why it is the best fit for their needs.

  Consider the customer's business needs, budget, and technical expertise when making your recommendation.

  Business Needs: {{{businessNeeds}}}
  Budget: {{{budget}}}
  Technical Expertise: {{{technicalExpertise}}}

  Here are the available service plans:

  - Basic: A basic plan that includes essential services.
  - Standard: A standard plan that includes more services than the basic plan.
  - Premium: A premium plan that includes all available services.

  Output the plan in JSON format.
  `,
});

const planSelectionAssistantFlow = ai.defineFlow(
  {
    name: 'planSelectionAssistantFlow',
    inputSchema: PlanSelectionAssistantInputSchema,
    outputSchema: PlanSelectionAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
