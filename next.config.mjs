/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'export', // Это важно для статической сборки
  experimental: {
    appDir: true, // Если ты используешь новую структуру с app/
  },
};

export default nextConfig;
