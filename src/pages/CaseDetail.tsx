import { useParams } from "react-router-dom";
import { DetailLayout } from "@/components/layout/DetailLayout";

const CaseDetail = () => {
  const { slug } = useParams();
  const title = slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Case Study";

  return (
    <DetailLayout title={title}>
      <div className="bg-secondary/30 p-8 rounded-2xl border border-gold/20 mb-8">
        <h3 className="text-xl font-display text-primary">Case Summary</h3>
        <p className="mt-4 text-muted-foreground">
          This case study provides a detailed overview of the {title.toLowerCase()} we successfully handled. At CrestSolicitors, we take pride in our track record of securing favorable outcomes for our clients through diligent preparation and strategic legal advocacy.
        </p>
      </div>

      <h2 className="text-2xl font-display text-primary mt-8">The Legal Challenge</h2>
      <p className="mt-4">
        Every case brings its own unique set of circumstances. In this instance, our clients faced significant hurdles requiring a sophisticated legal approach. Our team analyzed the facts, identified key legal precedents, and developed a robust defense/strategy tailored to the specific needs of the case.
      </p>
      
      <h3 className="text-xl font-display text-primary mt-8">Our Strategy</h3>
      <p className="mt-4">
        Our strategy centered on a proactive and evidence-based approach:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Thorough investigation of all case materials.</li>
        <li>Collaborating with industry experts to strengthen our position.</li>
        <li>Maintaining clear and consistent communication with the client.</li>
        <li>Formulating arguments that address both immediate issues and long-term implications.</li>
      </ul>

      <h3 className="text-xl font-display text-primary mt-8">Result</h3>
      <p className="mt-4">
        Due to our dedicated effort, the client achieved a successful resolution, reinforcing our commitment to delivering justice and clarity. If you are facing a similar situation, our team is here to help you navigate your legal options.
      </p>
    </DetailLayout>
  );
};

export default CaseDetail;
