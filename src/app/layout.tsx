import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Roboto } from 'next/font/google';
import dynamic from 'next/dynamic';

const SocialsBanner = dynamic(() => import('@/components/shared/SocialsBanner').then(mod => mod.SocialsBanner));
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const siteConfig = {
  name: "Mapre Digital",
  url: "https://mapredigital.com", // Asegúrate de que este sea tu dominio real
  ogImage: "https://placehold.co/1200x630.png", // Reemplaza con tu imagen OG definitiva
  description: "Transformamos tu presencia online con estrategias a medida, desde posicionamiento web hasta el desarrollo de herramientas que optimizan tu crecimiento.",
  author: "Mapre Digital"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo de ${siteConfig.name}`,
      },
    ],
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.author}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://wa.me" />
      </head>
      <body className={`${roboto.variable} font-body antialiased bg-background`} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <SocialsBanner />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
