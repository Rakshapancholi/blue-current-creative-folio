import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Asterisk, Check } from "lucide-react";
import studioTeam from "@/assets/studio-team.jpg";
import architecture from "@/assets/architecture.jpg";
import digital from "@/assets/digital.jpg";
import { Button } from "@/components/ui/button";
import hero from "@/assets/nautilius-hero.jpg";
import form from "@/assets/project-form.jpg";
import structure from "@/assets/project-structure.jpg";
import edition from "@/assets/project-edition.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nautilius — Independent Creative Studio" },
    { name: "description", content: "New perspectives. Lasting impressions. Nautilius is an independent creative studio shaping brands, digital experiences, and visual stories." },
    { property: "og:title", content: "Nautilius — Independent Creative Studio" },
    { property: "og:description", content: "Thoughtful design. Bold ideas. Discover a new perspective with Nautilius." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const projects = [
  { name: "Forma", industry: "BEAUTY", category: "BRAND STRATEGY · VISUAL IDENTITY · PACKAGING", image: form, alt: "Cobalt skincare packaging and visual identity", description: "A quieter kind of presence. A complete identity for a new perspective on everyday care." },
  { name: "Objects of intention", industry: "FURNITURE", category: "ART DIRECTION · DIGITAL EXPERIENCE", image: structure, alt: "Chrome and leather sculptural chair in a modernist interior", description: "Finding expression in the essentials. A visual world for thoughtfully made objects." },
  { name: "New Edition", industry: "PUBLISHING", category: "EDITORIAL · CREATIVE DIRECTION", image: edition, alt: "Graphic editorial publication with red and blue abstract forms", description: "An exploration of form, rhythm, and possibility. A fresh voice for contemporary culture." },
  { name: "Aurora Digital", industry: "WELLNESS", category: "UX/UI · WEB DEVELOPMENT", image: digital, alt: "Website design shown on a laptop and phone", description: "A calm, considered digital platform designed to make every interaction feel effortless." },
];
const services = [
  { title: "Digital", image: digital, alt: "Website design on laptop and phone", items: ["Website design", "Web development", "UX/UI", "Application development"] },
  { title: "Growth", image: architecture, alt: "Abstract curved architecture", items: ["SEO", "PPC", "Digital marketing", "Social media"] },
  { title: "Brand", image: form, alt: "Brand identity applied to packaging", items: ["Brand identity", "Graphic design", "Creative direction"] },
  { title: "Content", image: edition, alt: "Editorial print composition", items: ["Content strategy", "Copywriting", "Digital PR", "Content production"] },
];
const reasons = [
  { title: "Senior, hands-on teams", text: "You work directly with the people doing the thinking and the making." },
  { title: "Strategy meets craft", text: "Every creative decision is grounded in clear business objectives." },
  { title: "Connected disciplines", text: "Brand, digital, growth and content working as one system." },
  { title: "Built to perform", text: "We measure what matters and keep improving after launch." },
];
const steps = [
  { title: "Discover", text: "Workshops and research to understand your business, audience and ambitions." },
  { title: "Define", text: "A clear strategy, creative direction and plan everyone can rally behind." },
  { title: "Create", text: "Design explorations, prototypes and production, refined together." },
  { title: "Deliver", text: "Launch, measure and evolve — with support long after go-live." },
];
const testimonials = [
  { text: "Nautilius understood our ambition from the very first conversation and turned it into something remarkable.", name: "Client name", role: "Role, Company" },
  { text: "A genuine partner — thoughtful, fast and relentlessly focused on quality.", name: "Client name", role: "Role, Company" },
  { text: "Our new brand and website have completely changed how customers see us.", name: "Client name", role: "Role, Company" },
];
const articles = [
  { category: "BRANDING", time: "5 MIN READ", title: "Why distinctive brands outlast trends", text: "What makes an identity memorable — and how to build one that endures.", image: edition, alt: "Editorial magazine layout" },
  { category: "DIGITAL", time: "4 MIN READ", title: "Designing websites that convert", text: "Balancing beautiful design with clear journeys and measurable results.", image: digital, alt: "Website shown on devices" },
  { category: "STUDIO", time: "6 MIN READ", title: "Inside our creative process", text: "How we move from first conversation to final delivery.", image: studioTeam, alt: "Studio team reviewing work" },
];
const fields: { name: string; label: string; type: string; required?: boolean; wide?: boolean; options?: string[] }[] = [
  { name: "name", label: "NAME", type: "text", required: true },
  { name: "email", label: "EMAIL", type: "email", required: true },
  { name: "company", label: "COMPANY", type: "text" },
  { name: "service", label: "SERVICE REQUIRED", type: "select", required: true, options: ["Digital", "Growth", "Brand", "Content", "Not sure yet"] },
  { name: "budget", label: "BUDGET RANGE", type: "select", wide: true, options: ["Under £10k", "£10k – £25k", "£25k – £50k", "£50k+"] },
  { name: "message", label: "PROJECT DESCRIPTION", type: "textarea", required: true, wide: true },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quote, setQuote] = useState(0);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = "This field is required.";
      else if (f.name === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) next[f.name] = "Please enter a valid email.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const selectedProject = activeProject === null ? undefined : projects[activeProject];
  return (
    <main>
      <section className="hero relative overflow-hidden bg-primary text-primary-foreground" id="home">
        <img className="hero-image absolute inset-0 h-full w-full object-cover" src={hero} alt="Sculptural silver nautilus spiral on a cobalt blue background" width={1920} height={1024} />
        <header className="site-header relative z-10 flex items-center justify-between border-b border-primary-foreground/25">
          <a href="#home" className="wordmark flex items-center gap-2" aria-label="Nautilius home">nautilius<Asterisk className="size-6" strokeWidth={1.7} /></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#work">Selected work <span className="nav-number">03</span></a>
            <a href="#studio">The studio</a>
            <a href="#services">What we do</a>
          </nav>
          <Button asChild variant="secondary" className="contact-button hidden rounded-none md:inline-flex"><a href="#contact">LET’S TALK <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-foreground/10" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </header>
        {menuOpen && <nav className="mobile-nav absolute z-20 flex flex-col bg-primary" aria-label="Mobile navigation">{[["Selected work", "work"], ["The studio", "studio"], ["What we do", "services"], ["Let’s talk", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight /></a>)}</nav>}
        <div className="hero-content relative z-10">
          <div className="eyebrow flex items-center gap-2"><span className="status-dot bg-primary-foreground" /> INDEPENDENT BY NATURE. CREATIVE BY DESIGN.</div>
          <h1>Nautilius<span className="text-3xl align-top">®</span></h1>
          <p className="hero-statement">New perspectives.<br /><em>Lasting impressions.</em></p>
          <a href="#work" className="hero-work-link inline-flex items-center gap-5">EXPLORE OUR WORK <span className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/50"><ArrowDown className="size-4" /></span></a>
        </div>
        <div className="hero-bottom relative z-10 flex items-end justify-between border-t border-primary-foreground/25">
          <p>We shape brands and experiences<br />with purpose, clarity, and a little curiosity.</p>
          <span className="eyebrow hidden sm:block">GOOD DESIGN IS ONLY THE BEGINNING.</span>
          <span className="eyebrow">SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      <section className="section-shell border-b border-border py-10" aria-label="Credentials">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <span className="eyebrow text-muted-foreground">TRUSTED BY AMBITIOUS BUSINESSES</span>
          <ul className="flex flex-wrap gap-x-10 gap-y-3 text-lg font-medium text-muted-foreground">
            {["Client One", "Client Two", "Client Three", "Client Four", "Client Five"].map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-top flex items-end justify-between gap-4">
          <div><div className="eyebrow section-label">01 / SELECTED WORK</div><h2>Good work makes <em>an impression.</em></h2></div>
          <span className="eyebrow hidden text-muted-foreground md:block">A FEW THINGS WE’VE PUT INTO THE WORLD ↙</span>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => <article key={project.name} className={index % 2 === 1 ? "md:mt-24" : ""}>
            <Button variant="ghost" className={`group relative block h-auto w-full overflow-hidden rounded-none p-0 ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`} onClick={() => setActiveProject(index)} aria-label={`View ${project.name}`}>
              <img src={project.image} alt={project.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-background text-foreground"><ArrowUpRight /></span>
            </Button>
            <div className="mt-5 flex items-baseline justify-between gap-4"><h3 className="text-2xl font-medium">{project.name}</h3><span className="eyebrow text-muted-foreground">{project.industry}</span></div>
            <p className="eyebrow mt-2 text-primary">{project.category}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </article>)}
        </div>
      </section>

      <section id="studio" className="studio-section section-shell bg-secondary pb-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={studioTeam} alt="Designers collaborating around printed layouts in the studio" width={1536} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div>
            <div className="eyebrow section-label">02 / THE STUDIO</div>
            <h2>Independent thinking. <em>Connected creativity.</em></h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">Nautilius is an independent creative and digital studio. We bring strategy, design and technology together in small, senior teams — so every idea is considered, connected and built to perform.</p>
            <a href="#why" className="mt-8 inline-flex items-center gap-4 border-b border-foreground pb-2 text-sm">DISCOVER THE STUDIO <ArrowUpRight className="size-5" /></a>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-24">
        <div className="eyebrow section-label">03 / WHAT WE DO</div>
        <h2 className="max-w-3xl">Everything your brand needs to <em>move forward.</em></h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => <article key={s.title} className="group">
            <div className="aspect-[3/4] overflow-hidden"><img src={s.image} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <div className="mt-5 flex items-center gap-3"><span className="eyebrow text-muted-foreground">0{i + 1}</span><h3 className="text-2xl font-medium">{s.title}</h3></div>
            <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-primary">Discuss {s.title.toLowerCase()} <ArrowUpRight className="size-4" /></a>
          </article>)}
        </div>
      </section>

      <section id="why" className="section-shell bg-secondary py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <img src={architecture} alt="Curved white architecture against a cobalt sky" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <div className="eyebrow section-label">04 / WHY NAUTILIUS</div>
            <h2>More than an agency. <em>A creative partner.</em></h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {reasons.map((r, i) => <div key={r.title} className="border-t border-border pt-5"><span className="eyebrow text-primary">0{i + 1}</span><h3 className="mt-3 text-xl font-medium">{r.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-shell py-24">
        <div className="eyebrow section-label">05 / HOW WE WORK</div>
        <h2 className="max-w-3xl">From first conversation <em>to final delivery.</em></h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => <li key={s.title} className="border-l border-border pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6"><span className="text-5xl font-light text-primary">0{i + 1}</span><h3 className="mt-4 text-xl font-medium">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p></li>)}
        </ol>
      </section>

      <section className="section-shell bg-primary py-24 text-primary-foreground" aria-label="Testimonials">
        <div className="eyebrow section-label">06 / KIND WORDS</div>
        <figure className="max-w-4xl">
          <blockquote className="text-3xl leading-snug md:text-5xl">“{testimonials[quote].text}”</blockquote>
          <figcaption className="mt-8 eyebrow">{testimonials[quote].name} — {testimonials[quote].role}</figcaption>
        </figure>
        <div className="mt-10 flex gap-3">
          {testimonials.map((t, i) => <Button key={t.name} size="icon" variant="ghost" aria-label={`Show testimonial ${i + 1}`} aria-pressed={quote === i} onClick={() => setQuote(i)} className={`rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 ${quote === i ? "bg-primary-foreground text-primary hover:bg-primary-foreground" : ""}`}>{i + 1}</Button>)}
        </div>
      </section>

      <section id="insights" className="section-shell py-24">
        <div className="section-top flex items-end justify-between gap-4">
          <div><div className="eyebrow section-label">07 / INSIGHTS</div><h2>Perspectives worth <em>exploring.</em></h2></div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map(a => <article key={a.title} className="group">
            <div className="aspect-[16/10] overflow-hidden"><img src={a.image} alt={a.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <div className="mt-5 flex justify-between eyebrow text-muted-foreground"><span className="text-primary">{a.category}</span><span>{a.time}</span></div>
            <h3 className="mt-3 text-xl font-medium">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
          </article>)}
        </div>
      </section>

      <section id="contact" className="section-shell bg-primary py-24 text-primary-foreground">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <div className="eyebrow section-label flex items-center gap-2"><span className="status-dot bg-primary-foreground" /> 08 / OPEN TO NEW PROJECTS</div>
            <h2 className="text-5xl md:text-7xl">Have something <em>ambitious in mind?</em></h2>
            <p className="mt-6 max-w-md opacity-80">Tell us about your project and we’ll get back to you within two working days.</p>
            <a href="mailto:hello@nautilius.studio" className="mt-8 inline-flex items-center gap-3 border-b border-primary-foreground pb-1">hello@nautilius.studio <ArrowUpRight className="size-4" /></a>
          </div>
          {sent ? <div role="status" className="flex flex-col justify-center border border-primary-foreground/30 p-10"><Check className="size-10" /><h3 className="mt-5 text-3xl">Thank you.</h3><p className="mt-3 opacity-80">Your enquiry has been received. We’ll be in touch shortly.</p><Button variant="secondary" className="mt-8 w-fit rounded-none" onClick={() => setSent(false)}>Send another</Button></div> :
          <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
            {fields.map(f => <label key={f.name} className={f.wide ? "sm:col-span-2" : ""}>
              <span className="eyebrow">{f.label}{f.required && " *"}</span>
              {f.type === "select" ? <select name={f.name} className="contact-input" defaultValue=""><option value="" disabled>Select…</option>{f.options!.map(o => <option key={o}>{o}</option>)}</select>
                : f.type === "textarea" ? <textarea name={f.name} rows={4} className="contact-input" />
                : <input name={f.name} type={f.type} className="contact-input" />}
              {errors[f.name] && <span className="mt-1 block text-xs opacity-90">{errors[f.name]}</span>}
            </label>)}
            <Button type="submit" variant="secondary" className="h-12 w-fit rounded-none px-8 sm:col-span-2">SEND ENQUIRY <ArrowUpRight /></Button>
          </form>}
        </div>
      </section>

      <footer className="section-shell bg-foreground py-16 text-background">
        <div className="grid gap-10 md:grid-cols-4">
          <div><a href="#home" className="wordmark flex items-center gap-2">nautilius<Asterisk className="size-6" /></a><p className="mt-4 text-sm opacity-70">Independent creative & digital studio.</p></div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm"><span className="eyebrow opacity-60">NAVIGATE</span>{[["Work", "work"], ["Studio", "studio"], ["Services", "services"], ["Insights", "insights"], ["Contact", "contact"]].map(([l, id]) => <a key={id} href={`#${id}`} className="hover:opacity-70">{l}</a>)}</nav>
          <div className="flex flex-col gap-2 text-sm"><span className="eyebrow opacity-60">SERVICES</span>{services.map(s => <a key={s.title} href="#services" className="hover:opacity-70">{s.title}</a>)}</div>
          <div className="flex flex-col gap-2 text-sm"><span className="eyebrow opacity-60">CONTACT</span><a href="mailto:hello@nautilius.studio">hello@nautilius.studio</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-background/20 pt-6"><span className="eyebrow opacity-70">© 2026 NAUTILIUS — ALL RIGHTS RESERVED · PRIVACY POLICY</span><Button asChild size="icon" variant="ghost" className="rounded-full border border-background/30 hover:bg-background/10 hover:text-background"><a href="#home" aria-label="Back to top"><ArrowUp /></a></Button></div>
      </footer>
      {selectedProject && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-5" onClick={() => setActiveProject(null)}><div role="dialog" aria-modal="true" aria-label={selectedProject.name} className="relative max-h-[90vh] w-full max-w-3xl overflow-auto bg-background" onClick={event => event.stopPropagation()}><Button size="icon" variant="secondary" className="absolute right-3 top-3 z-10 rounded-full" aria-label="Close project" onClick={() => setActiveProject(null)}><X /></Button><img src={selectedProject.image} alt={selectedProject.alt} className="max-h-[60vh] w-full object-cover" /><div className="p-7"><p className="eyebrow text-primary">{selectedProject.category}</p><h2 className="mt-2 text-3xl">{selectedProject.name}</h2><p className="mt-3 text-muted-foreground">{selectedProject.description}</p></div></div></div>}
    </main>
  );
}
