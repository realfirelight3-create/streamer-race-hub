import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5">
        <Link to="/" className="font-display text-xl tracking-tight uppercase">
          Streamer<span className="text-accent">Racing</span>
        </Link>
        <div className="hidden items-center gap-8 font-mono text-[12px] uppercase tracking-widest text-muted md:flex">
          <Link
            to="/"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Game
          </Link>
          <Link
            to="/download"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Download
          </Link>
          <Link
            to="/info"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Info
          </Link>
        </div>
        <Link
          to="/download"
          className="rounded-sm bg-accent px-4 py-2 font-mono text-[12px] font-medium uppercase tracking-widest text-background transition-colors hover:bg-foreground"
        >
          Get In
        </Link>
      </nav>
    </header>
  );
}
