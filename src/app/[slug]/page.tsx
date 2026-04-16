import { notFound } from "next/navigation";
import FeatureView from "@/components/FeatureView";
import featuresData from "@/data/features.json";

// Pre-render these pages at build time
export function generateStaticParams() {
  return Object.keys(featuresData).map((slug) => ({
    slug: slug,
  }));
}

type FeatureData = {
  category: string;
  title: string;
  bullets: string[];
  centerImage: string;
};

export default async function DynamicFeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = (featuresData as Record<string, FeatureData>)[
    slug.toLowerCase()
  ];

  if (!feature) {
    notFound();
  }

  return (
    <FeatureView
      category={feature.category}
      title={feature.title}
      bullets={feature.bullets}
      centerImage={feature.centerImage}
    />
  );
}
