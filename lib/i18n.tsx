"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "zh" | "en";

type Dict = Record<string, { zh: string; en: string }>;

export const dict: Dict = {
  company: { zh: "云謙股份有限公司", en: "Yunchien Co., Ltd." },
  tagline: {
    zh: "光電量測・雷射・光學元件整合供應",
    en: "Integrated Photonics, Laser & Optics Supply",
  },
  nav_home: { zh: "首頁", en: "Home" },
  nav_products: { zh: "產品分類", en: "Products" },
  nav_brands: { zh: "代理品牌", en: "Brands" },
  nav_about: { zh: "關於我們", en: "About" },
  nav_inquiry: { zh: "線上詢價", en: "Inquiry" },
  nav_contact: { zh: "聯絡我們", en: "Contact" },
  hero_title: {
    zh: "一站整合光電、雷射與光學元件",
    en: "One-Stop Photonics, Laser & Optics",
  },
  hero_sub: {
    zh: "彙整安均、如海、亞諾三大產品線,提供從雷射光源、光學元件、光譜量測到光纖通訊的完整解決方案。",
    en: "Bringing together three established product lines — from laser sources and optics to spectroscopy and fiber communication.",
  },
  hero_cta: { zh: "瀏覽全部產品", en: "Browse Products" },
  hero_cta2: { zh: "線上詢價", en: "Request a Quote" },
  cats_title: { zh: "產品分類", en: "Product Categories" },
  cats_sub: { zh: "三站產品線去重整合", en: "De-duplicated across three catalogs" },
  brands_title: { zh: "代理與供應品牌", en: "Represented Brands" },
  view_more: { zh: "查看更多", en: "View more" },
  subcats: { zh: "細項分類", en: "Subcategories" },
  from_sites: { zh: "整合來源", en: "Integrated from" },
  inquiry_title: { zh: "線上詢價", en: "Product Inquiry" },
  inquiry_sub: {
    zh: "請填寫需求,我們的工程團隊將盡快與您聯繫報價。",
    en: "Tell us your requirements and our engineers will get back to you with a quote.",
  },
  f_name: { zh: "姓名", en: "Name" },
  f_company: { zh: "公司 / 單位", en: "Company / Institution" },
  f_email: { zh: "電子郵件", en: "Email" },
  f_phone: { zh: "聯絡電話", en: "Phone" },
  f_category: { zh: "產品類別", en: "Product Category" },
  f_message: { zh: "需求說明", en: "Requirements" },
  f_submit: { zh: "送出詢價", en: "Submit Inquiry" },
  f_ok: { zh: "已收到您的詢價,我們會盡快回覆!", en: "Thanks! We have received your inquiry." },
  f_required: { zh: "此為必填", en: "Required" },
  about_title: { zh: "關於云謙", en: "About Yunqian" },
  about_body: {
    zh: "云謙股份有限公司整合光電量測、雷射、光學元件與精密機構之產品線,秉持專業、誠信與服務利他的理念,為研究機構與產業客戶提供從元件到系統的一站式解決方案與技術支援。",
    en: "Yunchien Co., Ltd. consolidates product lines spanning photonic measurement, lasers, optical components and precision opto-mechanics, providing research and industrial customers with one-stop solutions and technical support from components to systems.",
  },
  contact_addr: { zh: "地址", en: "Address" },
  contact_tel: { zh: "電話", en: "Phone" },
  contact_email: { zh: "信箱", en: "Email" },
  footer_rights: { zh: "版權所有", en: "All Rights Reserved" },
  quote_this: { zh: "詢問此類產品", en: "Inquire this category" },
  back_products: { zh: "← 返回產品分類", en: "← Back to products" },
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "zh", setLang: () => {}, t: (k) => k });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (saved === "zh" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const t = (key: string) => {
    const entry = dict[key];
    return entry ? entry[lang] : key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
