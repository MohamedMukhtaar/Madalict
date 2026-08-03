import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos in public/photos are WebP. Optimization is on so Next can serve
    // AVIF and per-device sizes from the srcset the components already declare.
    // Nothing SVG goes through next/image any more: the logo renders as a plain
    // <img> in components/Logo.tsx, because the optimizer rejects SVG sources.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
