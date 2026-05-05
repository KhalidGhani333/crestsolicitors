import { useParams } from "react-router-dom";
import { DetailLayout } from "@/components/layout/DetailLayout";

const PracticeDetail = () => {
  const { slug } = useParams();
  const title = slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Practice Area";

  return (
    <DetailLayout title={title}>
      <h2 className="text-2xl font-display text-primary mt-6">Professional Legal Counsel</h2>
      <p className="mt-4">
        At CrestSolicitors, we understand that legal challenges in the area of {title.toLowerCase()} can be complex and deeply personal. 
        Our team of dedicated experts brings years of experience to ensure your rights are fully protected and your interests are prioritized.
      </p>
      
      <h3 className="text-xl font-display text-primary mt-8">Our Approach</h3>
      <p className="mt-4">
        We believe in a client-centered approach. From the initial consultation to the final resolution, we provide:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Comprehensive case assessment and strategy planning.</li>
        <li>Transparent communication throughout the process.</li>
        <li>Aggressive representation in negotiations and court proceedings.</li>
        <li>Personalized solutions tailored to your unique circumstances.</li>
      </ul>

      <h3 className="text-xl font-display text-primary mt-8">How We Can Help</h3>
      <p className="mt-4">
        Whether you are facing immediate legal hurdles or planning for the future, our solicitors provide the clarity and expertise you need. 
        Contact us today for a free initial consultation to discuss how we can assist you with your {title.toLowerCase()} needs.
      </p>
    </DetailLayout>
  );
};

export default PracticeDetail;
