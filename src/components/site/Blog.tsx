import { ArrowRight } from "lucide-react";
import b1 from "@/assets/blog-1.jpg"; import b2 from "@/assets/blog-2.jpg";

const posts = [
  { img: b1, date: "12 Mar 2026", category: "Housing Law", title: "Navigating Landlord and Tenant Disputes in England" },
  { img: b2, date: "05 Mar 2026", category: "Employment Law", title: "Your Rights in the Workplace: What UK Employees Need to Know" },
];

export const Blog = () => (
  <section id="blog" className="py-20 md:py-28 bg-secondary/40">
    <div className="container-x grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2 reveal">
        <span className="gold-pill">Legal Insights</span>
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">Latest Legal <span className="italic text-gold">Blog Posts</span></h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Stay informed with expert commentary from our solicitors on the latest changes in UK law and what they mean for you.
        </p>
        <a href="/blog" className="mt-7 btn-outline-gold inline-flex">Visit All Articles <ArrowRight className="h-4 w-4" /></a>
      </div>

      <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <article key={p.title} className="reveal card-trace bg-card rounded-2xl overflow-hidden shadow-card-soft border border-border group" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="trace-v1" /><span className="trace-v2" />
            <div className="relative h-52 overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={800} height={640} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-4 left-4 bg-cream text-primary text-xs px-3 py-1.5 rounded-full font-medium">{p.date}</span>
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-wider text-gold">{p.category}</span>
              <h3 className="mt-2 font-display text-xl text-primary leading-snug">{p.title}</h3>
              <a href={`/blog/${p.title.toLowerCase().replace(/ /g, '-')}`} className="mt-4 inline-flex items-center gap-2 text-sm text-primary group/link">
                Read More <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
