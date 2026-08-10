"use client";

import { useLang } from "@/lib/i18n";
import { company } from "@/data/company";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">{t("about_title")}</h1>
      <div className="mt-1 text-sm tracking-wide text-slate-500">YUN CHIAN LTD.</div>
      <p className="mt-4 leading-relaxed text-slate-600">{t("about_body")}</p>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <div className="mb-3 font-semibold text-slate-800">{t("nav_contact")}</div>
        <dl className="grid gap-2 sm:grid-cols-[7rem_1fr]">
          <dt className="text-slate-400">{t("contact_company_name")}</dt>
          <dd>{t("company")}（YUN CHIAN LTD.）</dd>
          <dt className="text-slate-400">{t("contact_tax_id")}</dt>
          <dd>{company.taxId}</dd>
          <dt className="text-slate-400">TEL</dt>
          <dd>
            <a href="tel:+886229667353" className="hover:text-brand">
              {company.tel}
            </a>
          </dd>
          <dt className="text-slate-400">FAX</dt>
          <dd>{company.fax}</dd>
          <dt className="text-slate-400">{t("contact_addr")}</dt>
          <dd>{t("address_full")}</dd>
        </dl>
      </div>
    </div>
  );
}
