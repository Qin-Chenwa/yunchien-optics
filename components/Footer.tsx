"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { company } from "@/data/company";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-slate-900">{t("company")}</div>
          <div className="text-sm font-medium tracking-wide text-slate-500">YUN CHIAN LTD.</div>
          <p className="mt-2 text-sm text-slate-500">{t("tagline")}</p>
          <p className="mt-2 text-xs text-slate-400">
            {t("contact_tax_id")}:{company.taxId}
          </p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="mb-2 font-medium text-slate-800">{t("nav_contact")}</div>
          <p>
            TEL:
            <a href={`tel:${company.tel.replace(/[^0-9+]/g, "")}`} className="hover:text-brand">
              {company.tel}
            </a>
          </p>
          <p>
            {t("contact_email")}:
            <a href={`mailto:${company.email}`} className="hover:text-brand">
              {company.email}
            </a>
          </p>
          <p className="mt-1">
            {t("contact_addr")}:{t("address_full")}
          </p>
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
