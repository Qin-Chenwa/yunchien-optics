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
      <section className="relative isolate overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/45" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("hero_title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
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
              className="rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
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
