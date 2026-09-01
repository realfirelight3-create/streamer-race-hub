import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/hero-racing.jpg";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download StreamerRacing — Free Beta" },
      {
        name: "description",
        content:
          "Download StreamerRacing for Windows, macOS, or Linux. Join the queue and race your favorite streamers.",
      },
      { property: "og:title", content: "Download StreamerRacing — Free Beta" },
      {
        property: "og:description",
        content:
          "Download StreamerRacing for Windows, macOS, or Linux. Join the queue and race your favorite streamers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  const platforms = [
    { name: "Windows", spec: "64-bit · 1.4 GB", href: "#" },
    { name: "macOS", spec: "Apple Silicon · 1.2 GB", href: "#" },
    { name: "Linux", spec: "AppImage · 1.3 GB", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
      <section className="relative mx-auto max-w-[1440px] px-5 pt-14 pb-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="lg:w-[46%]">
            <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( 02 — Get On Track )</p>
            <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.85] tracking-tight uppercase text-balance">
              Download
              <br />
              <span className="text-accent">StreamerRacing</span>
            </h1>
            <p className="mt-6 max-w-[44ch] text-[15px] leading-relaxed text-muted text-pretty">
              Free to race. No pay-to-win, no wall of menus. Install, link your stream, and hit the green flag.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="group flex items-center justify-between rounded-[6px] border border-border px-5 py-4 transition-colors hover:border-accent/40 hover:bg-accent-dim"
                >
                  <span className="font-display text-lg uppercase tracking-tight">{p.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted group-hover:text-accent">
                    {p.spec}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted/70">
              v0.9.2-beta · early access
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                to="/info"
                className="rounded-sm border border-border px-5 py-2.5 font-mono text-[12px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground"
              >
                How It Works
              </Link>
              <Link
                to="/"
                className="rounded-sm border border-border px-5 py-2.5 font-mono text-[12px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground"
              >
                Back to Game
              </Link>
            </div>
          </div>

          <div className="relative lg:w-[54%]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-surface outline-1 -outline-offset-1 outline-border">
              <img
                src={heroImage}
                alt="StreamerRacing key art showing neon-lit cars racing on a dark track"
                width={1440}
                height={1120}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="sr-grain pointer-events-none absolute inset-0"></span>
              <div className="pointer-events-none absolute left-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground">
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent animate-[srPulse_1.2s_var(--ease)_infinite]"></span>
                Download Server — Online
              </div>
              <div className="pointer-events-none absolute right-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[11px] tracking-widest text-foreground">
                v0.9.2-beta
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( Specs )</p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-4xl">
              System Requirements
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            <div className="flex justify-between py-4">
              <span className="font-mono text-[12px] uppercase tracking-widest text-muted">OS</span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                Windows 10/11 · macOS 13+ · Linux
              </span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-mono text-[12px] uppercase tracking-widest text-muted">Processor</span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                Intel i5 / Apple M1 / Ryzen 5
              </span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-mono text-[12px] uppercase tracking-widest text-muted">Memory</span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">8 GB RAM</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-mono text-[12px] uppercase tracking-widest text-muted">Graphics</span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                GTX 1060 / RX 580 / M1 GPU
              </span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-mono text-[12px] uppercase tracking-widest text-muted">Network</span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                Broadband (low latency)
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
