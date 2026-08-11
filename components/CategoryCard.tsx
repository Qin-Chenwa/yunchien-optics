"use client";

import Link from "next/link";
import { Category } from "@/data/catalog";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export default function CategoryCard({ category }: { category: Category }) {
  const { lang, t } = useLang();
  const name = lang === "zh" ? category.zh : category.en;
  const subtitle = lang === "zh" ? category.en : category.zh;
  const desc = lang === "zh" ? category.descZh : category.descEn;
  const thumbs = category.subs.filter((s) => s.image).slice(0, 4);

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(category.image)}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-dark backdrop-blur">
          {category.subs.length} {t("subcats")}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-base font-semibold text-white drop-shadow-sm">{name}</h3>
          <p className="text-[11px] uppercase tracking-wide text-slate-300">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 text-[13px] leading-relaxed text-slate-500">{desc}</p>

        {thumbs.length > 0 && (
          <div className="mt-4 flex gap-2">
            {thumbs.map((s) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={s.slug}
                src={asset(s.image!)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-11 w-11 rounded-lg border border-slate-200 object-cover"
              />
            ))}
          </div>
        )}

        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
          {t("view_more")}
          <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
