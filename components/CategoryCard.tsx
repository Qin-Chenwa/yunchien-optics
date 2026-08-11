"use client";

import Link from "next/link";
import { Category } from "@/data/catalog";
import { useLang } from "@/lib/i18n";

export default function CategoryCard({ category }: { category: Category }) {
  const { lang, t } = useLang();
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
    >
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={lang === "zh" ? category.zh : category.en}
          className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand">
          {lang === "zh" ? category.zh : category.en}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {lang === "zh" ? category.descZh : category.descEn}
        </p>
        <span className="mt-3 text-xs font-medium text-brand">
          {category.subs.length} {t("subcats")} →
        </span>
      </div>
    </Link>
  );
}
