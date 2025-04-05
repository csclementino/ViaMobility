const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: isGithubPages ? '/teste' : '',
  assetPrefix: isGithubPages ? '/teste/' : '',
};

export default nextConfig;
