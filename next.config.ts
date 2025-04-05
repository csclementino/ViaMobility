const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'teste'; // substitua pelo nome do seu repositório

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;