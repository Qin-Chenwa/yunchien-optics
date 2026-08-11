/** @type {import('next').NextConfig} */

// GitHub Pages 是靜態主機,所以整站以 next export 產生純 HTML。
// 站台掛在 https://<帳號>.github.io/<repo>/ 底下時要帶 basePath;
// 之後若改綁自訂網域,把 NEXT_PUBLIC_BASE_PATH 設成空字串即可。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
