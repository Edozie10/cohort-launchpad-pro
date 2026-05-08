import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="size-8 rounded-md bg-gradient-brand shadow-glow" />
          Cohort Launch
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition">Problem</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
        </nav>
        <Button variant="hero" size="sm" asChild>
          <a href="#cta">Book a Call</a>
        </Button>
      </div>
    </header>
  );
}
