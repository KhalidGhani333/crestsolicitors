import { ArrowRight, Phone } from "lucide-react";

export const CTA = ({ onBook }: { onBook: () => void }) => (
  <section id="contact" className="py-20 md:py-28 bg-espresso text-cream relative overflow-hidden">
    <div className="absolute inset-0 dot-grid-dark opacity-30" aria-hidden />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
    <div className="container-x relative text-center max-w-3xl mx-auto reveal">
      <div className="inline-block w-12 h-px bg-gold mb-6" />
      <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight text-balance">
        Need Legal Help? <span className="italic text-gold">We're Ready.</span>
      </h2>
      <p className="mt-6 text-cream/70 text-lg leading-relaxed">
        Book a free 30-minute consultation with one of our specialist solicitors. No obligation. Just clear, honest advice.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <button onClick={onBook} className="btn-gold">Book Free Consultation <ArrowRight className="h-4 w-4" /></button>
        <a href="tel:+442079460321" className="btn-outline-white">Call Us Now <Phone className="h-4 w-4" /></a>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-cream/50">
        <span>SRA Regulated</span><span>·</span>
        <span>Law Society Member</span><span>·</span>
        <span>Legal Aid Available</span><span>·</span>
        <span>No Win No Fee Options</span>
      </div>
    </div>
  </section>
);
