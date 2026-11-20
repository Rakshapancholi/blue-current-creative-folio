import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordReveal } from "@/components/WordReveal";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find(s => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = services.find(x => x.slug === loaderData?.slug);
    const title = s ? `${s.title} — Nautilus Marketing` : "Service — Nautilus Marketing";
    const desc = s ? `${s.line} ${s.items.join(", ")}.` : "Nautilus Marketing services.";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => <main className="section-shell py-36 text-center"><h1 className="display-h text-primary">Service not found</h1><Link to="/" className="mt-8 inline-block underline">Back home</Link></main>,
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = services.find(x => x.slug === slug)!;
  return (
    <main>
      <section className="bg-primary text-primary-foreground section-shell pb-24 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-80"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        <div className="mt-24 grid items-end gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-wide opacity-70">Our services</p>
            <h1 className="display-h mt-4"><WordReveal>{s.title}</WordReveal></h1>
            <p className="mt-8 max-w-md text-xl opacity-90">{s.line}</p>
          </div>
          <img src={s.image} alt={s.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>
      <section className="section-shell py-28">
        <h2 className="display-h text-primary"><WordReveal>What's included</WordReveal></h2>
        <ul className="mt-14 border-t border-border">
          {s.items.map(item => <li key={item} className="thunder border-b border-border py-6 text-4xl md:text-5xl">{item}</li>)}
        </ul>
        <Button asChild className="mt-16 rounded-none"><Link to="/" hash="contact">BOOK A DISCOVERY CALL <ArrowUpRight /></Link></Button>
      </section>
    </main>
  );
}
