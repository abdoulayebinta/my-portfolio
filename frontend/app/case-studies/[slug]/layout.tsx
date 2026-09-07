import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study | Abdoulaye Bah",
      description: "Case study not found",
    };
  }

  return {
    title: `${study.title} Case Study | Abdoulaye Bah`,
    description: study.description,
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
