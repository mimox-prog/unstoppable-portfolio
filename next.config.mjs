/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: [
    '@langchain/core',
    '@langchain/openai',
    '@langchain/community',
    'langchain',
  ],
};

export default nextConfig;
