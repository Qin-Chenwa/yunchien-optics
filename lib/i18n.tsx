"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "zh" | "en";

type Dict = Record<string, { zh: string; en: string }>;

export const dict: Dict = {
  company: { zh: "云謙有限公司", en: "YUN CHIAN LTD." },
  tagline: {
    zh: "光電量測・雷射・光學元件",
    en: "Photonics · Lasers · Optical Components",
  },
  nav_home: { zh: "首頁", en: "Home" },
  nav_products: { zh: "產品分類", en: "Products" },
  nav_brands: { zh: "供應品牌", en: "Brands" },
  nav_about: { zh: "關於我們", en: "About" },
  nav_inquiry: { zh: "線上詢價", en: "Inquiry" },
  nav_contact: { zh: "聯絡我們", en: "Contact" },
  hero_title: {
    zh: "雷射、光學元件與光電量測儀器",
    en: "Lasers, Optics & Photonic Instruments",
  },
  hero_sub: {
    zh: "從雷射光源、光學元件、光譜量測到光纖通訊,提供選型建議、供貨與後續技術支援。",
    en: "From laser sources and optical components to spectroscopy and fiber optics — selection advice, supply, and ongoing technical support.",
  },
  hero_cta: { zh: "瀏覽全部產品", en: "Browse Products" },
  hero_cta2: { zh: "線上詢價", en: "Request a Quote" },
  cats_title: { zh: "產品分類", en: "Product Categories" },
  cats_sub: { zh: "完整產品線", en: "Our full product line" },
  brands_title: { zh: "供應品牌", en: "Brands We Supply" },
  view_more: { zh: "查看更多", en: "View more" },
  subcats: { zh: "細項分類", en: "Subcategories" },
  image_credit: { zh: "圖片", en: "Image" },
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
  f_ok: { zh: "已為您開啟郵件草稿", en: "Your email draft is ready" },
  f_ok_hint: {
    zh: "請在郵件軟體中按下寄出,我們收到後會盡快回覆。若沒有自動開啟,請直接來信:",
    en: "Send it from your mail app and we'll reply shortly. If nothing opened, email us directly:",
  },
  f_mailto_note: {
    zh: "送出後會開啟您的郵件軟體,內容已自動填好",
    en: "Opens your mail app with the message pre-filled",
  },
  f_required: { zh: "此為必填", en: "Required" },
  about_title: { zh: "關於云謙", en: "About YUN CHIAN" },
  about_body: {
    zh: "云謙有限公司供應光電量測、雷射、光學元件與精密光機產品,秉持專業、誠信與服務的理念,為研究機構與產業客戶提供從元件到系統的產品選型、供貨與技術支援。",
    en: "YUN CHIAN LTD. supplies photonic measurement equipment, lasers, optical components and precision opto-mechanics. We support research institutions and industrial customers with product selection, supply and technical service — from single components to complete systems.",
  },
  contact_addr: { zh: "地址", en: "Address" },
  contact_tel: { zh: "電話", en: "TEL" },
  contact_email: { zh: "信箱", en: "Email" },
  contact_tax_id: { zh: "統一編號", en: "Tax ID" },
  contact_company_name: { zh: "公司名稱", en: "Company" },
  address_full: {
    zh: "新北市板橋區光華街32號",
    en: "No. 32, Guanghua St., Banqiao Dist., New Taipei City, Taiwan",
  },
  footer_rights: { zh: "版權所有", en: "All Rights Reserved" },
  quote_this: { zh: "詢問此項產品", en: "Inquire this item" },
  back_products: { zh: "← 返回產品分類", en: "← Back to products" },
  stat_categories: { zh: "產品分類", en: "Categories" },
  stat_items: { zh: "產品細項", en: "Product lines" },
  stat_brands: { zh: "供應品牌", en: "Brands" },
  cta_title: { zh: "找不到需要的型號?", en: "Can't find the model you need?" },
  cta_sub: {
    zh: "告訴我們應用條件與規格需求,工程團隊會協助選型並提供報價。",
    en: "Tell us your application and specifications — our engineers will help with selection and pricing.",
  },
  f_item: { zh: "詢價項目", en: "Item" },
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
