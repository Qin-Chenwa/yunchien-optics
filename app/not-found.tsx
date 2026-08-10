import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-slate-500">找不到頁面 / Page not found</p>
      <Link href="/" className="mt-6 inline-block text-brand hover:underline">
        ← 回首頁 / Home
      </Link>
    </div>
  );
}
