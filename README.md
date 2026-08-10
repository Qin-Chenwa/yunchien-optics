# 云謙股份有限公司 — 整合光電型錄與詢價網站

以 **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** 建置的 B2B 光電產品型錄與線上詢價網站,整合三家同業網站的產品線並去重:

- 安均科技（anjun.com.tw）
- 台灣如海光電（oceanhoodtw.com）
- 亞諾光電（arno-eo.com）

## 特色

- 中英雙語切換（右上角 EN / 中，記憶於 localStorage）
- 12 大類、70+ 細項,資料集中於 `data/catalog.ts`,一處維護、全站套用
- 每個細項標註「整合來源」,方便追溯原始站台
- 線上詢價表單（`/inquiry`）＋ 後端接收端點（`/api/inquiry`,預留 Email / DB / CRM 串接）
- 靜態化產品分類頁（`generateStaticParams`）、SEO metadata

## 快速開始

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 產出正式版
npm run start    # 啟動正式版
```

## 目錄結構

```
app/
  layout.tsx            # 全站框架、語言 Provider
  page.tsx              # 首頁(Hero + 分類 + 品牌)
  products/             # 產品分類列表與細項頁
  brands/               # 代理品牌
  about/                # 關於我們
  inquiry/              # 線上詢價表單
  api/inquiry/route.ts  # 詢價接收 API
components/             # Header / Footer / CategoryCard
data/catalog.ts        # ★ 整合去重後的產品分類樹(單一資料來源)
lib/i18n.tsx           # 中英雙語字典與 Context
```

## 後續可擴充

1. 產品細項頁與實際 SKU、規格表、型錄 PDF 下載
2. 詢價 API 串接 Email（Resend / Nodemailer）或 CRM
3. 圖片與品牌 logo 資產
4. 全文搜尋、產品比較
5. 部署至 Vercel（推薦,零設定支援 Next.js）

## 授權

© 云謙股份有限公司. All Rights Reserved.
