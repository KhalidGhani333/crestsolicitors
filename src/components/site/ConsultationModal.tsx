import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  area: z.string().min(1),
  message: z.string().trim().min(1).max(1000),
  contact: z.string(),
  slot: z.string(),
});

export const ConsultationModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-espresso/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-cream rounded-3xl shadow-elegant border border-gold/30 animate-scale-in">
        <button onClick={onClose} className="absolute top-5 right-5 h-10 w-10 rounded-full bg-primary/5 hover:bg-primary/10 flex items-center justify-center text-primary transition" aria-label="Close">
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 md:p-10">
          <span className="gold-pill">Free Consultation</span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl text-primary">Book Your <span className="italic text-gold">Free Consultation</span></h3>
          <p className="mt-2 text-sm text-muted-foreground">All enquiries are confidential. We will respond within 2 working hours.</p>

          {submitted ? (
            <div className="mt-10 text-center py-10">
              <div className="inline-flex h-16 w-16 rounded-full bg-gold items-center justify-center text-primary text-3xl">✓</div>
              <h4 className="mt-5 font-display text-2xl text-primary">Request Received</h4>
              <p className="mt-2 text-muted-foreground">A solicitor will be in touch within 2 working hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-7 grid sm:grid-cols-2 gap-4" noValidate>
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              <div className="sm:col-span-2"><Field label="Email Address" name="email" type="email" error={errors.email} /></div>
              <div className="sm:col-span-2">
                <Label>Area of Law</Label>
                <select name="area" required className="input">
                  {["Employment", "Family", "Immigration", "Property", "Criminal", "Corporate", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Brief description of matter</Label>
                <textarea name="message" required maxLength={1000} rows={4} className="input resize-none" />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <div>
                <Label>Preferred contact</Label>
                <div className="flex gap-3 flex-wrap">
                  {["Phone", "Email", "Video Call"].map((v, i) => (
                    <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="contact" value={v} defaultChecked={i === 0} className="accent-[hsl(var(--gold))]" /> {v}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label>Preferred time</Label>
                <div className="flex gap-3 flex-wrap">
                  {["Morning", "Afternoon", "Evening"].map((v, i) => (
                    <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="slot" value={v} defaultChecked={i === 0} className="accent-[hsl(var(--gold))]" /> {v}
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 mt-2">
                <button type="submit" className="btn-gold justify-center">Request Consultation</button>
                <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our GDPR-compliant privacy notice. ICO registered.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-xs uppercase tracking-wider text-primary/70 mb-1.5">{children}</label>
);

const Field = ({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) => (
  <div>
    <Label>{label}</Label>
    <input name={name} type={type} required maxLength={255} className="input" />
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);
