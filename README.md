# 云謙股份有限公司 — 整合光電型錄與詢價網站

以 **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** 建置的 B2B 光電產品型錄與線上詢價網站,整合三家同業網站的產品線並去重:

- 安均科技（anjun.com.tw）
- 台灣如海光電（oceanhoodtw.com）
- 亞諾光電（arno-eo.com）

> 目前為**骨架版**:分類樹與雙語文案已完整,但尚無實際 SKU、規格表與圖片資產;詢價 API 只寫入伺服器 log,未串接 Email / CRM。

## 特色

- 中英雙語切換（右上角 EN / 中，記憶於 localStorage）
- 12 大類、76 細項,資料集中於 `data/catalog.ts`,一處維護、全站套用
- 每個細項標註「整合來源」,方便追溯原始站台
- 線上詢價表單（`/inquiry`）＋ 後端接收端點（`/api/inquiry`,預留 Email / DB / CRM 串接）
- 靜態化產品分類頁（`generateStaticParams`）、SEO metadata

## 快速開始

需求:Node.js 18.17 以上（Next.js 14 的下限）。

```bash
git clone git@github.com:Qin-Chenwa/yunchien-optics.git
cd yunchien-optics
npm install
npm run dev      # http://localhost:3000
```

其他指令:

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 開發伺服器（熱更新） |
| `npm run build` | 產出正式版 |
| `npm run start` | 啟動正式版（需先 build） |

## 頁面

| 路徑 | 內容 |
| --- | --- |
| `/` | 首頁:Hero、12 大類卡片、代理品牌 |
| `/products` | 全部分類列表 |
| `/products/[slug]` | 單一分類的細項與來源標記 |
| `/brands` | 代理品牌一覽 |
| `/about` | 關於我們 |
| `/inquiry` | 線上詢價表單 |

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
data/catalog.ts         # ★ 整合去重後的產品分類樹(單一資料來源)
lib/i18n.tsx            # 中英雙語字典與 Context
```

## 維護產品資料

全站的分類、細項、品牌都讀自 `data/catalog.ts`,改這一個檔案即可,不必動頁面:

```ts
{
  slug: "lasers",              // 網址用,對應 /products/lasers
  zh: "雷射與光源",
  en: "Lasers & Light Sources",
  descZh: "...",
  descEn: "...",
  icon: "🔦",                  // emoji 佔位,可日後替換為 SVG
  brands: ["CNI", "CrystaLaser"],
  subs: [
    { slug: "hene", zh: "氦氖雷射", en: "Helium-Neon Lasers", sources: ["arno"] },
  ],
}
```

`sources` 用來標記該細項整合自哪個站台,可填 `anjun` / `oceanhood` / `arno`,同一項可多個。

介面文字（選單、按鈕、表單標籤）則在 `lib/i18n.tsx` 的字典裡,中英各一份。

## 詢價 API

`POST /api/inquiry`,JSON body:

```json
{ "name": "王小明", "email": "buyer@example.com", "message": "想詢問 CO2 雷射報價" }
```

- 成功:`200 { "ok": true }`
- 缺 `name` / `email` / `message`:`400 { "ok": false, "error": "..." }`

目前收到的內容只會 `console.log` 到伺服器 log。要正式收單,在 `app/api/inquiry/route.ts` 標了 `TODO` 的位置接上 Resend / Nodemailer / CRM 即可。

## 部署

推薦 **Vercel**（Next.js 原生支援,零設定,含 `/api/inquiry`）:在 Vercel 匯入這個 repo → Framework 自動判定為 Next.js → Deploy,之後 push 到 `main` 就會自動更新。

若要改用 GitHub Pages 之類的純靜態託管,需在 `next.config.mjs` 設 `output: "export"`,但**詢價 API 會失效**（靜態站沒有伺服器端),得改接第三方表單服務。

## 後續可擴充

1. 產品細項頁與實際 SKU、規格表、型錄 PDF 下載
2. 詢價 API 串接 Email（Resend / Nodemailer）或 CRM
3. 圖片與品牌 logo 資產
4. 全文搜尋、產品比較

## 授權

© 云謙股份有限公司. All Rights Reserved.
