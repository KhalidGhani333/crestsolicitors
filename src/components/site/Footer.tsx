import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { ScalesIcon } from "@/components/ScalesIcon";

const cols = [
  { title: "Quick Links", items: ["Home", "About Us", "Practice Areas", "Our Team", "Cases", "Contact"] },
  { title: "Practice Areas", items: ["Employment Law", "Family Law", "Immigration", "Property Law", "Criminal Defence", "Corporate Law"] },
  { title: "Legal Info", items: ["Privacy Policy", "Terms of Service", "Complaints Procedure", "SRA Registration", "Cookie Policy"] },
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

      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="font-display text-lg text-cream mb-4">{c.title}</h4>
          <ul className="space-y-2.5 text-sm">
            {c.items.map((i) => (
              <li key={i}><a href="#" className="hover:text-gold transition-colors">{i}</a></li>
            ))}
          </ul>
        </div>
      ))}

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
      <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
        <p>© 2026 CrestSolicitors Ltd. Authorised and regulated by the Solicitors Regulation Authority (SRA No. 123456).</p>
        <div className="flex items-center gap-2 px-3 py-1.5 border border-gold/40 rounded text-gold uppercase tracking-widest">SRA Regulated</div>
      </div>
    </div>
  </footer>
);
