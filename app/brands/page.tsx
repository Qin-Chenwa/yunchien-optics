"use client";

import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";

export default function BrandsPage() {
  const { lang, t } = useLang();

  // 品牌 -> 相關分類
  const map = new Map<string, string[]>();
  categories.forEach((c) => {
    c.brands.forEach((b) => {
      const label = lang === "zh" ? c.zh : c.en;
      map.set(b, [...(map.get(b) ?? []), label]);
    });
  });
  const brands = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">{t("brands_title")}</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map(([brand, cats]) => (
          <div key={brand} className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-900">{brand}</div>
            <div className="mt-2 text-xs text-slate-500">{cats.join("・")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
