"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/catalog";
import { company } from "@/data/company";
import { useLang } from "@/lib/i18n";

export default function InquiryForm() {
  const { lang, t } = useLang();
  const params = useSearchParams();
  const presetCategory = params.get("category") ?? "";
  const presetItem = params.get("item") ?? "";
  const [sent, setSent] = useState(false);

  // 站台是靜態託管(GitHub Pages),沒有後端可以收表單,
  // 所以改成把填好的內容組成信件,交給使用者的郵件軟體寄出。
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const field = (k: string) => String(form.get(k) ?? "").trim();

    const lines = [
      [t("f_name"), field("name")],
      [t("f_company"), field("company")],
      [t("f_email"), field("email")],
      [t("f_phone"), field("phone")],
      [t("f_category"), field("category")],
      [t("f_item"), field("item")],
    ]
      .filter(([, v]) => v)
      .map(([label, v]) => `${label}: ${v}`);

    const subject = [t("inquiry_title"), field("item") || field("category")]
      .filter(Boolean)
      .join(" - ");
    const body = `${lines.join("\n")}\n\n${t("f_message")}:\n${field("message")}\n`;

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mb-4 text-5xl">✉️</div>
        <p className="text-lg font-medium text-slate-800">{t("f_ok")}</p>
        <p className="mt-3 text-sm text-slate-500">{t("f_ok_hint")}</p>
        <a
          href={`mailto:${company.email}`}
          className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
        >
          {company.email}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">{t("inquiry_title")}</h1>
      <p className="mt-1 text-sm text-slate-500">{t("inquiry_sub")}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              {t("f_name")} *
            </label>
            <input name="name" required className={input} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              {t("f_company")}
            </label>
            <input name="company" className={input} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              {t("f_email")} *
            </label>
            <input name="email" type="email" required className={input} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              {t("f_phone")}
            </label>
            <input name="phone" className={input} />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {t("f_category")}
          </label>
          <select name="category" defaultValue={presetCategory} className={input}>
            <option value="">—</option>
            {categories.map((c) => {
              const label = lang === "zh" ? c.zh : c.en;
              return (
                <option key={c.slug} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>

        {presetItem && (
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">{t("f_item")}</label>
            <input name="item" readOnly defaultValue={presetItem} className={`${input} bg-slate-50`} />
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {t("f_message")} *
          </label>
          <textarea name="message" required rows={5} className={input} />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            {t("f_submit")}
          </button>
          <p className="text-xs text-slate-400">{t("f_mailto_note")}</p>
        </div>
      </form>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-600">
        <p className="font-medium text-slate-700">{t("nav_contact")}</p>
        <dl className="mt-3 space-y-1.5">
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 text-slate-400">{t("contact_email")}</dt>
            <dd>
              <a href={`mailto:${company.email}`} className="text-brand hover:underline">
                {company.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 text-slate-400">{t("contact_tel")}</dt>
            <dd>
              <a href={`tel:${company.tel.replace(/[^0-9+]/g, "")}`} className="hover:text-brand">
                {company.tel}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
