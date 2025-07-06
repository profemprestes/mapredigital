'use client';

import dynamic from 'next/dynamic';

// We have to dynamically import the particles background component with ssr: false
// because it uses browser-specific APIs that are not available on the server.
const ParticlesBackground = dynamic(
  () => import('./particles-background').then(mod => mod.ParticlesBackground),
  { ssr: false }
);

export function ClientParticles() {
  return <ParticlesBackground />;
}
