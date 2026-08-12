import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "云謙有限公司 YUN CHIAN LTD. | 光電・雷射・光學元件",
  description:
    "云謙有限公司(YUN CHIAN LTD.)供應雷射光源、光學元件、光譜量測、光纖通訊與精密光機產品,提供選型建議、供貨與技術支援。TEL 0933-215-606。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <LangProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
