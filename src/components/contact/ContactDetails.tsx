
import { Mail, Globe, Clock } from 'lucide-react';

export function ContactDetails() {
  return (
    <div className="w-full">
      <h2 className="font-headline text-3xl font-bold text-foreground">
        Información de Contacto
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">
        ¿Prefieres un contacto más directo? Aquí tienes nuestras vías de comunicación.
      </p>
      <ul className="mt-8 space-y-8">
        <li className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:contacto@mapredigital.com" className="hover:text-primary transition-colors">
                contacto@mapredigital.com
              </a>
            </p>
          </div>
        </li>
        <li className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Ubicación</h3>
            <p className="text-muted-foreground">Servicio global desde Uruguay</p>
          </div>
        </li>
        <li className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Horario de Atención</h3>
            <p className="text-muted-foreground">Lunes a Viernes, 9:00 - 18:00 (UTC-3)</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
