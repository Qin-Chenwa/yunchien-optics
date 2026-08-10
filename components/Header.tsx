"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", key: "nav_home" },
    { href: "/products", key: "nav_products" },
    { href: "/brands", key: "nav_brands" },
    { href: "/about", key: "nav_about" },
    { href: "/inquiry", key: "nav_inquiry" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand font-bold text-white">
            云
          </span>
          <span className="text-lg font-semibold text-slate-900">{t("company")}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-brand">
              {t(l.key)}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 hover:border-brand hover:text-brand"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-slate-700" />
            <span className="block h-0.5 w-6 bg-slate-700" />
            <span className="block h-0.5 w-6 bg-slate-700" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-slate-700"
            >
              {t(l.key)}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="mt-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {lang === "zh" ? "English" : "中文"}
          </button>
        </nav>
      )}
    </header>
  );
}
