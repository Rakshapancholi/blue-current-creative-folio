import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, Minus, Menu, X, Asterisk } from "lucide-react";
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
  { name: "Forma", category: "BRAND STRATEGY · VISUAL IDENTITY", image: form, description: "A quieter kind of presence. A complete identity for a new perspective on everyday care." },
  { name: "Objects of intention", category: "ART DIRECTION · DIGITAL EXPERIENCE", image: structure, description: "Finding expression in the essentials. A visual world for thoughtfully made objects." },
  { name: "New Edition", category: "EDITORIAL · CREATIVE DIRECTION", image: edition, description: "An exploration of form, rhythm, and possibility. A fresh voice for contemporary culture." },
];
const services = [
  { title: "Brand identities", detail: "Strategy, naming, visual identity, and brand systems. We find what makes you different and give it a form that feels unmistakably yours." },
  { title: "Digital experiences", detail: "Websites and digital experiences that bring clarity to complexity. Considered in every detail, from the first impression to the last interaction." },
  { title: "Art & creative direction", detail: "Campaigns, photography, and visual storytelling. A distinctive creative point of view, translated into a world people can connect with." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(0);
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

      <section id="work" className="section-shell work-section">
        <div className="section-top flex items-end justify-between gap-4">
          <div><div className="eyebrow section-label">01 / SELECTED WORK</div><h2>Made to <em>mean more.</em></h2></div>
          <span className="eyebrow text-muted-foreground">A FEW THINGS WE’VE PUT INTO THE WORLD ↙</span>
        </div>
        <div className="project-grid grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, index) => <article key={project.name}>
            <Button variant="ghost" className="project-image group relative block h-auto w-full overflow-hidden rounded-none p-0" onClick={() => setActiveProject(index)} aria-label={`View ${project.name}`}>
              <img src={project.image} alt={project.name === "Forma" ? "Cobalt skincare packaging and visual identity" : project.name === "New Edition" ? "Graphic editorial publication with red and blue abstract forms" : "Chrome and leather sculptural chair in a modernist interior"} width={1200} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="project-arrow absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-background text-foreground"><ArrowUpRight /></span>
            </Button>
            <div className="mt-5 flex items-center justify-between"><h3>{project.name}</h3><span className="eyebrow text-muted-foreground">0{index + 1}</span></div>
            <p className="eyebrow mt-2 text-muted-foreground">{project.category}</p>
          </article>)}
        </div>
      </section>

      <section id="studio" className="studio-section section-shell bg-secondary">
        <div className="studio-layout grid gap-10 md:grid-cols-[1fr_3fr]">
          <div className="eyebrow">02 / THE STUDIO</div>
          <div><h2>Always curious.<br />Never <em>ordinary.</em></h2><p className="studio-manifesto">We believe the best ideas don’t follow a straight line. They evolve, connect, and open up something new.</p>
            <div className="studio-detail grid gap-8 md:grid-cols-2"><p>Nautilius is an independent creative studio working at the intersection of strategy, identity, and digital. We turn thoughtful ideas into distinctive brands.</p><p>Small by choice. Ambitious by nature. We work closely with people who care about what they put into the world.</p></div>
            <a href="#contact" className="inline-flex items-center gap-6 border-b border-foreground pb-2 text-sm">A NEW PERSPECTIVE STARTS WITH A CONVERSATION <ArrowUpRight className="size-5" /></a>
          </div>
        </div>
        <div className="studio-signoff flex items-center justify-between border-t border-border"><Asterisk className="size-16 text-primary" strokeWidth={1} /><span className="eyebrow">THOUGHTFULLY BUILT. DISTINCTLY YOURS.</span><span className="eyebrow">NAUTILIUS®</span></div>
      </section>

      <section id="services" className="section-shell services-section grid gap-10 md:grid-cols-2">
        <div><div className="eyebrow section-label">03 / WHAT WE DO</div><h2>From first spark<br />to <em>lasting impact.</em></h2><p className="services-intro text-muted-foreground">The right thinking. The right expression.<br />Every part of your brand, working together.</p></div>
        <div>{services.map((service, index) => <div className="service-row border-t border-border" key={service.title}><Button variant="ghost" className="flex h-auto w-full justify-between gap-4 rounded-none px-0 py-6 text-left hover:bg-transparent hover:text-primary" aria-expanded={activeService === index} onClick={() => setActiveService(activeService === index ? null : index)}><span className="flex items-center gap-5"><span className="eyebrow text-muted-foreground">0{index + 1}</span><span className="service-title">{service.title}</span></span>{activeService === index ? <Minus /> : <Plus />}</Button>{activeService === index && <p className="service-description text-muted-foreground">{service.detail}</p>}</div>)}</div>
      </section>

      <footer id="contact" className="section-shell bg-primary text-primary-foreground">
        <div className="flex items-center justify-between"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><span className="eyebrow flex items-center gap-2"><span className="status-dot bg-primary-foreground" /> OPEN TO NEW POSSIBILITIES</span></div>
        <a href="mailto:hello@nautilius.studio" className="footer-cta flex items-center justify-between border-b border-primary-foreground/30"><span>Let’s make<br /><em>something matter.</em></span><ArrowUpRight className="footer-arrow" strokeWidth={1} /></a>
        <div className="footer-bottom flex flex-wrap items-end justify-between gap-6"><a href="#home" className="wordmark flex items-center gap-2">nautilius<Asterisk className="size-6" /></a><span className="eyebrow">© 2026 NAUTILIUS — ALL RIGHTS RESERVED</span><Button asChild size="icon" variant="ghost" className="rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10"><a href="#home" aria-label="Back to top"><ArrowUp /></a></Button></div>
      </footer>
      {selectedProject && <div className="project-modal fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-5" onClick={() => setActiveProject(null)}><div role="dialog" aria-modal="true" aria-label={selectedProject.name} className="relative max-h-[90vh] w-full max-w-3xl overflow-auto bg-background" onClick={event => event.stopPropagation()}><Button size="icon" variant="secondary" className="absolute right-3 top-3 z-10 rounded-full" aria-label="Close project" onClick={() => setActiveProject(null)}><X /></Button><img src={selectedProject.image} alt={selectedProject.name} className="max-h-[60vh] w-full object-cover" /><div className="p-7"><h2 className="text-3xl">{selectedProject.name}</h2><p className="mt-3 text-muted-foreground">{selectedProject.description}</p></div></div></div>}
    </main>
  );
}
