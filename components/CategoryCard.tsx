"use client";

import Link from "next/link";
import { Category } from "@/data/catalog";
import { useLang } from "@/lib/i18n";

export default function CategoryCard({ category }: { category: Category }) {
  const { lang, t } = useLang();
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
    >
      <div className="mb-3 text-3xl">{category.icon}</div>
      <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand">
        {lang === "zh" ? category.zh : category.en}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-slate-500">
        {lang === "zh" ? category.descZh : category.descEn}
      </p>
      <span className="mt-3 text-xs font-medium text-brand">
        {category.subs.length} {t("subcats")} →
      </span>
    </Link>
  );
}
