export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-semibold text-foreground">
          <span className="size-6 rounded bg-gradient-brand" />
          Cohort Launch Agency
        </div>
        <p>© {new Date().getFullYear()} Cohort Launch Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
