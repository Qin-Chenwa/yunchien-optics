"use client";

import Link from "next/link";
import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const { t } = useLang();

  const allBrands = Array.from(
    new Set(categories.flatMap((c) => c.brands))
  ).sort();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-light to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            {t("hero_title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            {t("hero_sub")}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              {t("hero_cta")}
            </Link>
            <Link
              href="/inquiry"
              className="rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand-light"
            >
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">{t("cats_title")}</h2>
          <p className="mt-1 text-sm text-slate-500">{t("cats_sub")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
            {t("brands_title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allBrands.map((b) => (
              <span
                key={b}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
