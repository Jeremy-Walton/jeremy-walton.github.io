export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="page-width flex items-center justify-between gap-4 py-8 text-sm text-muted-foreground">
        <span>&copy;2026 Jeremy Walton</span>
        <a
          href="https://www.bible.com/bible/59/PRO.3.5-6.ESV"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-150 hover:text-primary"
        >
          Proverbs 3:5-6
        </a>
      </div>
    </footer>
  );
}
