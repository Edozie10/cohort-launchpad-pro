import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Cloud,
  Server,
  Container,
  GitBranch,
  Layers,
  Cog,
  Activity,
  ShieldCheck,
  Users,
  Video,
  PlayCircle,
  Briefcase,
  Sparkles,
  GraduationCap,
  Award,
  Star,
  Terminal,
  Boxes,
  Gauge,
  Workflow,
} from "lucide-react";

const CONSULT_MAIL =
  "mailto:info@complxsimple.com?subject=Free%20Consultation&body=Hello%20i%20would%20like%20to%20book%20a%20strategy%20call%20for%20my%20bootcamp";
const ENROLL_MAIL = "https://buy.stripe.com/5kQ7sMcbb8ke3Fv0Wk8g00g";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComplxSimple — DevOps & Cloud Engineering Bootcamp (AWS & Azure)" },
      {
        name: "description",
        content:
          "Become a job-ready DevOps & Cloud Engineer. Master AWS, Azure, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions & Ansible with live training, hands-on labs and real-world projects.",
      },
      { property: "og:title", content: "ComplxSimple — DevOps & Cloud Bootcamp" },
      {
        property: "og:description",
        content:
          "Live instructor-led DevOps & Cloud Engineering Bootcamp. Hands-on AWS, Azure, Docker, Kubernetes, Terraform & CI/CD. Free AWS Solutions Architect Associate voucher included.",
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
        <WhyChooseUs />
        <Curriculum />
        <Projects />
        <Certification />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  const badges = [
    "Beginner Friendly",
    "Live Instructor-Led Classes",
    "Hands-On Projects",
    "Career Support",
    "Free AWS Certification Voucher",
  ];
  const stack = [
    { label: "AWS", slug: "amazonwebservices", color: "FF9900" },
    { label: "Azure", slug: "microsoftazure", color: "0078D4" },
    { label: "Kubernetes", slug: "kubernetes", color: "326CE5" },
    { label: "Docker", slug: "docker", color: "2496ED" },
    { label: "Terraform", slug: "terraform", color: "7B42BC" },
    { label: "Jenkins", slug: "jenkins", color: "D24939" },
    { label: "GitHub", slug: "github", color: "FFFFFF" },
    { label: "Linux", slug: "linux", color: "FFFFFF" },
    { label: "Ansible", slug: "ansible", color: "EE0000" },
    { label: "Prometheus", slug: "prometheus", color: "E6522C" },
    { label: "Grafana", slug: "grafana", color: "F46800" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[480px] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 size-[420px] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Next cohort starts 20th July 2026 — Limited seats
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Become a Job-Ready{" "}
          <span className="text-gradient">DevOps & Cloud Engineer</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Master Linux, AWS, Azure, Docker, Kubernetes, Terraform, Jenkins,
          GitHub Actions, Ansible, and Infrastructure as Code through live
          training, hands-on labs, and real-world projects.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-foreground/90"
            >
              <Check className="size-3.5 text-brand" />
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href={ENROLL_MAIL}>
              Enroll Now <ArrowRight className="ml-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href={CONSULT_MAIL}>Schedule a Free Consultation</a>
          </Button>
        </div>

        {/* Stack logos — moving marquee */}
        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
            Tools you'll master
          </p>
          <div className="relative overflow-hidden mask-fade-x">
            <div className="flex gap-4 animate-marquee">
              {[...stack, ...stack].map((t, i) => (
                <div
                  key={`${t.label}-${i}`}
                  className="shrink-0 flex items-center gap-3 rounded-xl border border-border bg-surface/60 backdrop-blur px-5 py-3 text-sm text-foreground/90 hover:border-brand/40 transition"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt={t.label}
                    className="size-6"
                    loading="lazy"
                  />
                  <span className="font-medium">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY -------------------- */

function WhyChooseUs() {
  const items = [
    { Icon: Server, title: "Hands-On Labs", desc: "Practice on real cloud environments." },
    { Icon: Briefcase, title: "Real Projects", desc: "Build production-grade infrastructures." },
    { Icon: GraduationCap, title: "Career Support", desc: "Resume optimization and interview preparation." },
    { Icon: Users, title: "Live Mentorship", desc: "Learn from experienced engineers." },
    { Icon: Video, title: "Recorded Sessions", desc: "Access classes anytime." },
    { Icon: Sparkles, title: "Community Support", desc: "Join an active learning community." },
    { Icon: PlayCircle, title: "Beginner Friendly", desc: "No previous experience required." },
    { Icon: Award, title: "Free Certification Voucher", desc: "FREE AWS Solutions Architect Associate exam voucher." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Everything you need to launch your cloud career"
          sub="A premium learning experience built for results."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-surface/70 backdrop-blur p-6 shadow-card hover:border-brand/50 hover:-translate-y-1 transition"
            >
              <div className="size-11 rounded-xl bg-gradient-brand grid place-items-center shadow-glow mb-5">
                <Icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CURRICULUM -------------------- */

function Curriculum() {
  const modules = [
    {
      Icon: Terminal,
      title: "Linux Administration",
      items: [
        "Linux Fundamentals",
        "Command Line Interface",
        "File Permissions",
        "Users and Groups",
        "Networking",
        "Process Management",
        "Package Management",
        "Bash Scripting",
      ],
    },
    {
      Icon: Cloud,
      title: "AWS Cloud",
      items: [
        "IAM",
        "EC2",
        "S3",
        "VPC",
        "Route Tables",
        "Internet Gateway",
        "Security Groups",
        "Load Balancers",
        "Auto Scaling",
        "Route53",
        "RDS",
        "CloudWatch",
        "EFS",
        "Lambda",
        "SNS",
        "SQS",
        "CloudFormation",
      ],
    },
    {
      Icon: Cloud,
      title: "Microsoft Azure",
      items: [
        "Azure Virtual Machines",
        "Azure Storage",
        "Azure Networking",
        "Azure Virtual Networks",
        "Azure Active Directory",
        "Azure Monitoring",
        "Azure Security",
      ],
    },
    {
      Icon: GitBranch,
      title: "Version Control",
      items: ["Git", "GitHub", "Branching", "Pull Requests"],
    },
    {
      Icon: Container,
      title: "Containerization",
      items: ["Docker Fundamentals", "Docker Images", "Containers", "Docker Compose"],
    },
    {
      Icon: Boxes,
      title: "Kubernetes",
      items: [
        "Pods",
        "Deployments",
        "Services",
        "ConfigMaps",
        "Secrets",
        "Persistent Volumes",
        "Scaling Applications",
      ],
    },
    {
      Icon: Layers,
      title: "Infrastructure as Code",
      items: ["Terraform Basics", "Variables", "Modules", "Provisioning AWS Infrastructure"],
    },
    {
      Icon: Cog,
      title: "Configuration Management",
      items: ["Ansible", "Playbooks", "Inventory", "Automation"],
    },
    {
      Icon: Workflow,
      title: "CI/CD",
      items: ["Jenkins", "GitHub Actions", "Pipelines", "Deployment Automation"],
    },
    {
      Icon: Activity,
      title: "Monitoring",
      items: ["Prometheus", "Grafana", "Alerting"],
    },
  ];

  return (
    <section id="curriculum" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Program Curriculum"
          title="10 modules. Zero to job-ready."
          sub="A structured roadmap covering every essential DevOps & Cloud skill."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-surface/70 backdrop-blur p-6 shadow-card hover:border-brand/50 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
                  <m.Icon className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand">MODULE {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-semibold">{m.title}</h3>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-muted-foreground">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-1.5">
                    <Check className="size-3.5 text-brand mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */

function Projects() {
  const projects = [
    { Icon: Cloud, title: "Deploy Highly Available Web Applications on AWS", tag: "AWS · HA" },
    { Icon: Layers, title: "Build Infrastructure with Terraform", tag: "IaC" },
    { Icon: Workflow, title: "Create CI/CD Pipelines Using Jenkins", tag: "CI/CD" },
    { Icon: Container, title: "Containerize Applications with Docker", tag: "Containers" },
    { Icon: Boxes, title: "Deploy Applications on Kubernetes", tag: "K8s" },
    { Icon: Activity, title: "Configure Monitoring with Prometheus and Grafana", tag: "Monitoring" },
    { Icon: Cog, title: "Implement Infrastructure Automation with Ansible", tag: "Automation" },
  ];
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Real-World Projects"
          title="Build a portfolio recruiters take seriously"
          sub="Hands-on, production-style projects across the entire DevOps lifecycle."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/70 backdrop-blur p-7 shadow-card hover:border-brand/50 hover:-translate-y-1 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                    <p.Icon className="size-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-brand bg-brand/10 border border-brand/30 px-2 py-1 rounded">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CERTIFICATION -------------------- */

function Certification() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-hero p-10 md:p-16 shadow-glow text-center">
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 size-[400px] rounded-full bg-brand/20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-brand font-medium mb-6">
              <Award className="size-3.5" /> Certification Track
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              AWS Certified Solutions Architect{" "}
              <span className="text-gradient">Associate (SAA-C03)</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Students will receive comprehensive exam preparation and practical labs to pass
              with confidence.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand/40 bg-surface/80 backdrop-blur px-6 py-4 text-left">
              <span className="text-3xl">🎁</span>
              <div>
                <div className="font-semibold">FREE AWS Solutions Architect Associate</div>
                <div className="text-sm text-muted-foreground">Certification voucher included</div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
                <ShieldCheck className="size-4" /> 100% Certification Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */

function Testimonials() {
  const quotes = [
    {
      quote:
        "I landed my first Cloud Engineer role within 8 weeks of finishing the bootcamp. The hands-on AWS labs were game-changing.",
      name: "Daniel O.",
      role: "Cloud Engineer",
    },
    {
      quote:
        "Transitioned from a non-tech background to a DevOps Engineer. The mentorship and real projects made all the difference.",
      name: "Aisha M.",
      role: "DevOps Engineer",
    },
    {
      quote:
        "The Kubernetes and Terraform modules prepared me for production work on day one. Highly recommended.",
      name: "Marcus B.",
      role: "Site Reliability Engineer",
    },
    {
      quote:
        "Passed my AWS SAA-C03 on the first try thanks to the structured prep and the free voucher.",
      name: "Priya R.",
      role: "Cloud Administrator",
    },
    {
      quote:
        "From scripting Linux servers to deploying CI/CD pipelines — this program covers everything employers want.",
      name: "Kelechi N.",
      role: "DevOps Engineer",
    },
    {
      quote:
        "The live classes plus recordings gave me total flexibility. Career support helped me prep my resume and interviews.",
      name: "Sara T.",
      role: "Cloud Engineer",
    },
  ];
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Student Success"
          title="Careers launched. Lives changed."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-border bg-surface/70 backdrop-blur p-7 shadow-card hover:border-brand/40 transition"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">
                "{q.quote}"
              </blockquote>
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

/* -------------------- PRICING -------------------- */

function Pricing() {
  const features = [
    "Live Classes",
    "Recorded Sessions",
    "Hands-On Labs",
    "Real Projects",
    "Mentorship",
    "Community Support",
    "Resume Optimization",
    "Interview Preparation",
    "Certificate of Completion",
    "AWS Certification Preparation",
    "FREE AWS Solutions Architect Associate Voucher",
  ];
  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Premium DevOps & Cloud Engineering Bootcamp"
          sub="One investment. A career-changing outcome."
        />
        <div className="relative rounded-3xl border-2 border-brand bg-surface/80 backdrop-blur p-10 md:p-12 shadow-glow">
          <div className="absolute -top-3 left-10 px-3 py-1 rounded-full bg-gradient-brand text-xs font-semibold text-primary-foreground">
            Limited Seats Available
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold">Complete Bootcamp</h3>
              <p className="text-muted-foreground mt-2">
                Everything included — live training, labs, projects, mentorship, and
                certification prep.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-display font-bold text-gradient">
                  $1,699
                </span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="mt-2 text-sm text-brand font-medium">
                Installment payment available — contact admin for details
              </p>
              <Button variant="hero" size="xl" className="mt-6 w-full" asChild>
                <a href={ENROLL_MAIL}>
                  Enroll Now <ArrowRight className="ml-1" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Next cohort: 20th July 2026 · Limited seats available
              </p>
            </div>
            <ul className="grid gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="size-4 text-brand mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */

function FAQ() {
  const faqs = [
    {
      q: "Do I need previous experience?",
      a: "No. The bootcamp is designed to take you from beginner to job-ready. We start with Linux fundamentals and build up to advanced topics.",
    },
    {
      q: "Is this beginner-friendly?",
      a: "Yes. Every module is structured for absolute beginners, with live mentorship and step-by-step labs.",
    },
    {
      q: "Are recordings available?",
      a: "Yes. All live classes are recorded and accessible anytime so you can learn at your own pace.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. You'll receive an official Certificate of Completion at the end of the program.",
    },
    {
      q: "Will I work on real projects?",
      a: "Absolutely. You'll build production-grade infrastructures and complete a portfolio of real-world DevOps and Cloud projects.",
    },
    {
      q: "Will I get support for AWS certification?",
      a: "Yes. You'll receive comprehensive AWS Solutions Architect Associate exam preparation plus a FREE certification voucher.",
    },
    {
      q: "How long is the program?",
      a: "The bootcamp typically runs for 12–16 weeks with flexible scheduling and lifetime access to all materials.",
    },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border border-border bg-surface/60 backdrop-blur rounded-xl px-5 mb-3"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */

function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-hero p-12 md:p-20 text-center shadow-glow">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-brand/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Start Your <span className="text-gradient">Cloud Engineering Career</span> Today
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Master AWS, Azure, Docker, Kubernetes, Terraform, CI/CD, and DevOps
              with practical projects and expert mentorship.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href={ENROLL_MAIL}>
                  Enroll Now <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href={CONSULT_MAIL}>Book a Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- shared -------------------- */

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14">
      <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-3">
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}
