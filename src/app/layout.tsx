import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Roboto } from 'next/font/google';
import { SocialsBanner } from '@/components/shared/SocialsBanner';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: 'Mapre Digital',
  description: 'Impulsamos tu Negocio al Siguiente Nivel Digital',
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
