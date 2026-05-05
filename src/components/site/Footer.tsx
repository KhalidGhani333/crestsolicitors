import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { ScalesIcon } from "@/components/ScalesIcon";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Practice Areas", href: "/#practice" },
  { label: "Our Team", href: "/#team" },
  { label: "Cases", href: "/#cases" },
  { label: "Contact", href: "/#contact" },
];

const practices = [
  { label: "Employment Law", href: "/practice/employment-law" },
  { label: "Family Law", href: "/practice/family-law" },
  { label: "Immigration", href: "/practice/immigration-law" },
  { label: "Property Law", href: "/practice/housing-property-law" },
  { label: "Criminal Defence", href: "/practice/criminal-defence" },
  { label: "Corporate Law", href: "/practice/corporate-commercial" },
];

export const Footer = () => (
  <footer className="bg-espresso text-cream/80">
    <div className="container-x py-16 grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2.5">
          <span className="text-gold"><ScalesIcon className="h-8 w-8" /></span>
          <span className="font-display text-2xl text-cream">Crest<span className="text-gold">Solicitors</span></span>
        </div>
        <p className="mt-3 italic text-gold font-display text-lg">Justice. Clarity. Results.</p>
        <p className="mt-5 text-sm leading-relaxed max-w-md">
          CrestSolicitors is a full-service UK law firm providing expert legal advice to individuals and businesses across England and Wales.
        </p>
        <div className="mt-6 text-sm space-y-1">
          <div><span className="text-gold">Mon–Fri:</span> 9am–6pm</div>
          <div><span className="text-gold">Saturday:</span> 10am–2pm</div>
          <div><span className="text-gold">Sunday:</span> Emergency only</div>
        </div>
        <div className="mt-6 flex gap-3">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" aria-label="Social link" className="h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg text-cream mb-4">Quick Links</h4>
        <ul className="space-y-2.5 text-sm">
          {links.map((l) => (
            <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg text-cream mb-4">Practice Areas</h4>
        <ul className="space-y-2.5 text-sm">
          {practices.map((p) => (
            <li key={p.label}><a href={p.href} className="hover:text-gold transition-colors">{p.label}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1">
        <h4 className="font-display text-lg text-cream mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /> +44 (0)20 7946 0321</li>
          <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /> info@crestsolicitors.co.uk</li>
          <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> 14 Gray's Inn Road, London, WC1X 8HN</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-cream/10">
      <div className="container-x py-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-cream/60">
        <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 border border-gold/40 rounded text-gold uppercase tracking-widest hover:bg-gold/10 transition-colors">
          Powered By AxisTechGroup
        </a>
      </div>
    </div>
  </footer>
);
