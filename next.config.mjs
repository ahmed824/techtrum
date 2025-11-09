/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // ❌ Disable image cache (set TTL to 0)
    // minimumCacheTTL: 31536000,
    minimumCacheTTL: 0, // <-- disable image caching

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        // ❌ Removed long-term caching on static assets
        // source: "/:all*(svg|jpg|png|css|js|woff2?)",
        source: "/:all*(svg|jpg|png|css|js|woff2?)",
        headers: [
          // ❌ Old: "public, max-age=31536000, immutable"
          // ✅ New: disable caching
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons"],
  },

  compress: true,

  poweredByHeader: false,
};

export default nextConfig;
