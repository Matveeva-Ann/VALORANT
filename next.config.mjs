/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com', 'cloudflare-ipfs.com'],
        formats: ['image/avif', 'image/webp'],
        // minimumCacheTTL: 0,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloudflare-ipfs.com',
            port: '',
            pathname: '/vi/**',
          }

        ]
      },
};

export default nextConfig;