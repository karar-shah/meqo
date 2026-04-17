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
  const lowerSlug = slug.toLowerCase();

  const feature = (featuresData as Record<string, FeatureData>)[
    lowerSlug
  ];

  if (!feature) {
    notFound();
  }

  // Determine if this is the last page of the current route matching the prefix
  const allSlugs = Object.keys(featuresData);
  const currentPrefix = lowerSlug.charAt(0);
  const slugsWithPrefix = allSlugs
    .filter((s) => s.toLowerCase().startsWith(currentPrefix))
    .sort();
  const isEndPage = slugsWithPrefix[slugsWithPrefix.length - 1] === lowerSlug;


  return (
    <FeatureView
      category={feature.category}
      title={feature.title}
      bullets={feature.bullets}
      centerImage={feature.centerImage}
      isEndPage={isEndPage}
    />
  );
}
