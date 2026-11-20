import cl0 from "@/assets/brand/clients/allison-homes.png.asset.json";
import cl1 from "@/assets/brand/clients/maverick-tv.png.asset.json";
import cl2 from "@/assets/brand/clients/wordfence.png.asset.json";
import cl3 from "@/assets/brand/clients/we-are-padel.png.asset.json";
import cl4 from "@/assets/brand/clients/atlantic-productions.png.asset.json";
import cl5 from "@/assets/brand/clients/amazon.png.asset.json";
import cl6 from "@/assets/brand/clients/european-commission.png.asset.json";
import cl7 from "@/assets/brand/clients/on-the-beach.png.asset.json";
import cl8 from "@/assets/brand/clients/mason-london.png.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/nautilius-hero.jpg";
import digital from "@/assets/digital.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import servicePaid from "@/assets/service-paid.jpg";
import serviceContent from "@/assets/service-content.jpg";
import teamFounder from "@/assets/team-founder.jpg";
import teamSeo from "@/assets/team-seo.jpg";
import teamSocial from "@/assets/team-social.jpg";
import teamPaid from "@/assets/team-paid.jpg";
import testimonialClient from "@/assets/testimonial-client.jpg";
import logo from "@/assets/brand/nautilus-logo.png.asset.json";
import teamPhoto from "@/assets/brand/nautilus-team.png.asset.json";
import clientLogos from "@/assets/brand/client-logos.png.asset.json";
import featuredMedia from "@/assets/brand/featured-grid.png.asset.json";
import awardGlobal100 from "@/assets/brand/award-global-100.png.asset.json";
import awardCLW from "@/assets/brand/award-corporate-livewire.png.asset.json";
import awardMA from "@/assets/brand/award-ma-today.png.asset.json";
import awardSME from "@/assets/brand/award-sme500.png.asset.json";
import workAllison from "@/assets/work/allison-homes.png.asset.json";
import mockTablet from "@/assets/work/mock-high-contrast-purple-tablet-mockup.png.asset.json";
import mockLaptop from "@/assets/work/mock-minimal-laptop-studio-mockup.png.asset.json";
import mockProduct from "@/assets/work/mock-minimalist-product-details-screen.png.asset.json";
import mockStrutt from "@/assets/work/mock-strutt-studio-oker.jpeg.asset.json";

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

