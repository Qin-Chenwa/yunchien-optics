# 圖片出處與授權

本站分類主圖分兩類:一部分是專案自行產生的示意圖,一部分取自 Wikimedia Commons 的自由授權照片。
換上自家或原廠授權的產品照片時,請把 `data/catalog.ts` 中該分類的 `imageCredit` / `imageCreditUrl`
兩個欄位一併刪除,並更新本檔。

## 自由授權照片(取自 Wikimedia Commons)

| 檔案 | 分類 | 作者 | 授權 | 原始頁面 |
| --- | --- | --- | --- | --- |
| `public/products/lasers.jpg` | 雷射與光源 | Suyash Dwivedi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:5mW_Mini_Laser_Diode_Module.jpg |
| `public/products/optics.jpg` | 光學元件 | Jan Helebrant | CC0（公眾領域貢獻） | https://commons.wikimedia.org/wiki/File:Glass_optical_prism_002_(52277188123).jpg |
| `public/products/fiber.jpg` | 光纖與光通訊 | Christophe Finot | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Fibre_OM4_.jpg |
| `public/products/detectors.jpg` | 光偵測器與感測器 | Mister rf | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:DF1_Germanium_photodiode.jpg |
| `public/products/imaging.jpg` | 顯微與影像 | Shixart1985 | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Close-up_of_the_objective_lenses_of_a_microscope.jpg |

上述檔案皆為原圖等比例縮圖(長邊 1200px)後另存為 JPEG,內容未經裁切或修改。

### 授權義務

- **CC0**:無附帶義務,可自由使用。
- **CC BY**:需標示作者與授權條款。網站上已於分類頁圖片下方標示並連回原始頁面。
- **CC BY-SA**:除標示外,若再對圖片本身進行改作並散布,改作後的圖片需以相同授權釋出。
  本專案僅做等比例縮放,標示方式同上。

移除或遮蓋這些標示即不符合授權條件,請勿這麼做。

## ⚠️ 產品細項照片(`public/products/items/`、`public/hero.jpg`)

這批照片(66 張)來自本機 `~/Downloads/Telegram Desktop/商品圖片`,該資料夾是以
`anjun_crawler.py` 從 **anjun.com.tw** 抓下來的第三方網站商品圖,僅做了裁切、縮放與
背景補白處理。**這些圖沒有取得授權,上線前必須逐一確認來源與使用許可。**

處理時已排除帶有他家浮水印或版位的圖(ANJUN logo、337nm.com、天諾翔廣告圖等),
但圖上仍留有各原廠自身的品牌標(CrystaLaser、SMART SENSOR、Elitech、COSSIM、
Superèyes、恒洋光學、DHC 等)——那是原廠產品照的正常情況,是否可用仍取決於原廠授權。

替換方式:直接覆蓋 `public/products/items/<分類>/<細項>.jpg` 同名檔案即可,
不需要動 `data/catalog.ts`。刪掉檔案則該細項會自動改顯示佔位圖。

`public/hero.jpg` 為同一批來源(CNI OEM 雷射組),同樣需要確認授權。

## 專案自行產生的示意圖

以下檔案為本專案自行產生的 SVG 示意圖,無第三方權利:

`slm.svg`、`hero.svg`(hero.svg 已改用 hero.jpg,保留備份)

## 建議的後續替換來源

1. 原廠代理商素材包(Thorlabs、Mitutoyo、EKSMA、DHC、恒洋等原廠通常提供給代理商)
2. 自行拍攝的庫存品照片
3. 商用授權圖庫
