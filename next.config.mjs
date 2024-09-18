import withMDX from '@next/mdx';

const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
});

export default nextConfig;
