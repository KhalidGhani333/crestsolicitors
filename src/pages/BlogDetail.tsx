import { useParams } from "react-router-dom";
import { DetailLayout } from "@/components/layout/DetailLayout";

const BlogDetail = () => {
  const { slug } = useParams();
  const title = slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Blog Post";

  return (
    <DetailLayout title={title}>
      <div className="flex items-center gap-4 text-sm text-gold mb-8 uppercase tracking-widest font-medium">
        <span>12 Mar 2026</span>
        <span>•</span>
        <span>Legal Insights</span>
      </div>

      <p className="text-lg text-primary leading-relaxed">
        Welcome to our legal insight series. In this post, we explore the complexities surrounding <strong>{title.toLowerCase()}</strong> and provide actionable advice for those navigating these challenges.
      </p>

      <h2 className="text-2xl font-display text-primary mt-8">Understanding the Context</h2>
      <p className="mt-4">
        As laws continue to evolve in the UK, staying informed is critical for both individuals and businesses. The subject of {title.toLowerCase()} is one that requires careful attention to detail and a thorough understanding of current statutory requirements.
      </p>
      
      <h3 className="text-xl font-display text-primary mt-8">Key Takeaways</h3>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Early legal intervention often leads to better outcomes.</li>
        <li>Documenting all communications is essential for protecting your rights.</li>
        <li>Professional guidance helps in navigating complex regulatory frameworks.</li>
      </ul>

      <h3 className="text-xl font-display text-primary mt-8">Expert Guidance</h3>
      <p className="mt-4">
        At CrestSolicitors, our team is committed to breaking down complex legal jargon into clear, practical steps. If you have questions about {title.toLowerCase()} or require representation, please do not hesitate to contact our office.
      </p>
    </DetailLayout>
  );
};

export default BlogDetail;
