import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "云謙股份有限公司 | 光電・雷射・光學元件整合供應",
  description:
    "云謙股份有限公司整合光電量測、雷射、光學元件、光譜量測與光纖通訊產品線,提供研究與產業客戶一站式解決方案。",
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
