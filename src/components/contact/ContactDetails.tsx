import { Mail, Globe, Clock } from 'lucide-react';

export function ContactDetails() {
    const contactItems = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      info: "profematiasprestes@gmail.com",
      href: "mailto:profematiasprestes@gmail.com",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Ubicación",
      info: "Servicio global desde Uruguay",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Horario",
      info: "Lunes a Viernes, 9:00 - 18:00 (UTC-3)",
    }
  ];

  return (
    <div className="w-full">
      <h2 className="font-headline text-3xl font-bold text-foreground">
        Detalles de Contacto
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">
        ¿Prefieres un contacto más directo? Encuéntranos aquí.
      </p>
      <div className="mt-8 space-y-6">
        {contactItems.map((item) => {
          const cardContent = (
            <div className="group flex items-center gap-6 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.info}</p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a key={item.title} href={item.href} className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                {cardContent}
              </a>
            );
          }
          
          return (
            <div key={item.title}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
