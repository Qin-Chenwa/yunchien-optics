"use client";

import Link from "next/link";
import { Category, SubCategory } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import ProductImage from "@/components/ProductImage";

export default function SubCategoryCard({
  category,
  sub,
}: {
  category: Category;
  sub: SubCategory;
}) {
  const { lang, t } = useLang();
  const title = lang === "zh" ? sub.zh : sub.en;
  const subtitle = lang === "zh" ? sub.en : sub.zh;
  const desc = lang === "zh" ? sub.descZh : sub.descEn;
  const catName = lang === "zh" ? category.zh : category.en;

  return (
    <Link
      href={`/inquiry?category=${encodeURIComponent(catName)}&item=${encodeURIComponent(title)}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <ProductImage
          src={sub.image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-semibold leading-snug text-slate-900 transition group-hover:text-brand">
          {title}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{subtitle}</p>
        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-500">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
          {t("quote_this")}
          <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
