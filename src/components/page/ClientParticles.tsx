'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(
  () => import('@/components/page/particles-background').then((mod) => mod.ParticlesBackground),
  { ssr: false }
);

export function ClientParticles() {
  return <ParticlesBackground />;
}
