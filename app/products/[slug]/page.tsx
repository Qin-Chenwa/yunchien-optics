import { categories } from "@/data/catalog";
import { notFound } from "next/navigation";
import CategoryDetail from "./CategoryDetail";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();
  return <CategoryDetail category={category} />;
}
