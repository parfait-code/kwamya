/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour les métadonnées statiques et génératives
  poweredByHeader: false, // Suppression de l'en-tête X-Powered-By pour la sécurité
  compress: true, // Compression gzip des fichiers
  
  // Configuration des images externes autorisées
  images: {
    domains: ['kwamya.com'],
    // Si vous utilisez des images depuis d'autres domaines (comme CDN), ajoutez-les ici
    // domains: ['kwamya.com', 'cdn.kwamya.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // Cache des images en secondes
  },
  
  // Redirection HTTP vers HTTPS
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kwamya.com' }],
        destination: 'https://www.kwamya.com/:path*',
        permanent: true,
      },
    ];
  },
  
  // En-têtes HTTP pour la sécurité et l'optimisation SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com",
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|gif|webp|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;