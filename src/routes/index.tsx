import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Dog, Utensils, Sun } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import lunchImg from "@/assets/lunch.jpg";
import alacarteImg from "@/assets/alacarte.jpg";
import terraceImg from "@/assets/terrace.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const hours = [
  { d: "Måndag", h: "11 – 21" },
  { d: "Tisdag", h: "11 – 21" },
  { d: "Onsdag", h: "11 – 21" },
  { d: "Torsdag", h: "11 – 21" },
  { d: "Fredag", h: "11 – 23" },
  { d: "Lördag", h: "16 – 23" },
  { d: "Söndag", h: "16 – 21" },
];

function Nav() {
  const links = [
    ["Meny", "#meny"],
    ["Lunch", "#lunch"],
    ["A la carte", "#alacarte"],
    ["Besök oss", "#besok"],
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-primary-foreground">
        <a href="#" className="font-display text-2xl tracking-tight">
          Tilda <span className="text-accent">&</span> Josper
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="opacity-80 hover:opacity-100 hover:text-accent transition">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="tel:+46319245400"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary transition"
        >
          <Phone className="h-3.5 w-3.5" /> 031-92 45 40
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interiör Tilda & Josper"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <Nav />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-52 md:pb-32 text-primary-foreground">
        <p className="eyebrow text-accent">Kvarterskrog · Torslanda · Sedan årtionden</p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
          En smak av <em className="text-accent not-italic italic">hemma</em>,
          <br /> serverad med omsorg.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
          Generös vardagslunch, à la carte på glödhet grillsten och en av
          Torslandas mysigaste uteserveringar. Hundar och katter är alltid välkomna.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#meny"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition"
          >
            Se menyn
          </a>
          <a
            href="tel:+46319245400"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 px-7 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary-foreground hover:text-primary transition"
          >
            Boka bord
          </a>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><span className="text-accent">★★★★</span> 4.2 · 423 recensioner</span>
          <span className="hidden md:inline opacity-40">·</span>
          <span>Kulturhuset Vingen, Torslanda</span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Välkommen</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
          Kvarterets vardagsrum, med en glödgad grillsten i mitten.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Hos oss handlar det om det enkla, det goda och det ärliga. Ett riktigt
          hemlagat kök där dagens fångst möter en het lavasten, där salladsbuffén
          alltid är påfylld och där kaffet står framme när efterrätten kommer på bordet.
        </p>
      </div>
    </section>
  );
}

function MenuSection() {
  const items = [
    {
      id: "lunch",
      eyebrow: "Vardagar 11 – 15",
      title: "Dagens lunch",
      body: "Fyra rätter varje dag — kött, fisk, vegetariskt och pastan. I priset ingår alltid dryck, vår välfyllda salladsbuffé, hembakat bröd, kaffe och kaka.",
      cta: "Se veckans meny",
      img: lunchImg,
      price: "Från 125 kr",
    },
    {
      id: "alacarte",
      eyebrow: "Kväll",
      title: "À la carte på grillsten",
      body: "Vår signaturupplevelse. Perfekt tempererad entrecôte, oxfilé eller havets läckerheter serveras på 400° het lavasten — tillagas precis som du vill vid bordet.",
      cta: "Utforska à la carte",
      img: alacarteImg,
      price: "Fråga personalen",
    },
  ];
  return (
    <section id="meny" className="bg-primary text-primary-foreground py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow">Menyn</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl">
            Två sätt att äta.<br />
            <span className="italic text-accent">Ett löfte.</span>
          </h2>
        </div>
        <div className="grid gap-12 md:gap-20 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.id} id={it.id} className="group">
              <div className="overflow-hidden mb-8 aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow">{it.eyebrow}</p>
              <h3 className="mt-4 font-display text-4xl">{it.title}</h3>
              <p className="mt-5 text-primary-foreground/70 leading-relaxed">{it.body}</p>
              <div className="mt-6 flex items-center justify-between border-t border-primary-foreground/15 pt-6">
                <span className="text-accent text-sm tracking-wide">{it.price}</span>
                <a href="#besok" className="text-sm uppercase tracking-widest hover:text-accent transition">
                  {it.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terrace() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <img
            src={terraceImg}
            alt="Uteservering på Tilda & Josper"
            loading="lazy"
            className="w-full aspect-[7/5] object-cover"
          />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow flex items-center gap-2"><Sun className="h-3.5 w-3.5" /> Sommar hos oss</p>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1]">
            Uteserveringen är <em className="text-accent italic">öppen</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            När solen letar sig ner mellan husen dukar vi upp på trädäcket. Ett
            kallt glas, en tapasbricka och grannens hund vid fötterna — så känns
            en riktigt bra torslandakväll.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              { icon: Sun, t: "Trädäck med kvällssol" },
              { icon: Dog, t: "Hundar & katter välkomna" },
              { icon: Utensils, t: "Fråga oss om grillsten" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 border-b border-border pb-3">
                <Icon className="h-4 w-4 text-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="besok" className="bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow">Besök oss</p>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">
            Du hittar oss i<br />
            <span className="italic text-accent">Kulturhuset Vingen.</span>
          </h2>
          <div className="mt-12 space-y-6 text-base">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 mt-1 text-accent shrink-0" />
              <div>
                <div className="font-medium">Adress</div>
                <a
                  href="https://maps.google.com/?q=Gamla+Flygplatsvägen+35,+423+37+Torslanda"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Gamla Flygplatsvägen 35, 423 37 Torslanda
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 mt-1 text-accent shrink-0" />
              <div>
                <div className="font-medium">Boka bord</div>
                <a href="tel:+46319245400" className="text-muted-foreground hover:text-foreground">
                  031-92 45 40
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm mb-6">
            <Clock className="h-4 w-4 text-accent" />
            <span className="eyebrow">Öppettider</span>
          </div>
          <ul className="divide-y divide-border">
            {hours.map((h) => (
              <li key={h.d} className="flex items-center justify-between py-4 font-display text-2xl">
                <span>{h.d}</span>
                <span className="text-muted-foreground text-lg font-sans">{h.h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <div className="font-display text-3xl text-primary-foreground">
            Tilda <span className="text-accent">&</span> Josper
          </div>
          <p className="mt-3 text-sm max-w-sm">
            Kvarterskrogen mitt i Torslanda. Följ oss på TikTok och Instagram för
            dagens rätt, nyheter och små glimtar från köket.
          </p>
        </div>
        <div className="text-sm space-y-2 md:text-right">
          <div>Gamla Flygplatsvägen 35, 423 37 Torslanda</div>
          <div>031-92 45 40</div>
          <div className="pt-4 text-xs opacity-60">© {new Date().getFullYear()} Tilda & Josper</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Intro />
      <MenuSection />
      <Terrace />
      <Visit />
      <Footer />
    </main>
  );
}
