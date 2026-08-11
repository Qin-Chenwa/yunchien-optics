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

109 個細項中有 **103 項**配了照片,全部取自三個第三方網站,僅做裁切、縮放與背景補白。
**這些圖都沒有取得授權,上線前必須逐一確認來源與使用許可。**

| 來源 | 張數 | 取得方式 |
| --- | --- | --- |
| anjun.com.tw(安均科技) | 67 | `anjun_crawler.py` 抓下的商品圖 + 除濕機頁 |
| oceanhoodtw.com(台灣如海光電) | 30 | 產品頁 `og:image` |
| arno-eo.com(亞諾光電) | 13 | 產品頁 `upload/` 原圖 |

### 已排除的圖

帶他家浮水印、廣告版位、或**同業品牌標**的一律不用:

- ANJUN logo、337nm.com 浮水印、天諾翔廣告圖
- 機殼印有 OCEANHOOD.TW / 台灣如海光電 / Oceanhood Taiwan 的產品照

如海是同業,其自有品牌產品照幾乎都帶標,已全數逐張確認並排除。
其中三項改用該站無品牌標的機型:

| 細項 | 改用機型 |
| --- | --- |
| `lasers/spectral-source` | HL2000-P20 鹵素燈 |
| `lasers/calibration-source` | AR-1 氬燈校準光源 |
| `spectroscopy/raman` | EVA3000PLUS 拉曼儀 |

其餘圖片上的原廠標(CrystaLaser、SMART SENSOR、Elitech、EKSMA、GPD、SCANLAB、
Kimtech、COSSIM、Superèyes、恒洋光學、DHC 等)是原廠產品照的正常情況,
是否可用取決於原廠授權。

### 顯示佔位圖的 6 項

| 細項 | 原因 |
| --- | --- |
| `spectroscopy/fluorescence`(螢光光譜系統) | 三站僅如海有,全數帶 LIFS + 如海標 |
| `spectroscopy/field-spec`(地物光譜儀) | 同上,機殼印有大面積如海標 |
| `spectroscopy/multi-angle`(多角度光譜量測系統) | 同上,底板印有 Oceanhood Taiwan |
| `spectroscopy/micro-area`(微區光譜量測系統) | 同上,顯微鏡上貼有 OCEANHOOD TAIWAN |
| `spectroscopy/wavefront`(光波前分析儀) | 三站都沒有對應產品 |
| `safety/viewer`(紫外/紅外線觀測器) | 三站都沒有對應產品 |

### 替換方式

直接覆蓋 `public/products/items/<分類>/<細項>.jpg` 同名檔案即可,不需要動
`data/catalog.ts`。刪掉檔案並移除該行,細項會自動改顯示佔位圖。

`public/hero.jpg` 為 anjun 來源(CNI OEM 雷射組),同樣需要確認授權。

## 專案自行產生的示意圖

以下檔案為本專案自行產生的 SVG 示意圖,無第三方權利:

`slm.svg`、`hero.svg`(hero.svg 已改用 hero.jpg,保留備份)

## 建議的後續替換來源

1. 原廠代理商素材包(Thorlabs、Mitutoyo、EKSMA、DHC、恒洋等原廠通常提供給代理商)
2. 自行拍攝的庫存品照片
3. 商用授權圖庫
