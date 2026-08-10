"use client";

import Link from "next/link";
import { Category } from "@/data/catalog";
import { useLang } from "@/lib/i18n";

export default function CategoryDetail({ category }: { category: Category }) {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/products" className="text-sm text-brand hover:underline">
        {t("back_products")}
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={lang === "zh" ? category.zh : category.en}
          className="h-48 w-full object-cover md:h-64"
        />
      </div>

      <div className="mt-6 flex items-start gap-4">
        <div className="text-4xl">{category.icon}</div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {lang === "zh" ? category.zh : category.en}
          </h1>
          <p className="mt-1 max-w-2xl text-slate-600">
            {lang === "zh" ? category.descZh : category.descEn}
          </p>
        </div>
      </div>

      {/* Brands */}
      {category.brands.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {category.brands.map((b) => (
            <span
              key={b}
              className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      {/* Subcategories */}
      <h2 className="mb-4 mt-10 text-lg font-semibold text-slate-900">{t("subcats")}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.subs.map((s) => (
          <div
            key={s.slug}
            className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4"
          >
            <div>
              <div className="font-medium text-slate-800">{lang === "zh" ? s.zh : s.en}</div>
            </div>
            <Link
              href={`/inquiry?category=${encodeURIComponent(
                lang === "zh" ? category.zh : category.en
              )}`}
              className="mt-3 text-xs font-semibold text-brand hover:underline"
            >
              {t("quote_this")} →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={`/inquiry?category=${encodeURIComponent(
            lang === "zh" ? category.zh : category.en
          )}`}
          className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          {t("nav_inquiry")}
        </Link>
      </div>
    </div>
  );
}
