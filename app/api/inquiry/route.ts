import { NextResponse } from "next/server";

// ⚠️ 目前沒有被使用。全站以 next export 產生靜態檔案部署到 GitHub Pages,
// 靜態主機跑不了 route handler,這支端點不會出現在 out/ 裡,
// 詢價表單改走 mailto(見 app/inquiry/InquiryForm.tsx)。
// 之後若改部署到 Vercel / 自架 Node,把 next.config.mjs 的 output: "export" 拿掉,
// 表單改回 fetch("/api/inquiry") 就能重新啟用。
//
// 詢價表單接收端點(骨架版)
// 實務上可在此:寄送 Email(如 Resend / Nodemailer)、寫入資料庫、或轉發到 CRM。
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 基本驗證
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json(
        { ok: false, error: "缺少必填欄位 / Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: 串接 Email / DB / CRM。目前僅記錄於伺服器 log。
    console.log("[INQUIRY]", new Date().toISOString(), data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
