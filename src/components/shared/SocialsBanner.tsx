'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MAPREUY',
    icon: <FaFacebook className="h-8 w-8" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mapreuy/',
    icon: <FaInstagram className="h-8 w-8" />,
  },
];


export function SocialsBanner() {
  return (
    <section className="bg-foreground text-background py-12">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-background mb-8">
          Síguenos en nuestras redes
        </h2>
        <div className="flex justify-center items-center gap-8">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sigue a Mapre Digital en ${social.name}`}
              className="p-4 rounded-full bg-primary/20 text-background transition-colors hover:bg-primary/40"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
