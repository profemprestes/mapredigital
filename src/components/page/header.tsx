import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-foreground">
            Mapre Digital
          </span>
        </Link>
        <nav>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#plan-assistant">Consulta Gratuita</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
