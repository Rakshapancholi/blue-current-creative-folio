import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Check, Plus, Minus, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/nautilius-hero.jpg";
import digital from "@/assets/digital.jpg";
import form from "@/assets/project-form.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import servicePaid from "@/assets/service-paid.jpg";
import serviceContent from "@/assets/service-content.jpg";
import teamFounder from "@/assets/team-founder.jpg";
import teamSeo from "@/assets/team-seo.jpg";
import teamSocial from "@/assets/team-social.jpg";
import teamPaid from "@/assets/team-paid.jpg";
import logo from "@/assets/brand/nautilus-logo.png.asset.json";
import teamPhoto from "@/assets/brand/nautilus-team.png.asset.json";
import clientLogos from "@/assets/brand/client-logos.png.asset.json";
import featuredMedia from "@/assets/brand/featured-media.png.asset.json";
import awardGlobal100 from "@/assets/brand/award-global-100.png.asset.json";
import awardCLW from "@/assets/brand/award-corporate-livewire.png.asset.json";
import awardMA from "@/assets/brand/award-ma-today.png.asset.json";
import awardSME from "@/assets/brand/award-sme500.png.asset.json";
import workNanografix from "@/assets/work/nanografix.png.asset.json";
import workAllison from "@/assets/work/allison-homes.png.asset.json";
import workFocus from "@/assets/work/focus-wave.png.asset.json";
import workHarlow from "@/assets/work/harlow-ac.png.asset.json";
import workRavetch from "@/assets/work/ravetch.png.asset.json";
import workZebra from "@/assets/work/zebra.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nautilus Marketing — Digital Marketing Agency, London" },
    { name: "description", content: "Social media, SEO, paid advertising, web design and content creation — all under one roof. Award-winning London digital marketing agency." },
    { property: "og:title", content: "Nautilus Marketing — Make your brand impossible to overlook" },
    { property: "og:description", content: "Creative thinking. Digital know-how. No ordinary marketing." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const awards = [
  { src: awardGlobal100.url, title: "Global 100", text: "Digital Marketing Agency of the Year" },
  { src: awardCLW.url, title: "Global Awards 2025/26", text: "CorporateLiveWire — Winner" },
  { src: awardMA.url, title: "M&A Today Global Awards 2026", text: "Digital Marketing Agency, UK" },
  { src: awardSME.url, title: "SME500 United Kingdom 2026", text: "Most Innovative Global Digital Marketing Agency" },
];
const team = [
  { image: teamFounder, role: "Founders & Strategy" },
  { image: teamSocial, role: "Social Media & Content" },
  { image: teamSeo, role: "Search & SEO" },
  { image: teamPaid, role: "Paid Media" },
];
const services = [
  { title: "Social Media & Organic Marketing", line: "Build an online presence people want to engage with.", image: serviceSocial, alt: "Filming social video content on a phone gimbal", items: ["Social media management", "Content planning and creation", "Community management", "TikTok", "LinkedIn ghostwriting", "Email marketing"], cta: "Explore social media services" },
  { title: "Search Engine Optimisation", line: "Help the right people discover your business.", image: serviceSeo, alt: "Marketer reviewing search performance data", items: ["SEO", "Local and international SEO", "Ecommerce SEO", "Technical and on-page SEO", "Link building and digital PR"], cta: "Explore SEO" },
  { title: "Paid Advertising", line: "Put your business in front of the right audience.", image: servicePaid, alt: "Team reviewing ad campaign dashboards", items: ["Google Ads", "Meta Ads", "Amazon Ads", "LinkedIn Ads", "PPC management"], cta: "Explore paid advertising" },
  { title: "Website & App Development", line: "Create digital experiences that work as well as they look.", image: digital, alt: "Website design shown on laptop and phone", items: ["Website design and development", "WordPress and Wix", "UI/UX design", "App design and development", "Website maintenance and migration"], cta: "Explore web services" },
  { title: "Branding & Design", line: "Give your brand a recognisable visual identity.", image: form, alt: "Brand identity applied to packaging", items: ["Logo design", "Brand identity", "Graphic design", "Social media graphics", "Email design"], cta: "Explore design services" },
  { title: "Content Creation", line: "Give your brand something worth looking at.", image: serviceContent, alt: "Photographer on a product photoshoot set", items: ["Photography", "Videography", "Copywriting", "Blog content"], cta: "Explore content creation" },
];
const projects = [
  { name: "Harlow Athletic Club", service: "Website design & development", image: workHarlow.url, description: "A new website for a community athletics club, built around members, events and training." },
  { name: "Ravetch", service: "Website design & development", image: workRavetch.url, description: "A clear, corporate web presence for a clean and sustainable energy business." },
  { name: "Nanografix", service: "Service to be confirmed", image: workNanografix.url, description: "Advanced security solutions brand." },
  { name: "Allison Homes", service: "Service to be confirmed", image: workAllison.url, description: "Housebuilder brand across the UK." },
  { name: "Focus Wave Clinic", service: "Service to be confirmed", image: workFocus.url, description: "Healthcare clinic brand." },
  { name: "Zebra", service: "Service to be confirmed", image: workZebra.url, description: "Housing for international students." },
];
const steps = [
  { title: "Let's understand your goals", text: "We start with a conversation about your business, challenges and what you want to achieve." },
  { title: "Build the right approach", text: "We put together a proposal outlining the recommended services, scope and fees." },
  { title: "Make it happen", text: "Once everything is agreed, our team gets to work, keeping communication open throughout the project." },
  { title: "Keep moving forward", text: "We review the work, share progress and help identify opportunities to improve." },
];
const faqs = [
  { q: "What services does Nautilus Marketing offer?", a: "We offer a range of digital marketing services, including social media management, SEO, PPC, website and app development, design, content creation and digital PR." },
  { q: "Can I work with Nautilus for just one service?", a: "Our services cover different areas of digital marketing. Get in touch to discuss what you need, and we'll help identify an appropriate scope." },
  { q: "Which social media platforms do you work with?", a: "Our organic marketing offering includes social media, TikTok, LinkedIn ghostwriting and community management. Tell us which platforms matter to your business so we can discuss your requirements." },
  { q: "How does the process begin?", a: "It starts with an initial consultation. We'll discuss your requirements and, if we're a good fit, provide a written proposal outlining the work and fees." },
  { q: "Do you work with small businesses?", a: "We work with businesses of different sizes, from start-ups to larger organisations. Get in touch to discuss your business and goals." },
  { q: "Where is Nautilus Marketing based?", a: "Our UK office is in London. We also have a presence in Cape Town and work with clients across different markets." },
];
const enquiryTypes = ["Book a discovery call", "Send an enquiry"];
const fields: { name: string; label: string; type: string; required?: boolean; wide?: boolean; options?: string[] }[] = [
  { name: "name", label: "NAME", type: "text", required: true },
  { name: "email", label: "EMAIL", type: "email", required: true },
  { name: "company", label: "COMPANY", type: "text" },
  { name: "service", label: "SERVICE REQUIRED", type: "select", required: true, options: [...services.map(s => s.title), "Not sure yet"] },
  { name: "message", label: "TELL US ABOUT YOUR BUSINESS", type: "textarea", required: true, wide: true },
];
const nav: [string, string][] = [["Who we are", "about"], ["Services", "services"], ["Work", "work"], ["FAQs", "faqs"]];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const service = services[activeService] ?? services[0]!;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [enquiryType, setEnquiryType] = useState(enquiryTypes[1]!);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const bookCall = () => { setEnquiryType(enquiryTypes[0]!); setSent(false); };
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
  return (
    <main>
      {/* 01 HERO — layout unchanged, copy from the brief */}
      <section className="hero relative overflow-hidden bg-primary text-primary-foreground" id="home">
        <img className="hero-image absolute inset-0 h-full w-full object-cover" src={hero} alt="Sculptural silver nautilus spiral on a deep blue background" width={1920} height={1024} />
        <header className="site-header relative z-10 flex items-center justify-between border-b border-primary-foreground/25">
          <a href="#home" aria-label="Nautilus Marketing home"><img src={logo.url} alt="Nautilus Marketing" className="nav-logo logo-light" width={181} height={48} /></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}
          </nav>
          <Button asChild variant="secondary" className="contact-button hidden rounded-none md:inline-flex"><a href="#contact" onClick={bookCall}>BOOK A DISCOVERY CALL <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-foreground/10" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </header>
        {menuOpen && <nav className="mobile-nav absolute z-20 flex flex-col bg-primary" aria-label="Mobile navigation">{[...nav, ["Contact", "contact"] as [string, string]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight /></a>)}</nav>}
        <div className="hero-content relative z-10">
          <div className="eyebrow flex items-center gap-2"><span className="status-dot bg-primary-foreground" /> DIGITAL MARKETING · CREATIVE · STRATEGY</div>
          <h1>Make your brand <em>impossible to overlook.</em></h1>
          <p className="hero-statement">From scroll-stopping social content to smarter digital marketing, we bring creative thinking and practical expertise together to help businesses grow online.</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button asChild variant="secondary" className="h-12 rounded-none px-7"><a href="#services">EXPLORE OUR SERVICES <ArrowDown /></a></Button>
            <a href="#contact" onClick={bookCall} className="hero-work-link mt-0 inline-flex items-center gap-4">BOOK A DISCOVERY CALL <span className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/50"><ArrowUpRight className="size-4" /></span></a>
          </div>
        </div>
        <div className="hero-bottom relative z-10 flex items-end justify-between gap-6 border-t border-primary-foreground/25">
          <p>Social media management, SEO, paid advertising, web design and content creation — all under one roof.</p>
          <span className="eyebrow">SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      {/* 02 TRUSTED, AWARDED & FEATURED */}
      <section className="section-shell py-24" aria-labelledby="credentials-title">
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-end">
          <div><div className="eyebrow section-label text-muted-foreground">GOOD COMPANY, GOOD WORK</div><h2 id="credentials-title">Our work has made <em>its way around.</em></h2></div>
          <p className="text-muted-foreground">We've partnered with businesses across different industries, helping them build their digital presence through creative and strategic marketing.</p>
        </div>
        <div className="mt-14">
          <span className="eyebrow text-muted-foreground">TRUSTED BY</span>
          <div className="mt-4 overflow-hidden bg-secondary px-6 py-6"><img src={clientLogos.url} alt="Clients: Allison Homes, Maverick TV, Wordfence, We Are Padel, Atlantic Productions, Amazon, European Commission, On the Beach, Mason London" className="mx-auto w-full max-w-6xl" loading="lazy" /></div>
        </div>
        <div className="mt-16">
          <span className="eyebrow text-muted-foreground">RECOGNISED FOR OUR WORK</span>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {awards.map(a => <figure key={a.title} className="flex flex-col bg-secondary p-6 text-secondary-foreground">
              <div className="flex h-40 items-center justify-center"><img src={a.src} alt={`${a.title} winner badge`} className="max-h-full max-w-full object-contain" loading="lazy" /></div>
              <figcaption className="mt-5 border-t border-secondary-foreground/15 pt-4"><p className="font-medium">{a.title}</p><p className="mt-1 text-sm opacity-75">{a.text}</p></figcaption>
            </figure>)}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-background py-20 text-foreground" aria-labelledby="featured-title">
        <h2 id="featured-title" className="text-center text-4xl md:text-5xl">Featured in</h2>
        <div className="mx-auto mt-3 flex w-28 items-center justify-center gap-1.5"><span className="h-0.5 w-10 bg-foreground" /><span className="h-0.5 w-3 bg-foreground" /><span className="h-0.5 w-10 bg-foreground" /></div>
        <img src={featuredMedia.url} alt="Featured in Forbes, Yahoo Finance, Content Marketing Institute, The Drum, GoDaddy and HubSpot" className="mx-auto mt-10 w-full max-w-5xl px-6" loading="lazy" />
      </section>

      {/* 03 WHO WE ARE */}
      <section id="about" className="section-shell py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={teamPhoto.url} alt="Two Nautilus team members chatting in front of the Nautilus 'Need a Nerd's Advice?' stand" width={1280} height={1920} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <div className="eyebrow section-label text-muted-foreground">MEET THE NAUTI NERDS</div>
            <h2>A different kind of agency. <em>A different way of thinking.</em></h2>
            <div className="mt-7 space-y-4 text-muted-foreground">
              <p>We're Nautilus Marketing — a London-based digital marketing agency bringing together creative minds, technical thinkers and marketing specialists.</p>
              <p>Founded in 2017, we started with a simple idea: marketing should be more thoughtful, more collaborative and a lot less ordinary.</p>
              <p>Today, our team works across social media, search, paid advertising, design and web development, bringing different skills together to solve different business challenges.</p>
              <p className="text-foreground">No unnecessary jargon. No one-size-fits-all thinking. Just a team that gets involved, understands your goals and cares about the work.</p>
            </div>
            <a href="#team" className="mt-8 inline-flex items-center gap-4 border-b border-foreground pb-2 text-sm">GET TO KNOW OUR TEAM <ArrowUpRight className="size-5" /></a>
          </div>
        </div>
        <div id="team" className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {team.map(t => <figure key={t.role} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-card"><img src={t.image} alt={`Nautilus ${t.role} specialist`} width={768} height={960} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-3"><span className="font-medium">{t.role}</span><ArrowUpRight className="size-4 opacity-60" /></figcaption>
          </figure>)}
        </div>
      </section>

      {/* 04 SERVICES */}
      <section id="services" className="section-shell bg-surface py-24 text-surface-foreground">
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-end">
          <div><div className="eyebrow section-label text-muted-foreground">WHAT WE DO</div><h2>Everything your brand needs <em>to move forward.</em></h2></div>
          <p className="text-muted-foreground">Different businesses need different things. Whether you're building your online presence, reaching new audiences or improving what's already working, we bring the right creative and digital skills together.</p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div role="tablist" aria-label="Services" className="border-t border-border">
            {services.map((s, i) => <button key={s.title} role="tab" aria-selected={i === activeService} onClick={() => setActiveService(i)} onMouseEnter={() => setActiveService(i)} className={`flex w-full items-baseline gap-5 border-b border-border py-5 text-left transition-opacity ${i === activeService ? "opacity-100" : "opacity-55 hover:opacity-90"}`}>
              <span className="eyebrow">0{i + 1}</span>
              <span className="flex-1 text-2xl font-medium md:text-3xl">{s.title}</span>
              <ArrowUpRight className={`size-5 transition-transform ${i === activeService ? "rotate-45" : ""}`} />
            </button>)}
          </div>
          <div role="tabpanel" className="bg-card text-card-foreground">
            <div className="aspect-[16/11] overflow-hidden"><img key={service.title} src={service.image} alt={service.alt} loading="lazy" className="h-full w-full object-cover animate-in fade-in duration-500" /></div>
            <div className="p-8">
              <p className="text-2xl font-medium">{service.line}</p>
              <ul className="mt-6 grid gap-x-6 gap-y-2 text-muted-foreground sm:grid-cols-2">{service.items.map(it => <li key={it} className="flex items-center gap-2"><Check className="size-4 shrink-0" />{it}</li>)}</ul>
              <Button asChild variant="secondary" className="mt-8 h-11 rounded-none px-6"><a href="#contact">{service.cta} <ArrowUpRight /></a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* 05 SELECTED WORK */}
      <section id="work" className="section-shell py-24">
        <div className="section-top flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div><div className="eyebrow section-label text-muted-foreground">A CLOSER LOOK</div><h2>Good work <em>speaks for itself.</em></h2></div>
          <p className="max-w-md text-muted-foreground">Every business has a different challenge. Here's a selection of projects where we've put our creative, technical and marketing skills into action.</p>
        </div>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => <article key={p.name} className="group">
            <div className="aspect-[452/250] overflow-hidden bg-card"><img src={p.image} alt={`${p.name} project`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <p className="eyebrow mt-5 text-muted-foreground">{p.service.toUpperCase()}</p>
            <h3 className="mt-2 text-2xl font-medium">{p.name}</h3>
            <p className="mt-2 text-muted-foreground">{p.description}</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">View project <ArrowUpRight className="size-4" /></a>
          </article>)}
        </div>
        <div className="mt-14"><Button asChild variant="secondary" className="h-12 rounded-none px-7"><a href="#contact">EXPLORE ALL PROJECTS <ArrowUpRight /></a></Button></div>
      </section>

      {/* 06 HOW WE WORK + CLIENT EXPERIENCES */}
      <section id="process" className="section-shell bg-surface py-24 text-surface-foreground">
        <div className="eyebrow section-label text-muted-foreground">GOOD WORK, GOOD RELATIONSHIPS</div>
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-end">
          <h2>A clear process. <em>A team that's in your corner.</em></h2>
          <p className="text-muted-foreground">Great marketing starts with understanding your business. We take the time to understand what you need, put together a tailored proposal and work with you to bring it to life.</p>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => <li key={s.title} className="border-t border-border pt-6"><span className="text-5xl font-light">0{i + 1}</span><h3 className="mt-4 text-xl font-medium">{s.title}</h3><p className="mt-2 text-muted-foreground">{s.text}</p></li>)}
        </ol>
        <div className="mt-20 grid items-stretch gap-6 md:grid-cols-[2fr_3fr]">
          <img src={teamPhoto.url} alt="Nautilus team in conversation" loading="lazy" className="aspect-[4/3] h-full w-full object-cover object-[center_60%]" />
          <figure className="flex flex-col justify-between bg-secondary p-10 text-secondary-foreground">
            <div><span className="eyebrow opacity-70">WHAT OUR CLIENTS SAY</span><Quote className="mt-6 size-10" /></div>
            <blockquote className="mt-6 text-2xl leading-snug md:text-3xl">"Really happy with the service from Nautilus Marketing. The team was professional, friendly and responsive, and communication was great throughout."</blockquote>
            <figcaption className="mt-8 eyebrow">NAZARII KYDYK · VERIFIED CUSTOMER REVIEW</figcaption>
          </figure>
        </div>
      </section>

      {/* 07 FAQs */}
      <section id="faqs" className="section-shell py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div><div className="eyebrow section-label text-muted-foreground">GOOD QUESTIONS</div><h2>Before we get started, <em>here's what you might want to know.</em></h2></div>
          <div className="border-t border-border">
            {faqs.map((f, i) => <div key={f.q} className="border-b border-border">
              <button className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl font-medium" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}{openFaq === i ? <Minus className="size-5 shrink-0" /> : <Plus className="size-5 shrink-0" />}</button>
              {openFaq === i && <p className="pb-6 text-muted-foreground animate-in fade-in">{f.a}</p>}
            </div>)}
          </div>
        </div>
      </section>

      {/* 08 FINAL CTA + CONTACT */}
      <section id="contact" className="section-shell bg-surface py-24 text-surface-foreground">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <div className="eyebrow section-label flex items-center gap-2 text-muted-foreground"><span className="status-dot bg-surface-foreground" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h2 className="text-5xl md:text-7xl">Have something <em>ambitious in mind?</em></h2>
            <p className="mt-6 max-w-md text-muted-foreground">Whether you need a stronger social presence, better search visibility, a new website or a complete digital marketing strategy, let's talk about what you want to achieve.</p>
            <p className="mt-4 max-w-md">Tell us a little about your business. We'll take it from there.</p>
            <dl className="mt-10 space-y-5 text-sm">
              <div><dt className="eyebrow text-muted-foreground">EMAIL</dt><dd className="mt-1 text-lg"><a href="mailto:info@nautilusmarketing.co.uk">info@nautilusmarketing.co.uk</a></dd></div>
              <div><dt className="eyebrow text-muted-foreground">PHONE</dt><dd className="mt-1 text-lg"><a href="tel:+442045139344">020 4513 9344</a></dd></div>
              <div><dt className="eyebrow text-muted-foreground">LONDON OFFICE</dt><dd className="mt-1 text-lg">Vintage House, 36–37 Albert Embankment,<br />London SE1 7TL, United Kingdom</dd></div>
            </dl>
          </div>
          {sent ? <div role="status" className="flex flex-col justify-center border border-border p-10"><Check className="size-10" /><h3 className="mt-5 text-3xl">Thank you.</h3><p className="mt-3 text-muted-foreground">We've received your {enquiryType === enquiryTypes[0] ? "discovery call request" : "enquiry"}. We'll be in touch shortly.</p><Button variant="secondary" className="mt-8 w-fit rounded-none" onClick={() => setSent(false)}>Send another</Button></div> :
          <form noValidate onSubmit={submit} className="grid content-start gap-6 sm:grid-cols-2">
            <div className="flex gap-2 sm:col-span-2" role="radiogroup" aria-label="Enquiry type">
              {enquiryTypes.map(t => <Button key={t} type="button" role="radio" aria-checked={enquiryType === t} variant={enquiryType === t ? "secondary" : "outline"} className={`rounded-none ${enquiryType === t ? "" : "bg-transparent"}`} onClick={() => setEnquiryType(t)}>{t}</Button>)}
            </div>
            {fields.map(f => <label key={f.name} className={f.wide ? "sm:col-span-2" : ""}>
              <span className="eyebrow">{f.label}{f.required && " *"}</span>
              {f.type === "select" ? <select name={f.name} className="contact-input" defaultValue=""><option value="" disabled>Select…</option>{f.options!.map(o => <option key={o}>{o}</option>)}</select>
                : f.type === "textarea" ? <textarea name={f.name} rows={4} className="contact-input" />
                : <input name={f.name} type={f.type} className="contact-input" />}
              {errors[f.name] && <span className="mt-1 block text-xs opacity-90">{errors[f.name]}</span>}
            </label>)}
            <Button type="submit" variant="secondary" className="h-12 w-fit rounded-none px-8 sm:col-span-2">{enquiryType === enquiryTypes[0] ? "BOOK A DISCOVERY CALL" : "SEND US AN ENQUIRY"} <ArrowUpRight /></Button>
          </form>}
        </div>
      </section>

      <footer className="section-shell bg-background py-16 text-foreground">
        <div className="grid gap-10 md:grid-cols-4">
          <div><a href="#home" aria-label="Nautilus Marketing home"><img src={logo.url} alt="Nautilus Marketing" className="nav-logo logo-light" width={181} height={48} /></a><p className="mt-5 text-sm text-muted-foreground">Creative thinking. Digital know-how. No ordinary marketing.</p></div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm"><span className="eyebrow text-muted-foreground">NAVIGATE</span>{[...nav, ["Contact", "contact"] as [string, string]].map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
          <div className="flex flex-col gap-2 text-sm"><span className="eyebrow text-muted-foreground">SERVICES</span>{services.map(s => <a key={s.title} href="#services">{s.title}</a>)}</div>
          <div className="flex flex-col gap-2 text-sm"><span className="eyebrow text-muted-foreground">CONTACT</span><a href="mailto:info@nautilusmarketing.co.uk">info@nautilusmarketing.co.uk</a><a href="tel:+442045139344">020 4513 9344</a><span className="text-muted-foreground">Vintage House, 36–37 Albert Embankment, London SE1 7TL</span></div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"><span className="eyebrow text-muted-foreground">© 2026 NAUTILUS MARKETING — CREATIVE THINKING. DIGITAL KNOW-HOW. NO ORDINARY MARKETING.</span><Button asChild size="icon" variant="ghost" className="rounded-full border border-border"><a href="#home" aria-label="Back to top"><ArrowUp /></a></Button></div>
      </footer>
    </main>
  );
}
