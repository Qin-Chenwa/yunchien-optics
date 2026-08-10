// 云謙股份有限公司 — 整合三站產品線(安均 / 如海 / 亞諾)去重後的分類樹
// Integrated, de-duplicated product taxonomy (bilingual zh / en)
// source 標記代表資料原始來源站台:anjun(安均)/ oceanhood(如海)/ arno(亞諾)

export type Source = "anjun" | "oceanhood" | "arno";

export interface SubCategory {
  slug: string;
  zh: string;
  en: string;
  sources: Source[];
}

export interface Category {
  slug: string;
  zh: string;
  en: string;
  descZh: string;
  descEn: string;
  icon: string; // emoji 佔位,可日後替換為 SVG
  brands: string[];
  subs: SubCategory[];
}

export const categories: Category[] = [
  {
    slug: "lasers",
    zh: "雷射與光源",
    en: "Lasers & Light Sources",
    descZh: "各波段穩頻雷射、氣體/固態/半導體/光纖雷射,以及光譜用寬頻與校正光源。",
    descEn: "Stabilized lasers across all wavelengths, gas / solid-state / diode / fiber lasers, plus broadband and calibration light sources.",
    icon: "🔦",
    brands: ["CNI", "CrystaLaser", "RGB Lase", "Solar", "寧波遠明", "Integrated Optics", "K2 Photonics"],
    subs: [
      { slug: "stabilized", zh: "穩頻雷射(405–1064nm)", en: "Stabilized Lasers (405–1064nm)", sources: ["oceanhood"] },
      { slug: "hene", zh: "氦氖雷射", en: "Helium-Neon Lasers", sources: ["arno"] },
      { slug: "solid-state", zh: "連續輸出固態雷射", en: "CW Solid-State Lasers", sources: ["arno", "oceanhood"] },
      { slug: "diode", zh: "半導體雷射 / TEM00", en: "Diode Lasers / TEM00", sources: ["arno"] },
      { slug: "fiber-laser", zh: "光纖雷射", en: "Fiber Lasers", sources: ["arno"] },
      { slug: "co2", zh: "二氧化碳雷射", en: "CO₂ Lasers", sources: ["arno"] },
      { slug: "pulsed", zh: "脈衝 / 飛秒雷射", en: "Pulsed / Femtosecond Lasers", sources: ["arno", "oceanhood"] },
      { slug: "broadband", zh: "寬頻光源", en: "Broadband Light Sources", sources: ["arno"] },
      { slug: "spectral-source", zh: "光譜光源(氘/氙/鹵素/校正)", en: "Spectral Sources (D₂ / Xe / Halogen / Calibration)", sources: ["oceanhood"] },
    ],
  },
  {
    slug: "optics",
    zh: "光學元件",
    en: "Optical Components",
    descZh: "透鏡、反射鏡、稜鏡、濾波片、繞射光學元件(DOE)、雷射級光學與非線性晶體。",
    descEn: "Lenses, mirrors, prisms, filters, diffractive optics (DOE), laser-grade optics and nonlinear crystals.",
    icon: "🔷",
    brands: ["Thorlabs", "DHC 大恒光電", "恒洋光學", "Chroma", "EKSMA Optics", "IDEX (Semrock)", "OptiGrate", "Alluxa"],
    subs: [
      { slug: "lenses", zh: "光學透鏡", en: "Optical Lenses", sources: ["arno", "anjun"] },
      { slug: "mirrors", zh: "反射鏡", en: "Mirrors", sources: ["arno", "oceanhood"] },
      { slug: "beamsplitters", zh: "分光鏡", en: "Beamsplitters", sources: ["arno"] },
      { slug: "windows", zh: "窗鏡", en: "Windows", sources: ["arno"] },
      { slug: "polarizers", zh: "偏光鏡", en: "Polarizers", sources: ["arno"] },
      { slug: "prisms", zh: "稜鏡", en: "Prisms", sources: ["arno"] },
      { slug: "filters", zh: "濾波片 / 濾光片(Chroma)", en: "Optical Filters (Chroma)", sources: ["arno", "oceanhood"] },
      { slug: "doe", zh: "繞射光學元件(DOE)", en: "Diffractive Optical Elements (DOE)", sources: ["arno"] },
      { slug: "laser-grade", zh: "雷射級光學元件", en: "Laser-Grade Optics", sources: ["arno"] },
      { slug: "crystals", zh: "非線性 / 雷射晶體", en: "Nonlinear & Laser Crystals", sources: ["oceanhood"] },
    ],
  },
  {
    slug: "optomech",
    zh: "光學機構與位移平台",
    en: "Opto-Mechanics & Stages",
    descZh: "鏡架、鏡筒、光學桌與桌板、籠式同軸系統、手動位移平台與轉接零件。",
    descEn: "Mounts, tubes, optical tables, cage systems, manual translation stages and adapters.",
    icon: "⚙️",
    brands: ["Thorlabs", "亞諾光電", "EKSMA Optics"],
    subs: [
      { slug: "mounts", zh: "光學鏡架", en: "Optical Mounts", sources: ["arno"] },
      { slug: "tubes", zh: "光學鏡筒", en: "Lens Tubes", sources: ["arno"] },
      { slug: "clamps", zh: "夾持機構 / 底板壓條", en: "Clamps & Base Plates", sources: ["arno"] },
      { slug: "rails", zh: "光學滑軌", en: "Optical Rails", sources: ["arno"] },
      { slug: "tables", zh: "光學防振桌與桌板", en: "Optical Tables & Breadboards", sources: ["arno"] },
      { slug: "cage", zh: "籠式同軸系統(16/30/60mm)", en: "Cage Systems (16 / 30 / 60mm)", sources: ["arno"] },
      { slug: "stages", zh: "手動位移平台(X / XY / Z / 旋轉 / 傾斜)", en: "Manual Stages (X / XY / Z / Rotation / Tilt)", sources: ["arno", "oceanhood"] },
      { slug: "apertures", zh: "光圈", en: "Apertures / Irises", sources: ["arno"] },
      { slug: "adapters", zh: "轉接配件與工具零件", en: "Adapters, Tools & Parts", sources: ["arno"] },
    ],
  },
  {
    slug: "spectroscopy",
    zh: "光譜與量測儀器",
    en: "Spectroscopy & Measurement",
    descZh: "光纖光譜儀、拉曼與螢光光譜系統、單光儀,以及功率/能量、光束品質、波前與極化分析儀。",
    descEn: "Fiber-optic spectrometers, Raman / fluorescence systems, monochromators, and power / beam / wavefront / polarization analyzers.",
    icon: "📊",
    brands: ["Spectral Products", "DataRay", "如海光電", "亞諾光電"],
    subs: [
      { slug: "fiber-spectrometer", zh: "光纖光譜儀(UV–NIR)", en: "Fiber-Optic Spectrometers (UV–NIR)", sources: ["oceanhood"] },
      { slug: "raman", zh: "拉曼光譜系統(532–1064nm)", en: "Raman Systems (532–1064nm)", sources: ["oceanhood"] },
      { slug: "fluorescence", zh: "螢光 / 微區光譜系統", en: "Fluorescence & Micro-area Spectroscopy", sources: ["oceanhood"] },
      { slug: "monochromator", zh: "SP 單光儀(1/8–1/2m)", en: "Monochromators (SP, 1/8–1/2m)", sources: ["oceanhood"] },
      { slug: "power-meter", zh: "雷射光功率 / 能量計", en: "Laser Power / Energy Meters", sources: ["arno", "oceanhood"] },
      { slug: "beam-profiler", zh: "雷射光束品質分析儀", en: "Beam Profiling / M² Analyzers", sources: ["arno", "oceanhood"] },
      { slug: "wavefront", zh: "光波前分析儀", en: "Wavefront Analyzers", sources: ["arno"] },
      { slug: "polarization", zh: "極化分析儀", en: "Polarization Analyzers", sources: ["arno"] },
      { slug: "osa", zh: "光譜 / 雷射頻譜分析儀", en: "Optical / Laser Spectrum Analyzers", sources: ["arno"] },
    ],
  },
  {
    slug: "fiber",
    zh: "光纖與光通訊",
    en: "Fiber & Optical Communication",
    descZh: "光纖(含客製)、拉曼/螢光探頭、準直器、跳線、耦合器、分路器與衰減器。",
    descEn: "Fibers (incl. custom), Raman / fluorescence probes, collimators, patch cords, couplers, splitters and attenuators.",
    icon: "🧵",
    brands: ["如海光電", "Ocean 系列"],
    subs: [
      { slug: "fibers", zh: "光纖(QP / QR / 寬波段 / 客製)", en: "Optical Fibers (QP / QR / Broadband / Custom)", sources: ["oceanhood"] },
      { slug: "probes", zh: "拉曼 / 螢光探頭(405–1064nm)", en: "Raman / Fluorescence Probes (405–1064nm)", sources: ["oceanhood"] },
      { slug: "collimators", zh: "準直鏡 / 準直器", en: "Collimators", sources: ["oceanhood"] },
      { slug: "patchcords", zh: "光纖跳線", en: "Fiber Patch Cords", sources: ["oceanhood"] },
      { slug: "couplers", zh: "光纖耦合器 / 連接器", en: "Couplers / Connectors", sources: ["oceanhood"] },
      { slug: "splitters", zh: "光分路器 / 分歧器(PLC)", en: "Splitters (PLC / Bifurcated)", sources: ["oceanhood"] },
      { slug: "attenuators", zh: "光纖衰減器 / 環形器", en: "Attenuators / Circulators", sources: ["oceanhood"] },
    ],
  },
  {
    slug: "detectors",
    zh: "光偵測器與感測器",
    en: "Detectors & Sensors",
    descZh: "Ge / InGaAs / APD / 多單元光電二極體與光偵測器模組。",
    descEn: "Ge / InGaAs / APD / multi-cell photodiodes and photodetector modules.",
    icon: "📡",
    brands: ["GPD Optoelectronics", "亞諾光電"],
    subs: [
      { slug: "ge", zh: "Ge 光電二極體", en: "Ge Photodiodes", sources: ["oceanhood"] },
      { slug: "ingaas", zh: "InGaAs 光電二極體", en: "InGaAs Photodiodes", sources: ["oceanhood"] },
      { slug: "apd", zh: "Avalanche 光電二極體(APD)", en: "Avalanche Photodiodes (APD)", sources: ["oceanhood"] },
      { slug: "multicell", zh: "多單元光電二極體", en: "Multi-Cell Photodiodes", sources: ["oceanhood"] },
      { slug: "modules", zh: "光偵測器模組", en: "Photodetector Modules", sources: ["arno"] },
    ],
  },
  {
    slug: "imaging",
    zh: "顯微與影像",
    en: "Microscopy & Imaging",
    descZh: "顯微鏡、顯微物鏡(Mitutoyo)、工業相機與變焦/定焦/顯微鏡頭。",
    descEn: "Microscopes, microscope objectives (Mitutoyo), industrial cameras and zoom / fixed / micro lenses.",
    icon: "🔬",
    brands: ["Mitutoyo", "致旗", "超眼", "瑞顯光學", "亞諾光電"],
    subs: [
      { slug: "microscopes", zh: "顯微鏡", en: "Microscopes", sources: ["anjun"] },
      { slug: "objectives", zh: "顯微物鏡(明視野 / 明暗視野)", en: "Objectives (BF / BD, Mitutoyo)", sources: ["oceanhood"] },
      { slug: "cameras", zh: "工業相機", en: "Industrial Cameras", sources: ["arno"] },
      { slug: "lenses-imaging", zh: "變焦 / 定焦 / 顯微鏡頭", en: "Zoom / Fixed / Micro Lenses", sources: ["arno"] },
    ],
  },
  {
    slug: "slm",
    zh: "空間光調制器(SLM)",
    en: "Spatial Light Modulators (SLM)",
    descZh: "穿透式、振幅調制與相位調制反射式空間光調制器。",
    descEn: "Transmissive, amplitude-modulating and phase-modulating reflective SLMs.",
    icon: "🌀",
    brands: ["亞諾光電"],
    subs: [
      { slug: "transmissive", zh: "穿透式 SLM", en: "Transmissive SLM", sources: ["arno"] },
      { slug: "amplitude", zh: "振幅調制反射式 SLM", en: "Amplitude Reflective SLM", sources: ["arno"] },
      { slug: "phase", zh: "相位調制反射式 SLM", en: "Phase Reflective SLM", sources: ["arno"] },
    ],
  },
  {
    slug: "safety",
    zh: "雷射防護與觀測",
    en: "Laser Safety & Viewing",
    descZh: "雷射護目鏡、雷射防護、IR 偵測卡與紫外/紅外觀測器。",
    descEn: "Laser goggles, laser safety, IR detection cards and UV / IR viewers.",
    icon: "🥽",
    brands: ["亞諾光電", "如海光電"],
    subs: [
      { slug: "goggles", zh: "雷射護目鏡", en: "Laser Goggles", sources: ["oceanhood"] },
      { slug: "protection", zh: "雷射防護", en: "Laser Protection", sources: ["arno"] },
      { slug: "ir-card", zh: "IR 偵測卡", en: "IR Detection Cards", sources: ["oceanhood"] },
      { slug: "viewers", zh: "紫外 / 紅外線觀測器", en: "UV / IR Viewers", sources: ["arno"] },
    ],
  },
  {
    slug: "environmental",
    zh: "環境監測與數據",
    en: "Environmental & Data Logging",
    descZh: "溫溼度數據紀錄器、氣體偵測警報器與工業除濕機。",
    descEn: "Temperature / humidity data loggers, gas detectors & alarms, industrial dehumidifiers.",
    icon: "🌡️",
    brands: ["Lascar", "Elitech 精創", "SMART SENSOR 希瑪", "PCsensor"],
    subs: [
      { slug: "dataloggers", zh: "溫溼度數據紀錄器", en: "Temp / Humidity Data Loggers", sources: ["anjun"] },
      { slug: "gas", zh: "氣體偵測、檢測器、警報", en: "Gas Detection & Alarms", sources: ["anjun"] },
      { slug: "dehumidifier", zh: "工業除濕機", en: "Industrial Dehumidifiers", sources: ["anjun"] },
    ],
  },
  {
    slug: "consumables",
    zh: "實驗耗材與採樣配件",
    en: "Consumables & Sampling",
    descZh: "積分球、比色皿、漫反射標準板、擦拭紙、無塵室用品與採樣支架。",
    descEn: "Integrating spheres, cuvettes, diffuse-reflectance standards, wipes, cleanroom supplies and sample holders.",
    icon: "🧪",
    brands: ["如海光電"],
    subs: [
      { slug: "spheres", zh: "積分球系列", en: "Integrating Spheres", sources: ["oceanhood"] },
      { slug: "cuvettes", zh: "石英比色皿", en: "Quartz Cuvettes", sources: ["oceanhood"] },
      { slug: "standards", zh: "漫反射標準板", en: "Diffuse Reflectance Standards", sources: ["oceanhood"] },
      { slug: "wipes", zh: "擦拭紙 / 無塵室用品", en: "Wipes / Cleanroom Supplies", sources: ["oceanhood"] },
      { slug: "holders", zh: "探頭 / 採樣支架及附件", en: "Probe / Sample Holders & Accessories", sources: ["oceanhood"] },
    ],
  },
  {
    slug: "systems",
    zh: "光學模組、次系統與客製",
    en: "Modules, Subsystems & Custom",
    descZh: "雷射直寫曝光機、自動對焦模組、平頂光次系統、掃描系統與客製化光學/繞射服務。",
    descEn: "Laser direct-write exposure, autofocus modules, flat-top subsystems, scan systems and custom optics / DOE services.",
    icon: "🛠️",
    brands: ["Scanlab", "亞諾光電", "如海光電"],
    subs: [
      { slug: "direct-write", zh: "雷射直寫無光罩曝光機", en: "Maskless Laser Direct-Write Exposure", sources: ["arno"] },
      { slug: "autofocus", zh: "自動對焦模組 / 系統", en: "Autofocus Modules / Systems", sources: ["arno"] },
      { slug: "flattop", zh: "平頂光光學次系統", en: "Flat-Top Beam Subsystems", sources: ["arno"] },
      { slug: "scan", zh: "掃描系統與控制電子(Scanlab)", en: "Scan Systems & Control (Scanlab)", sources: ["oceanhood"] },
      { slug: "custom", zh: "客製化光學 / 繞射元件", en: "Custom Optics / DOE Services", sources: ["arno", "anjun", "oceanhood"] },
    ],
  },
];

export const sourceLabels: Record<Source, { zh: string; en: string; site: string }> = {
  anjun: { zh: "安均科技", en: "Anjun Technology", site: "anjun.com.tw" },
  oceanhood: { zh: "如海光電", en: "Oceanhood Photonics", site: "oceanhoodtw.com" },
  arno: { zh: "亞諾光電", en: "Arno Electro-Optics", site: "arno-eo.com" },
};

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
