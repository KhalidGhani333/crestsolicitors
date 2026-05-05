import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const DetailLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-x max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-8">{title}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
