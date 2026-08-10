"use client";

import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">{t("about_title")}</h1>
      <p className="mt-4 leading-relaxed text-slate-600">{t("about_body")}</p>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <div className="mb-1 font-semibold text-slate-800">{t("nav_contact")}</div>
        <p>{t("contact_email")}: sales@yunqian.com.tw</p>
        <p>{t("contact_tel")}: 03-000-0000</p>
        <p>{t("contact_addr")}: 台灣 Taiwan</p>
      </div>
    </div>
  );
}
