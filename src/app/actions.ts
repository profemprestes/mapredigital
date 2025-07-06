'use server'

import { planSelectionAssistant, type PlanSelectionAssistantOutput } from "@/ai/flows/plan-selection-assistant"
import { z } from "zod"

const formSchema = z.object({
  businessNeeds: z.string().min(10, { message: "Por favor, describe tus necesidades con más detalle (mínimo 10 caracteres)." }),
  budget: z.string().min(1, { message: "Por favor, introduce tu presupuesto." }),
  technicalExpertise: z.enum(["beginner", "intermediate", "advanced"], {errorMap: () => ({message: "Por favor, selecciona tu nivel de experiencia."})}),
})

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: PlanSelectionAssistantOutput;
}

export async function getPlanSuggestion(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data)
  const parsed = formSchema.safeParse(formData)

  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString()
    }
    return {
      message: "Formulario inválido. Por favor, corrige los errores.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  try {
    const result = await planSelectionAssistant({
      businessNeeds: parsed.data.businessNeeds,
      budget: parsed.data.budget,
      technicalExpertise: parsed.data.technicalExpertise,
    })

    return { message: "Sugerencia de plan generada.", data: result }
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Un error desconocido ocurrió.";
    return {
      message: `Error al generar la sugerencia: ${errorMessage}`,
      fields: parsed.data,
      issues: ["Hubo un problema al contactar con el asistente de IA. Por favor, inténtalo de nuevo más tarde."]
    }
  }
}
