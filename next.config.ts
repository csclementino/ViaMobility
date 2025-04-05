const isGithubPages = process.env.NODE_ENV === 'production';


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <- ESSA LINHA AQUI
  },
  output: 'export',
};

export default nextConfig;