/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow importing images from specific domains (add your own if needed)
  images: {
    domains: ['localhost', 'example.com'], // replace 'example.com' with real image source domains
  },

  // Experimental settings (optional, for performance & edge runtime)
  experimental: {
    appDir: true, // Enable the new /app directory
    serverActions: true, // Enable server actions if using
  },

  // Custom Webpack config (optional)
  webpack: (config, { isServer }) => {
    // Example: Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

