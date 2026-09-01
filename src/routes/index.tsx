import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/hero-racing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StreamerRacing — Race Your Favorite Streamers" },
      {
        name: "description",
        content:
          "Join the queue, connect Kick or Twitch, and race wheel-to-wheel with your favorite streamers in StreamerRacing.",
      },
      {
        property: "og:title",
        content: "StreamerRacing — Race Your Favorite Streamers",
      },
      {
        property: "og:description",
        content:
          "Join the queue, connect Kick or Twitch, and race wheel-to-wheel with your favorite streamers in StreamerRacing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
      {/* HERO */}
      <section className="relative mx-auto max-w-[1440px] px-5 pt-14 pb-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="lg:w-[46%]">
            <p className="animate-[srFadeUp_0.5s_var(--ease)_both] font-mono text-[12px] uppercase tracking-[0.3em] text-accent">
              ( Race 01 — Live Queue )
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tracking-tight uppercase text-balance animate-[srClip_0.9s_var(--ease)_both]">
              Race The
              <br />
              Stream You
              <br />
              <span className="text-accent">Watch</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-muted text-pretty animate-[srFadeUp_0.5s_var(--ease)_both] [animation-delay:120ms]">
              Pull into a live queue, lock in your stream, and go wheel-to-wheel with your favourite casters. Kick, Twitch
              and more — every lobby is a race.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-[srFadeUp_0.5s_var(--ease)_both] [animation-delay:200ms]">
              <Link
                to="/download"
                className="rounded-sm bg-accent px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-widest text-background transition-colors hover:bg-foreground"
              >
                Download Free
              </Link>
              <Link
                to="/info"
                className="rounded-sm border border-border px-6 py-3 font-mono text-[13px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-8 flex gap-8 border-t border-border pt-5 font-mono text-[12px] text-muted animate-[srFadeUp_0.5s_var(--ease)_both] [animation-delay:280ms]">
              <div>
                <span className="block text-foreground">128</span>slots / lobby
              </div>
              <div>
                <span className="block text-foreground">3.2s</span>queue avg
              </div>
              <div>
                <span className="block text-foreground">24/7</span>live lobbies
              </div>
            </div>
          </div>

          <div className="relative lg:w-[54%]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-surface outline-1 -outline-offset-1 outline-border">
              <img
                src={heroImage}
                alt="StreamerRacing key art showing neon-lit cars racing on a dark track"
                width={1440}
                height={1120}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="sr-grain pointer-events-none absolute inset-0"></span>
              <div className="pointer-events-none absolute left-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground">
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent animate-[srPulse_1.2s_var(--ease)_infinite]"></span>
                Live — Lobby 07
              </div>
              <div className="pointer-events-none absolute right-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[11px] tracking-widest text-foreground">
                P1 · NITRO 82%
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[11px] tracking-widest text-foreground/80">
                SPEED 312
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 h-[3px] w-28 text-accent sr-track"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="sr-track mx-auto h-[2px] max-w-[1440px] px-5 text-accent/40"></div>

      {/* FEATURES */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( 01 — The System )</p>
        <h2 className="mt-3 max-w-[24ch] font-display text-4xl uppercase leading-[0.95] tracking-tight text-balance md:text-5xl">
          Built For The Race, Not The Menu
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="group rounded-[6px] border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/40">
            <span className="font-mono text-[11px] tracking-widest text-accent">(a)</span>
            <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">Live Queues</h3>
            <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-muted text-pretty">
              Drop into a rolling lobby that fills in seconds. Match, load, and green-flag before the stream even catches
              up.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
              Queue avg <span className="text-foreground">3.2s</span>
              <span className="ml-1 inline-block size-1.5 rounded-full bg-accent/60 group-hover:animate-[srPulse_1s_var(--ease)_infinite]"></span>
            </div>
          </div>
          <div className="group rounded-[6px] border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/40">
            <span className="font-mono text-[11px] tracking-widest text-accent">(b)</span>
            <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">Stream Sync</h3>
            <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-muted text-pretty">
              Link Kick, Twitch, or any major platform. One link and your channel joins the race — viewers see you race
              live.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              Kick · Twitch · <span className="text-foreground">+5</span>
            </div>
          </div>
          <div className="group rounded-[6px] border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/40">
            <span className="font-mono text-[11px] tracking-widest text-accent">(c)</span>
            <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">Fan Fuel</h3>
            <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-muted text-pretty">
              Chat and subscribers convert into nitro. The more your audience revs, the harder your car pushes past the
              pack.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              Fuel cap <span className="text-foreground">100%</span>
              <span className="ml-1 inline-block size-1.5 rounded-full bg-accent/60 group-hover:animate-[srPulse_1s_var(--ease)_infinite]"></span>
            </div>
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight">Ready to get on track?</h2>
            <p className="mt-1 max-w-[50ch] text-sm text-muted">
              Free to race. Download now or read how the queue and stream links work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/download"
              className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[12px] font-medium uppercase tracking-widest text-background transition-colors hover:bg-foreground"
            >
              Download
            </Link>
            <Link
              to="/info"
              className="rounded-sm border border-border px-5 py-2.5 font-mono text-[12px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground"
            >
              Read Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
