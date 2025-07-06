'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import dynamic from 'next/dynamic';
import { Toaster } from '@/components/ui/toaster';

const SocialsBanner = dynamic(() => import('@/components/shared/SocialsBanner').then(mod => mod.SocialsBanner));
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header isHomePage={isHomePage} />
      <main className="flex-grow">{children}</main>
      <SocialsBanner />
      <Footer />
    </div>
  );
}
