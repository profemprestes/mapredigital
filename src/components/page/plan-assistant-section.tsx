import { PlanAssistantForm } from './plan-assistant-form';

export function PlanAssistantSection() {
    return (
        <section id="plan-assistant" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">¿No sabes qué plan elegir?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nuestro asistente con IA te ayudará a encontrar el plan perfecto para tus necesidades. Responde unas pocas preguntas y obtén una recomendación personalizada al instante.
              </p>
            </div>
            <div className="mt-12 max-w-6xl mx-auto">
              <PlanAssistantForm />
            </div>
          </div>
        </section>
    );
}
