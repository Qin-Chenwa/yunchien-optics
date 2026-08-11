# 云謙有限公司 YUN CHIAN LTD. — 產品型錄與詢價網站

以 **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** 建置的 B2B 產品型錄與線上詢價網站,涵蓋雷射光源、光學元件、光譜量測、光纖通訊與精密光機。

> 目前為**骨架版**:分類樹、雙語文案與分類主圖已就緒,但尚無實際 SKU、規格表與產品照片;詢價 API 只寫入伺服器 log,未串接 Email / CRM。

## 公司資訊

| | |
| --- | --- |
| 公司名稱 | 云謙有限公司（YUN CHIAN LTD.） |
| 統一編號 | 94224123 |
| TEL | (02)-29667353 |
| FAX | (02)-29662643 |
| 地址 | 新北市板橋區光華街32號 |

資料集中在 `data/company.ts`（電話、傳真、統編）與 `lib/i18n.tsx`（公司名、地址的中英文），改一處全站生效。

## 特色

- 中英雙語切換（右上角 EN / 中，記憶於 localStorage）
- 12 大類、109 細項,每個細項都有中英文說明,資料集中於 `data/catalog.ts`,一處維護、全站套用
- 每個分類都有主圖,首頁另有主視覺
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
| `/` | 首頁:主視覺、12 大類卡片、品牌 |
| `/products` | 全部分類列表 |
| `/products/[slug]` | 單一分類的主圖與細項 |
| `/brands` | 品牌一覽 |
| `/about` | 關於我們＋公司聯絡資訊 |
| `/inquiry` | 線上詢價表單 |

## 目錄結構

```
app/
  layout.tsx            # 全站框架、語言 Provider、SEO metadata
  page.tsx              # 首頁(主視覺 + 分類 + 品牌)
  products/             # 產品分類列表與細項頁
  brands/               # 品牌
  about/                # 關於我們
  inquiry/              # 線上詢價表單
  api/inquiry/route.ts  # 詢價接收 API
components/             # Header / Footer / CategoryCard
data/catalog.ts         # ★ 產品分類樹(單一資料來源)
data/company.ts         # 電話 / 傳真 / 統編
lib/i18n.tsx            # 中英雙語字典與 Context
public/hero.svg         # 首頁主視覺
public/products/*.svg   # 各分類主圖
```

## 換上自家產品照片

`public/products/` 底下每個分類各一張圖,檔名對應分類的 `slug`（例如 `lasers.svg`、`fiber.svg`）。目前放的是暫代用的抽象圖,換成實際照片的方式:

1. 把照片放進 `public/products/`,例如 `lasers.jpg`（建議 4:3 或 3:2、寬度 1200px 以上）
2. 到 `data/catalog.ts` 把該分類的 `image` 改成 `"/products/lasers.jpg"`

首頁主視覺同理:換掉 `public/hero.svg`,或放新檔案後改 `app/page.tsx` 裡的 `src="/hero.svg"`。

## 維護產品資料

全站的分類、細項、品牌都讀自 `data/catalog.ts`,改這一個檔案即可,不必動頁面:

```ts
{
  slug: "lasers",              // 網址用,對應 /products/lasers
  zh: "雷射與光源",
  en: "Lasers & Light Sources",
  descZh: "...",               // 分類說明(卡片與分類頁)
  descEn: "...",
  image: "/products/lasers.svg",
  brands: ["CNI", "CrystaLaser"],
  subs: [
    {
      slug: "hene",
      zh: "氦氖雷射",
      en: "Helium-Neon Lasers",
      descZh: "...",           // 細項說明(分類頁的小卡)
      descEn: "...",
    },
  ],
}
```

介面文字（選單、按鈕、表單標籤、公司名、地址）則在 `lib/i18n.tsx` 的字典裡,中英各一份。

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

若要改用 GitHub Pages 之類的純靜態託管,需在 `next.config.mjs` 設 `output: "export"`,但**詢價 API 會失效**（靜態站沒有伺服器端）,得改接第三方表單服務。

## 後續可擴充

1. 產品細項頁與實際 SKU、規格表、型錄 PDF 下載
2. 詢價 API 串接 Email（Resend / Nodemailer）或 CRM
3. 產品實照與品牌 logo
4. 全文搜尋、產品比較

## 授權

© 云謙有限公司 YUN CHIAN LTD. All Rights Reserved.
