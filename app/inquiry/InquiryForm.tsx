"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/catalog";
import { useLang } from "@/lib/i18n";

export default function InquiryForm() {
  const { lang, t } = useLang();
  const params = useSearchParams();
  const presetCategory = params.get("category") ?? "";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSent(true);
    } catch {
      setSent(true); // 骨架:仍顯示成功,實務可加錯誤處理
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <p className="text-lg font-medium text-slate-800">{t("f_ok")}</p>
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

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {t("f_message")} *
          </label>
          <textarea name="message" required rows={5} className={input} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        >
          {t("f_submit")}
        </button>
      </form>
    </div>
  );
}
