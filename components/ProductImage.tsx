"use client";

import { asset } from "@/lib/asset";

/** 產品圖。沒有照片的細項顯示一張帶光學紋路的佔位圖,版面高度才不會參差不齊。 */
export default function ProductImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`flex items-center justify-center bg-gradient-to-br from-slate-100 via-brand-light to-slate-100 ${className}`}
      >
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-brand/25" fill="none">
          <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M32 11v10M32 43v10M11 32h10M43 32h10M17 17l7 7M47 47l-7-7M47 17l-7 7M17 47l7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={asset(src)} alt={alt} loading="lazy" className={className} />
  );
}
