
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createContactMessage, type ContactFormState } from '@/lib/actions/contact.actions';
import { Label } from '@/components/ui/label';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105" size="lg">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(createContactMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: '¡Éxito!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error de validación',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <h2 className="font-headline text-2xl font-bold text-foreground">
        Envíanos un Mensaje
      </h2>
      
      <div className="space-y-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" name="name" placeholder="Tu nombre" required />
        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">Servicio de Interés</Label>
        <Select name="service" required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SEO Estratégico">SEO Estratégico</SelectItem>
            <SelectItem value="Herramientas a Medida">Herramientas a Medida</SelectItem>
            <SelectItem value="Consultoría Digital">Consultoría Digital</SelectItem>
            <SelectItem value="Otro">Otro</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.service && <p className="text-sm font-medium text-destructive">{state.errors.service[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tu Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntanos cómo podemos ayudarte..."
          className="resize-none"
          rows={5}
          required
        />
        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
