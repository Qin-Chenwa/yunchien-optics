"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="mb-2 text-lg font-semibold text-slate-900">{t("company")}</div>
          <p className="text-sm text-slate-500">{t("tagline")}</p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="mb-2 font-medium text-slate-800">{t("nav_contact")}</div>
          <p>{t("contact_email")}: sales@yunqian.com.tw</p>
          <p>{t("contact_tel")}: 03-000-0000</p>
          <p>{t("contact_addr")}: 台灣 Taiwan</p>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-medium text-slate-800">{t("nav_products")}</div>
          <Link href="/products" className="block text-slate-600 hover:text-brand">
            {t("nav_products")}
          </Link>
          <Link href="/brands" className="block text-slate-600 hover:text-brand">
            {t("nav_brands")}
          </Link>
          <Link href="/inquiry" className="block text-slate-600 hover:text-brand">
            {t("nav_inquiry")}
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {t("company")}. {t("footer_rights")}.
      </div>
    </footer>
  );
}
