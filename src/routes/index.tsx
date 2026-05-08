import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  ArrowRight,
  Check,
  Rocket,
  Users,
  Settings,
  Target,
  Megaphone,
  LineChart,
  Server,
  Cloud,
  Shield,
  Boxes,
  Sparkles,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cohort Launch Agency — Launch Profitable Tech Training Cohorts" },
      {
        name: "description",
        content:
          "Done-for-you cohort launch services for Linux, Cloud, DevOps, Cybersecurity & OpenShift experts. We build, market, and run your training programs.",
      },
      { property: "og:title", content: "Cohort Launch Agency" },
      {
        property: "og:description",
        content:
          "Turn your technical skills into a profitable training cohort. Done-for-you setup, marketing, and operations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <Audience />
        <Problem />
        <Solution />
        <Services />
        <HowItWorks />
        <SocialProof />
        <NonTechnical />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Done-for-you cohort launches for technical experts
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Turn Your Technical Skills Into a{" "}
          <span className="text-gradient">Profitable Training Cohort</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We help Linux, Cloud, DevOps, and Cybersecurity experts launch and fill
          online training programs — done-for-you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="#cta">
              Book a Free Strategy Call <ArrowRight className="ml-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#pricing">Launch My Cohort</a>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-sm text-muted-foreground">
          {[
            ["50+", "Cohorts launched"],
            ["$2M+", "Tuition processed"],
            ["10k+", "Students enrolled"],
            ["95%", "Retention rate"],
          ].map(([k, v]) => (
            <div key={v} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{k}</div>
              <div className="mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    { icon: Server, label: "Linux Admins" },
    { icon: Cloud, label: "Cloud Engineers" },
    { icon: Settings, label: "DevOps" },
    { icon: Shield, label: "Cybersecurity" },
    { icon: Boxes, label: "OpenShift / K8s" },
  ];
  return (
    <section className="py-16 border-y border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Built for technical experts in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="size-5 text-brand" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Problem() {
  const pains = [
    "You have deep technical expertise but can't find paying students.",
    "Structuring a curriculum that actually delivers results feels overwhelming.",
    "Marketing, landing pages, and payments eat your weekends.",
    "Operations, onboarding, and student support don't scale.",
  ];
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Problem"
          title="Knowledge isn't the bottleneck. Everything else is."
          sub="Most experts never launch — or burn out trying to do it all alone."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((p) => (
            <div
              key={p}
              className="flex gap-3 rounded-xl border border-border bg-surface p-6 shadow-card"
            >
              <span className="mt-1 size-2 rounded-full bg-destructive shrink-0" />
              <p className="text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    "Cohort setup & curriculum structure",
    "Landing pages & payment systems",
    "Marketing & student acquisition",
    "Instructor & assistant sourcing",
    "Operations & student onboarding",
    "Ongoing growth support",
  ];
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Solution"
          title="One partner. End-to-end cohort growth."
          sub="We handle everything needed to launch and run your training cohort from start to finish."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-surface-elevated px-5 py-4 border border-border">
              <Check className="size-5 text-brand shrink-0" />
              <span className="text-sm">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Rocket,
      title: "Cohort Setup",
      desc: "Curriculum structuring, landing pages, payments, tooling, and a launch-ready system tailored to your expertise.",
    },
    {
      icon: Megaphone,
      title: "Student Acquisition & Marketing",
      desc: "Targeted lead generation, ad campaigns, content, and funnels that fill your cohorts with qualified students.",
    },
    {
      icon: Users,
      title: "Operations & Support",
      desc: "Dedicated VAs and operations management — onboarding, scheduling, communications, and student success.",
    },
  ];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Three pillars. One profitable cohort."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-surface p-8 shadow-card hover:border-brand/50 transition"
            >
              <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow mb-6">
                <Icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Target, title: "Strategy Call", desc: "We map your expertise, audience, and offer." },
    { icon: Settings, title: "Build Your System", desc: "Curriculum, landing page, payments, and operations." },
    { icon: Megaphone, title: "Attract Students", desc: "Marketing engine fills seats with qualified leads." },
    { icon: LineChart, title: "Launch & Earn", desc: "You teach. We run the rest. Your cohort goes live." },
  ];
  return (
    <section id="how" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="How It Works" title="From idea to income in 4 steps" />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs font-mono text-brand mb-4">STEP {String(i + 1).padStart(2, "0")}</div>
              <Icon className="size-8 text-brand mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const quotes = [
    {
      quote: "We launched our first DevOps cohort in 6 weeks and filled all 40 seats. The team handled everything outside of teaching.",
      name: "Senior DevOps Engineer",
      role: "First cohort: 40 students",
    },
    {
      quote: "Marketing was the missing piece. Their student acquisition system tripled my enrollment for cohort two.",
      name: "Cloud Architect",
      role: "3x enrollment growth",
    },
    {
      quote: "I went from zero infrastructure to a profitable, recurring cybersecurity cohort. Truly done-for-you.",
      name: "Security Practitioner",
      role: "Recurring monthly cohorts",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Social Proof" title="Experts. Cohorts. Real results." />
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-border bg-surface p-8 shadow-card">
              <blockquote className="text-foreground/90 leading-relaxed">"{q.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function NonTechnical() {
  const perks = [
    { icon: GraduationCap, title: "We source the instructor", desc: "Vetted technical experts ready to teach under your brand." },
    { icon: Settings, title: "We build the system", desc: "Curriculum, landing page, payments, and operations — all set up for you." },
    { icon: DollarSign, title: "You own the business", desc: "You keep the brand, the revenue, and the audience. We handle execution." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-hero p-10 md:p-16 shadow-glow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-brand font-medium mb-6">
                <Sparkles className="size-3.5" /> No tech background? No problem.
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Don't have the technical skills? <span className="text-gradient">We'll help you build the business.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                You don't need to be an engineer to run a profitable training cohort. If you have the vision, drive, or audience — we'll handle the technical instructor sourcing, curriculum, marketing, and operations to launch your paying cohort business.
              </p>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="#cta">Start Your Cohort Business <ArrowRight /></a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {perks.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-border bg-surface/80 backdrop-blur p-6 shadow-card">
                  <div className="size-11 shrink-0 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const addons = [
    { name: "Ongoing Support", price: "$500–$1,000", per: "per cohort", desc: "Ongoing marketing, operations, and student acquisition support to scale enrollment cohort after cohort." },
    { name: "VA / Operations", price: "Custom", per: "monthly", desc: "Dedicated VA and operations management for student onboarding and support." },
  ];
  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Pricing" title="Simple, transparent, results-focused" />
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 relative rounded-2xl border-2 border-brand bg-surface p-10 shadow-glow">
            <div className="absolute -top-3 left-10 px-3 py-1 rounded-full bg-gradient-brand text-xs font-semibold text-primary-foreground">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold">Cohort Launch Package</h3>
            <p className="text-muted-foreground mt-2">Everything you need to launch your first profitable cohort.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-display font-bold">$2,000</span>
              <span className="text-muted-foreground">one-time setup</span>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Curriculum structuring",
                "Branded landing page",
                "Payment system setup",
                "Launch marketing kit",
                "Onboarding workflows",
                "Strategy & positioning",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-10 w-full sm:w-auto" asChild>
              <a href="#cta">Get Started <ArrowRight /></a>
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            {addons.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border bg-surface p-6">
                <h4 className="font-semibold">{a.name}</h4>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold">{a.price}</span>
                  <span className="text-xs text-muted-foreground">{a.per}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-12 md:p-16 text-center shadow-glow">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to launch your first or next <span className="text-gradient">cohort?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll map a launch plan tailored to your expertise — no obligations.
          </p>
          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hello@cohortlaunch.agency?subject=Free%20Consultation">
                Book a Free Consultation <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