const clientList = [{ src: cl0.url, name: "Allison Homes" },{ src: cl1.url, name: "Maverick TV" },{ src: cl2.url, name: "Wordfence" },{ src: cl3.url, name: "We Are Padel" },{ src: cl4.url, name: "Atlantic Productions" },{ src: cl5.url, name: "Amazon" },{ src: cl6.url, name: "European Commission" },{ src: cl7.url, name: "On the Beach" },{ src: cl8.url, name: "Mason London" }];

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
type Member = { image: string; role: string; label?: string | undefined };
const m = (i: number, label?: string): Member => ({ ...team[i]!, label });
const teamGrid: (Member | "logo" | null)[] = [
  null, m(0, "pill-left"), m(1), null,
  m(2), "logo", m(3, "pill-right"), null,
  null, { image: teamPhoto.url, role: "The whole crew" }, null, null,
];
const services = [
  { title: "Social Media & Organic Marketing", line: "Build an online presence people want to engage with.", image: serviceSocial, alt: "Filming social video content on a phone gimbal", items: ["Social media management", "Content planning and creation", "Community management", "TikTok", "LinkedIn ghostwriting", "Email marketing"], cta: "Explore social media services" },
  { title: "Search Engine Optimisation", line: "Help the right people discover your business.", image: serviceSeo, alt: "Marketer reviewing search performance data", items: ["SEO", "Local and international SEO", "Ecommerce SEO", "Technical and on-page SEO", "Link building and digital PR"], cta: "Explore SEO" },
  { title: "Paid Advertising", line: "Put your business in front of the right audience.", image: servicePaid, alt: "Team reviewing ad campaign dashboards", items: ["Google Ads", "Meta Ads", "Amazon Ads", "LinkedIn Ads", "PPC management"], cta: "Explore paid advertising" },
  { title: "Website & App Development", line: "Create digital experiences that work as well as they look.", image: digital, alt: "Website design shown on laptop and phone", items: ["Website design and development", "WordPress and Wix", "UI/UX design", "App design and development", "Website maintenance and migration"], cta: "Explore web services" },
  { title: "Branding & Design", line: "Give your brand a recognisable visual identity.", image: workAllison.url, alt: "Brand identity work", items: ["Logo design", "Brand identity", "Graphic design", "Social media graphics", "Email design"], cta: "Explore design services" },
  { title: "Content Creation", line: "Give your brand something worth looking at.", image: serviceContent, alt: "Photographer on a product photoshoot set", items: ["Photography", "Videography", "Copywriting", "Blog content"], cta: "Explore content creation" },
];
const showcase = [
  { name: "Andere Lab", tag: "Web Design", time: "6 weeks", image: mockLaptop.url },
  { name: "Strutt Studio", tag: "Branding", time: "4 weeks", image: mockStrutt.url },
  { name: "Nocturne Tablet", tag: "App Design", time: "5 weeks", image: mockTablet.url },
  { name: "Strutt Product Details", tag: "UI/UX", time: "3 weeks", image: mockProduct.url },
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
  const [activeService, setActiveService] = useState<number | null>(null);
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
  const H = ({ id, children, light }: { id?: string; children: React.ReactNode; light?: boolean }) => <h2 id={id} className={`display-h ${light ? "" : "text-primary"}`}>{children}</h2>;
  return (
    <main>
      <div className="hero-stage relative">
      <section className="hero relative overflow-hidden bg-primary text-primary-foreground" id="home">
        <img className="hero-image absolute inset-y-0 right-0 h-full w-full object-cover" src={hero} alt="Sculptural silver nautilus spiral" width={1920} height={1024} />
        <div className="hero-tint absolute inset-0" aria-hidden />
        <header className="site-header relative z-10 flex items-center justify-between border-b border-primary-foreground/20">
          <a href="#home" aria-label="Nautilus Marketing home"><img src={logo.url} alt="Nautilus Marketing" className="nav-logo logo-light" width={181} height={48} /></a>
          <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">{nav.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
          <Button asChild variant="secondary" className="contact-button hidden rounded-none md:inline-flex"><a href="#contact" onClick={bookCall}>BOOK A DISCOVERY CALL <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-foreground/10" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </header>
        {menuOpen && <nav className="mobile-nav absolute z-20 flex flex-col bg-primary" aria-label="Mobile navigation">{[...nav, ["Contact", "contact"] as [string, string]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight /></a>)}</nav>}
        <div className="hero-content relative z-10">
          <h1>Make your brand<br />impossible to<br />overlook.</h1>
          <p className="hero-statement">From scroll-stopping social content to smarter digital marketing, we bring creative thinking and practical expertise together to help businesses grow online.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="secondary" className="hero-btn rounded-none"><a href="#work">VIEW OUR WORK <ArrowUpRight /></a></Button>
            <Button asChild variant="outline" className="hero-btn rounded-none border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="#contact" onClick={bookCall}>BOOK A CALL <ArrowUpRight /></a></Button>
          </div>
          <div className="mt-20 flex flex-wrap items-center gap-12" aria-label="Clients">
            {[clientList[6]!, clientList[5]!, clientList[4]!].map(c => <img key={c.name} src={c.src} alt={c.name} className="logo-light h-10 w-auto max-w-none object-contain md:h-12" />)}
          </div>
        </div>
      </section>

      <section id="services" className="slide-over section-shell bg-secondary py-36">
        <div className="text-center"><H>Our services</H></div>
        <div className="relative mt-20 flex flex-col items-center" onMouseLeave={() => setActiveService(null)}>
          {services.map((s, i) => <a key={s.title} href="#contact" onMouseEnter={() => setActiveService(i)} onFocus={() => setActiveService(i)} className={`service-line thunder py-3 text-center text-5xl transition-colors duration-300 md:text-7xl ${activeService === null || activeService === i ? "text-foreground" : "text-muted-foreground/40"}`}>{s.title}</a>)}
          {services.map((s, i) => <img key={s.title} src={s.image} alt="" aria-hidden className={`service-reveal ${activeService === i ? "is-on" : ""}`} style={{ top: `${i * 16.6 - 6}%` }} />)}
        </div>
      </section>
      </div>

      <section className="section-shell py-36" aria-labelledby="clients-title">
        <div className="grid gap-10 md:grid-cols-2 md:items-end"><H id="clients-title">Good company,<br />good work</H><p className="max-w-md text-muted-foreground">We've partnered with businesses across different industries, helping them build their digital presence through creative and strategic marketing.</p></div>
      </section>
      <div className="ticker overflow-hidden pb-36" aria-label="Clients">
        <div className="ticker-track items-center">
          {[0, 1].map(k => <div key={k} className="flex shrink-0 items-center gap-20 pr-20 md:gap-28 md:pr-28" aria-hidden={k > 0}>
            {clientList.map(c => <img key={c.name} src={c.src} alt={k === 0 ? c.name : ""} className="h-12 w-auto max-w-none object-contain md:h-16" loading="lazy" />)}
          </div>)}
        </div>
      </div>

      <section className="section-shell border-t border-border py-36" aria-labelledby="awards-title">
        <div className="grid gap-10 md:grid-cols-2 md:items-end"><H id="awards-title">Award-winning,<br />internationally</H><p className="max-w-md text-muted-foreground">Independent recognition for the work, the thinking and the people behind it.</p></div>
        <div className="mt-20 grid grid-cols-2 border-l border-t border-border lg:grid-cols-4">
          {awards.map(a => <figure key={a.title} className="award-cell group flex flex-col border-b border-r border-border p-10">
            <div className="flex h-40 items-center justify-center"><img src={a.src} alt={`${a.title} winner badge`} className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" /></div>
            <figcaption className="mt-8"><p className="font-medium leading-tight">{a.title}</p><p className="mt-1 text-sm text-muted-foreground">{a.text}</p></figcaption>
          </figure>)}
        </div>
      </section>

      <section className="deep section-shell py-24" aria-labelledby="featured-title">
        <div className="flex flex-col items-center gap-12 text-center"><H id="featured-title" light>Featured in</H>
          <img src={featuredMedia.url} alt="Featured in Forbes, Yahoo Finance, Content Marketing Institute, The Drum, GoDaddy and HubSpot" className="w-full max-w-6xl" loading="lazy" /></div>
      </section>

      <section id="about" className="section-shell py-36">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <img src={teamPhoto.url} alt="Two Nautilus team members chatting in front of the Nautilus stand" loading="lazy" className="h-[560px] w-full object-cover object-[center_40%] md:h-[720px]" />
          <div>
            <H>A different<br />kind of agency</H>
            <p className="mt-10 max-w-lg text-xl">A London-based digital marketing agency, founded in 2017, bringing together creative minds, technical thinkers and marketing specialists.</p>
            <p className="mt-6 max-w-lg text-muted-foreground">No jargon. No one-size-fits-all thinking. Just a team that cares about the work.</p>
          </div>
        </div>
        <div id="team" className="mt-40 grid items-center gap-16 lg:grid-cols-[2fr_3fr]">
          <div><H>Meet the<br />Nauti Nerds</H><p className="mt-8 max-w-sm text-muted-foreground">Social, search, paid, design and web — under one roof.</p></div>
          <div className="team-grid" aria-label="Nautilus team">
            {teamGrid.map((t, i) => t === null ? <span key={i} className="team-tile team-empty" aria-hidden /> :
              t === "logo" ? <span key={i} className="team-tile team-logo"><img src={logo.url} alt="" className="w-4/5" /></span> :
              <figure key={i} className="team-tile group"><img src={t.image} alt={`Nautilus ${t.role} specialist`} loading="lazy" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />{t.label && <figcaption className={`float-pill team-label ${t.label}`}>{t.role}</figcaption>}</figure>)}
          </div>
        </div>
      </section>

      <section id="work" className="deep section-shell py-36">
        <div className="mb-20"><H light>Good work<br />speaks for itself</H></div>
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {showcase.map(p => <a key={p.name} href="#contact" className="group block border-b border-primary-foreground/20 pb-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={`${p.name} project`} loading="lazy" className="work-img h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute bottom-4 right-4 bg-background/85 px-3 py-1 text-[11px] uppercase tracking-wide text-foreground">{p.tag}</span>
            </div>
            <p className="mt-4 text-sm opacity-60">{p.time}</p>
            <h3 className="mt-2 flex items-center justify-between text-2xl font-medium uppercase">{p.name}<ArrowUpRight className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></h3>
          </a>)}
        </div>
      </section>

      <section id="process" className="section-shell bg-secondary py-36">
        <H>How we work</H>
        <ol className="mt-16 border-t border-border">
          {steps.map((s, i) => <li key={s.title} className="grid gap-4 border-b border-border py-8 md:grid-cols-[70px_1fr_1fr]"><span className="text-[10px] text-muted-foreground">0{i + 1}</span><h3 className="thunder text-4xl md:text-5xl">{s.title}</h3><p className="text-sm text-muted-foreground">{s.text}</p></li>)}
        </ol>
        <div className="mt-40">
          <H>What our<br />clients say</H>
          <div className="mt-24 grid items-end gap-8 md:grid-cols-[2fr_3fr]">
            <figure className="testi-portrait"><img src={testimonialClient} alt="Nazarii Kydyk" width={896} height={1024} loading="lazy" /><figcaption className="testi-caption">Professional, friendly &amp; responsive.</figcaption></figure>
            <figure className="float-card flex min-h-[320px] flex-col justify-between p-12">
              <blockquote className="text-2xl leading-snug md:text-3xl">"Really happy with the service from Nautilus Marketing. The team was professional, friendly and responsive, and communication was great throughout."</blockquote>
              <figcaption className="mt-8"><p className="font-medium">Nazarii Kydyk</p><p className="text-sm text-muted-foreground">Verified customer review</p></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faqs" className="section-shell py-36">
        <div className="grid gap-16 md:grid-cols-[2fr_3fr]">
          <H>Good<br />questions</H>
          <div className="border-t border-border">
            {faqs.map((f, i) => <div key={f.q} className="border-b border-border">
              <button className="flex w-full items-center justify-between gap-6 py-7 text-left text-lg font-medium" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}{openFaq === i ? <Minus className="size-5 shrink-0" /> : <Plus className="size-5 shrink-0" />}</button>
              {openFaq === i && <p className="pb-7 text-muted-foreground animate-in fade-in">{f.a}</p>}
            </div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="electric section-shell pt-28 pb-10">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <H light>Build your new<br />future with us</H>
            <p className="mt-8 max-w-sm text-sm">Whether you need a stronger social presence, better search visibility, a new website or a complete digital marketing strategy, let's talk about what you want to achieve.</p>
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
        <dl className="mt-24 text-sm">
          <div className="footer-row"><dt>Email</dt><dd><a href="mailto:info@nautilusmarketing.co.uk">info@nautilusmarketing.co.uk</a><br /><a href="tel:+442045139344">020 4513 9344</a></dd></div>
          <div className="footer-row"><dt>Visit</dt><dd>Vintage House, 36–37 Albert Embankment,<br />London SE1 7TL, United Kingdom</dd></div>
          <div className="footer-row"><dt>Work with us</dt><dd><a href="#contact" onClick={bookCall}>Book a discovery call</a></dd></div>
        </dl>
        <img src={logo.url} alt="Nautilus Marketing" className="logo-light mx-auto mt-20 w-full max-w-3xl" loading="lazy" />
      </section>
    </main>
  );
}
