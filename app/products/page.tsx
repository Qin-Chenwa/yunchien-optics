"use client";

import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import CategoryCard from "@/components/CategoryCard";

export default function ProductsPage() {
  const { t } = useLang();
  const itemCount = categories.reduce((n, c) => n + c.subs.length, 0);
  const brandCount = new Set(categories.flatMap((c) => c.brands)).size;

  const stats = [
    { value: categories.length, label: t("stat_categories") },
    { value: itemCount, label: t("stat_items") },
    { value: brandCount, label: t("stat_brands") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold text-slate-900">{t("cats_title")}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-500">{t("cats_sub")}</p>

        <dl className="mt-7 flex flex-wrap gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-slate-50/70 px-5 py-3"
            >
              <dt className="text-[11px] uppercase tracking-widest text-slate-400">{s.label}</dt>
              <dd className="mt-0.5 text-xl font-bold text-brand">{s.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
