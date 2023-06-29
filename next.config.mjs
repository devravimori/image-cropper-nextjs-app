/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      ignoreBuildErrors: true,
    },
  };
  
  export default   nextConfig;