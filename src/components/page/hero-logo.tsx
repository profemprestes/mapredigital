'use client';

import Image from 'next/image';

export function HeroLogo() {
  return (
    <div
      className="hidden lg:flex justify-center items-center opacity-0 animate-slide-up-fade"
      style={{ animationDelay: '0.5s' }}
    >
      <div className="animate-float">
        <Image
          src="/Logo_Mapre.svg"
          alt="Logo animado de Mapre Digital"
          width={400}
          height={400}
          className="object-contain drop-shadow-2xl"
          data-ai-hint="company logo"
          priority
        />
      </div>
    </div>
  );
}
