"use client";

import Link from "next/link";
import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import CategoryCard from "@/components/CategoryCard";
import { asset } from "@/lib/asset";

export default function Home() {
  const { t } = useLang();

  const allBrands = Array.from(new Set(categories.flatMap((c) => c.brands))).sort();
  const itemCount = categories.reduce((n, c) => n + c.subs.length, 0);

  const stats = [
    { value: categories.length, label: t("stat_categories") },
    { value: itemCount, label: t("stat_items") },
    { value: allBrands.length, label: t("stat_brands") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/hero.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />

        <div className="mx-auto max-w-6xl px-4 py-24 text-center md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light/70">
            {t("tagline")}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("hero_title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {t("hero_sub")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {t("hero_cta")}
            </Link>
            <Link
              href="/inquiry"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t("hero_cta2")}
            </Link>
          </div>
        </div>

        {/* 數量概覽 */}
        <div className="border-t border-white/10 bg-slate-950/40 backdrop-blur">
          <dl className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-4">
            {stats.map((s) => (
              <div key={s.label} className="py-5 text-center">
                <dd className="text-2xl font-bold text-white md:text-3xl">{s.value}</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("cats_title")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">{t("cats_sub")}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            {t("brands_title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allBrands.map((b) => (
              <span
                key={b}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:border-brand/40 hover:text-brand"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="text-xl font-semibold text-white md:text-2xl">{t("cta_title")}</h2>
          <p className="max-w-xl text-sm text-slate-400">{t("cta_sub")}</p>
          <Link
            href="/inquiry"
            className="mt-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {t("nav_inquiry")}
          </Link>
        </div>
      </section>
    </div>
  );
}
