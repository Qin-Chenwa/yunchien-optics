// GitHub Pages 掛在子路徑底下時,next/link 會自動帶 basePath,但原生 <img src="/…">
// 不會,得自己補。所有指向 public/ 的圖片路徑都要經過這個函式。
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
