/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'filesystem', // Use filesystem caching
      };
    }
    return config;
  },
};

export default nextConfig;
