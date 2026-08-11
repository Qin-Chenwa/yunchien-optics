"use client";

import Link from "next/link";
import { Category } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import SubCategoryCard from "@/components/SubCategoryCard";
import { asset } from "@/lib/asset";

export default function CategoryDetail({ category }: { category: Category }) {
  const { lang, t } = useLang();
  const name = lang === "zh" ? category.zh : category.en;
  const desc = lang === "zh" ? category.descZh : category.descEn;
  const inquiryHref = `/inquiry?category=${encodeURIComponent(name)}`;

  return (
    <div>
      {/* 分類主視覺 */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(category.image)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/50" />

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="transition hover:text-white">
              {t("nav_home")}
            </Link>
            <span>/</span>
            <Link href="/products" className="transition hover:text-white">
              {t("nav_products")}
            </Link>
            <span>/</span>
            <span className="text-slate-200">{name}</span>
          </nav>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
            {name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            {desc}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={inquiryHref}
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {t("nav_inquiry")}
            </Link>
            <span className="rounded-lg border border-white/25 px-4 py-2.5 text-sm text-slate-200">
              {category.subs.length} {t("subcats")}
            </span>
          </div>

          {category.imageCredit && (
            <a
              href={category.imageCreditUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block text-[11px] text-slate-500 transition hover:text-slate-300"
            >
              {t("image_credit")}: {category.imageCredit}
            </a>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* 代理品牌 */}
        {category.brands.length > 0 && (
          <div className="mb-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t("brands_title")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.brands.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-brand/15 bg-brand-light px-3.5 py-1.5 text-xs font-medium text-brand-dark"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 細項分類 */}
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-900">{t("subcats")}</h2>
          <span className="text-xs text-slate-400">
            {category.subs.length} {t("stat_items")}
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.subs.map((s) => (
            <SubCategoryCard key={s.slug} category={category} sub={s} />
          ))}
        </div>

        {/* 頁尾行動呼籲 */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-slate-900 px-6 py-10 text-center">
          <h2 className="text-lg font-semibold text-white md:text-xl">{t("cta_title")}</h2>
          <p className="max-w-xl text-sm text-slate-400">{t("cta_sub")}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link
              href={inquiryHref}
              className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {t("nav_inquiry")}
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              {t("back_products")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
