"use client";

import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import CategoryCard from "@/components/CategoryCard";

export default function ProductsPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">{t("cats_title")}</h1>
      <p className="mt-1 text-sm text-slate-500">{t("cats_sub")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
