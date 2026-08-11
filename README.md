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
components/             # Header / Footer / CategoryCard / SubCategoryCard / ProductImage
data/catalog.ts         # ★ 產品分類樹(單一資料來源)
data/company.ts         # 電話 / 傳真 / 統編
lib/i18n.tsx            # 中英雙語字典與 Context
public/hero.jpg         # 首頁主視覺
public/products/*       # 各分類主圖
public/products/items/  # 各細項產品照(<分類>/<細項>.jpg)
```

## 換上自家產品照片

**分類主圖**在 `public/products/`,檔名對應分類的 `slug`；**細項照片**在
`public/products/items/<分類 slug>/<細項 slug>.jpg`（4:3、840×630）。

1. 覆蓋同名檔案就換好了,不必動 `data/catalog.ts`
2. 新增沒有照片的細項:放進對應資料夾後,在 `data/catalog.ts` 該細項加上
   `image: "/products/items/<分類>/<細項>.jpg"`
3. 刪掉圖檔並移除該行,細項會自動改顯示佔位圖(`components/ProductImage.tsx`)

首頁主視覺:換掉 `public/hero.jpg` 即可。

> 目前的照片來源與授權狀態見 [CREDITS.md](CREDITS.md)，**上線前請先確認**。

## 維護產品資料

全站的分類、細項、品牌都讀自 `data/catalog.ts`,改這一個檔案即可,不必動頁面:

```ts
{
  slug: "lasers",              // 網址用,對應 /products/lasers
  zh: "雷射與光源",
  en: "Lasers & Light Sources",
  descZh: "...",               // 分類說明(卡片與分類頁)
  descEn: "...",
  image: "/products/lasers.jpg",
  brands: ["CNI", "CrystaLaser"],
  subs: [
    {
      slug: "hene",
      zh: "氦氖雷射",
      en: "Helium-Neon Lasers",
      descZh: "...",           // 細項說明(分類頁的小卡)
      descEn: "...",
      image: "/products/items/lasers/hene.jpg",  // 選填,沒有就顯示佔位圖
    },
  ],
}
```

介面文字（選單、按鈕、表單標籤、公司名、地址）則在 `lib/i18n.tsx` 的字典裡,中英各一份。

## 詢價流程

站台是靜態託管,沒有後端可以收表單,所以 `/inquiry` 的表單**送出時會組成信件、開啟使用者的郵件軟體**,
收件人取自 `data/company.ts` 的 `email`。詢價頁、Footer、關於我們也都直接列出信箱與電話當作備援。

從細項卡片按「詢問此項產品」進來時,網址會帶 `?category=…&item=…`,表單會自動帶入,信件主旨也會標明品項。

`app/api/inquiry/route.ts` 還留著,但**在靜態輸出下不會被打包**。之後若改部署到 Vercel / 自架 Node:
拿掉 `next.config.mjs` 的 `output: "export"`,把 `InquiryForm.tsx` 的 `handleSubmit` 改回
`fetch("/api/inquiry")`,並在 route 裡標了 `TODO` 的位置接上 Resend / Nodemailer / CRM。

## 部署(GitHub Pages)

push 到 `main` 就會自動部署,由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 執行:
`npm ci` → `npm run build`（`output: "export"` 產生 `out/`）→ 上傳到 Pages。

**首次啟用**:GitHub repo → Settings → Pages → Source 選 **GitHub Actions**（只需做一次）。
之後網址是 `https://<帳號>.github.io/<repo>/`。

### basePath

站台掛在 `/<repo>/` 子路徑底下,所以 build 時要帶 `NEXT_PUBLIC_BASE_PATH`（workflow 已自動代入 repo 名稱）。
`next/link` 由 Next.js 自動處理,但原生 `<img src="/…">` 不會 —— 所有 public 底下的圖片路徑
一律走 `lib/asset.ts` 的 `asset()`,新增圖片時別忘了。

本機要重現正式站的路徑:

```bash
NEXT_PUBLIC_BASE_PATH=/yunchien-optics npm run build
```

之後若改綁自訂網域,把 workflow 裡的 `NEXT_PUBLIC_BASE_PATH` 設成空字串即可。

> 想要能真的收表單、有 SSR 的版本,改部署到 **Vercel** 即可(匯入 repo → 自動判定 Next.js → Deploy),
> 但要先拿掉 `output: "export"`。

## 後續可擴充

1. 產品細項頁與實際 SKU、規格表、型錄 PDF 下載
2. 換掉現有產品照(來源與授權狀態見 [CREDITS.md](CREDITS.md))、補上品牌 logo
3. 詢價改接第三方表單服務或後端(見上方「詢價流程」)
4. 全文搜尋、產品比較

## 授權

© 云謙有限公司 YUN CHIAN LTD. All Rights Reserved.
