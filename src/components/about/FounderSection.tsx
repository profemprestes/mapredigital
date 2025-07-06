import Image from 'next/image';

export function FounderSection() {
  return (
    <section className="bg-foreground text-background py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex justify-center items-center">
            <div className="relative h-96 w-80 max-w-sm mx-auto lg:max-w-none lg:mx-0">
               <div className="absolute -inset-2 bg-primary/30 rounded-2xl transform -rotate-3" />
               <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src="/FotoPerfilMatias.webp"
                      alt="Matías Prestes, fundador de Mapre Digital"
                      fill
                      className="object-cover object-top"
                    />
               </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold text-background sm:text-4xl mb-4">Nuestro Fundador</h2>
            <h3 className="font-headline text-2xl font-bold text-accent">Matías Prestes</h3>
            <p className="mt-4 text-lg text-muted">
              Con una pasión por la tecnología y un enfoque en resultados, Matías Prestes fundó Mapre Digital para desmitificar la complejidad del entorno digital y ofrecer soluciones claras y efectivas.
            </p>
            <p className="mt-4 text-lg text-muted">
              Su filosofía se centra en la colaboración estrecha con cada cliente, entendiendo que el éxito digital no es un producto, sino un proceso de mejora continua. Cree firmemente que las herramientas adecuadas y una estrategia bien ejecutada son la clave para desbloquear el verdadero potencial de cualquier negocio en el mundo online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
