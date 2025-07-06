import type { ReactNode } from 'react';

export default function NoticiasLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      {children}
    </div>
  );
}
