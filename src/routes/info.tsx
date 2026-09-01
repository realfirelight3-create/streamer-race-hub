import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import hudImage from "../assets/racing-hud.jpg";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "How StreamerRacing Works — Queue, Stream, Race" },
      {
        name: "description",
        content:
          "Learn how StreamerRacing works: join the queue, connect Kick or Twitch, and race your favorite streamers live.",
      },
      {
        property: "og:title",
        content: "How StreamerRacing Works — Queue, Stream, Race",
      },
      {
        property: "og:description",
        content:
          "Learn how StreamerRacing works: join the queue, connect Kick or Twitch, and race your favorite streamers live.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InfoPage,
});

function InfoPage() {
  const steps = [
    {
      number: "01",
      title: "Join The Queue",
      description:
        "Pick a track and drop into the next open lobby. No waiting lounges — you're staged and ready in seconds.",
    },
    {
      number: "02",
      title: "Connect Your Stream",
      description:
        "Auth with Kick, Twitch or another supported service. Your channel rides in the car next to you.",
    },
    {
      number: "03",
      title: "Race The Room",
      description:
        "Green flag drops. Your chat's hype feeds your nitro — the room you energise is the one you outrun.",
    },
    {
      number: "04",
      title: "Climb The Grid",
      description:
        "Finish positions roll up to a weekly global grid. Keep racing to hold your place at the front.",
    },
  ];

  const faqs = [
    {
      q: "What streaming services are supported?",
      a: "Kick, Twitch, and YouTube are supported at launch. More platforms are added each season based on community votes.",
    },
    {
      q: "Do I need a powerful PC?",
      a: "StreamerRacing is optimized for mid-range hardware. A GTX 1060 or Apple M1 GPU is enough for 60fps at 1080p.",
    },
    {
      q: "Can I race without streaming?",
      a: "Yes. You can queue and race as a player anytime. Linking a stream unlocks Fan Fuel and ranked grid progression.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
      <section className="relative mx-auto max-w-[1440px] px-5 pt-14 pb-10">
        <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:items-center">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( 03 — Info Page )</p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-tight">
              How A Race Works
            </h1>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-muted text-pretty">
              StreamerRacing is a live, audience-fuelled time trial. Queue up, connect your stream, and let your
              community push you up the leaderboard.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                to="/download"
                className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[12px] font-medium uppercase tracking-widest text-background transition-colors hover:bg-foreground"
              >
                Download
              </Link>
              <Link
                to="/"
                className="rounded-sm border border-border px-5 py-2.5 font-mono text-[12px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground"
              >
                Back to Game
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[6px] bg-surface outline-1 -outline-offset-1 outline-border">
              <img
                src={hudImage}
                alt="StreamerRacing in-game HUD showing speedometer, nitro bar, and minimap"
                width={1280}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="sr-grain pointer-events-none absolute inset-0"></span>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[38%_1fr]">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( The Loop )</p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-4xl">
              From Queue To Podium
            </h2>
          </div>
          <ol className="flex flex-col divide-y divide-border border-y border-border">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5 py-5">
                <span className="font-display text-3xl leading-none text-accent">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 max-w-[52ch] text-[14px] text-muted text-pretty">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-accent">( FAQ )</p>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-4xl">
            Common Questions
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[6px] border border-border bg-background p-6">
                <h3 className="font-display text-lg uppercase tracking-tight">{faq.q}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted text-pretty">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

