import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-display text-lg uppercase tracking-tight">
          Streamer<span className="text-accent">Racing</span>
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
          © 2025 StreamerRacing — Built for the race.
        </p>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widest text-muted">
          <Link to="/" className="transition-colors hover:text-foreground">
            Game
          </Link>
          <Link to="/download" className="transition-colors hover:text-foreground">
            Download
          </Link>
          <Link to="/info" className="transition-colors hover:text-foreground">
            Info
          </Link>
        </div>
      </div>
    </footer>
  );
}
