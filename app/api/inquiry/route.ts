import { NextResponse } from "next/server";

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
