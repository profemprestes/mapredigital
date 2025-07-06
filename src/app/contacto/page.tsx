
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactDetails } from '@/components/contact/ContactDetails';

export default function ContactoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hablemos de tu Proyecto
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Completa el formulario o utiliza nuestros canales directos. Estamos listos para escucharte.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="rounded-xl bg-card p-8 shadow-lg border">
            <ContactForm />
          </div>
          <div className="mt-8 lg:mt-0">
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
