'use client'

import React from 'react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { getPlanSuggestion, type FormState } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket, Lightbulb, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const initialState: FormState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {pending ? 'Generando...' : 'Obtener Recomendación'}
    </Button>
  )
}

export function PlanAssistantForm() {
  const [state, formAction] = useActionState(getPlanSuggestion, initialState)

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="shadow-lg border-none rounded-xl bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe tu proyecto</CardTitle>
          <CardDescription>Completa el formulario para recibir una sugerencia de plan personalizada por nuestra IA.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessNeeds">¿Cuáles son las necesidades de tu negocio?</Label>
              <Textarea
                id="businessNeeds"
                name="businessNeeds"
                placeholder="Ej: Necesito una tienda online para vender mis productos, con un blog para marketing de contenidos..."
                required
                rows={5}
                defaultValue={state.fields?.businessNeeds}
                aria-invalid={!!state.issues?.find(issue => issue.includes('necesidades'))}
                className="focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">¿Cuál es tu presupuesto mensual?</Label>
              <Input
                id="budget"
                name="budget"
                placeholder="Ej: $500 - $1000"
                required
                defaultValue={state.fields?.budget}
                aria-invalid={!!state.issues?.find(issue => issue.includes('presupuesto'))}
                className="focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="technicalExpertise">Nivel de experiencia técnica</Label>
              <Select name="technicalExpertise" required defaultValue={state.fields?.technicalExpertise}>
                <SelectTrigger id="technicalExpertise" aria-invalid={!!state.issues?.find(issue => issue.includes('experiencia'))} className="focus:ring-2 focus:ring-primary/50">
                  <SelectValue placeholder="Selecciona tu nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Principiante</SelectItem>
                  <SelectItem value="intermediate">Intermedio</SelectItem>
                  <SelectItem value="advanced">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {state.issues && (
              <div className="rounded-lg border bg-destructive/10 p-3 text-sm text-destructive">
                <ul className="list-disc list-inside space-y-1">
                  {state.issues.map(issue => <li key={issue}>{issue}</li>)}
                </ul>
              </div>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-center">
        {state.data ? (
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
          <Card className="w-full h-full animate-fade-in shadow-lg border-2 border-accent rounded-xl bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Rocket className="text-accent" aria-hidden="true" />
                Tu Plan Recomendado
              </CardTitle>
              <CardDescription className="font-semibold text-lg text-primary">{state.data.recommendedPlan}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <h4 className="font-semibold text-foreground">{state.data.planDescription}</h4>
               </div>
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-2 text-foreground"><Lightbulb className="text-primary" aria-hidden="true" />Razones:</h4>
                <p className="text-muted-foreground whitespace-pre-wrap">{state.data.reasons}</p>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ) : (
          <Card className="w-full border-dashed flex flex-col items-center justify-center text-center p-8 h-full bg-secondary/50 rounded-xl">
            <div className="mb-4 rounded-full bg-background p-4 shadow-inner">
              <Lightbulb className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Tu recomendación aparecerá aquí</h3>
            <p className="text-muted-foreground mt-2">Nuestro asistente inteligente está listo para ayudarte a encontrar el plan perfecto.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
