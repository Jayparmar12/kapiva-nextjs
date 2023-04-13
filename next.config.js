// const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
const isProd = process.env.NODE_ENV === 'production';

module.exports = optimizedImages({
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://kapiva-in-nextjs.pages.dev/' : undefined,
  /* config for next-optimized-images */
  images: {
    disableStaticImages: true,
    loader: 'akamai',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imgeng.in',
      },
      {
        protocol: 'https',
        hostname: '*.bigcommerce.com',
      },
      {
        protocol: 'https',
        hostname: '*.kapiva.in',
      },
    ],
  },
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4, // disabled due to server hang-up issue
    // cpus: 1,
  },
});

// module.exports = withPlugins([
//   [
//     optimizedImages({
//       images: {
//         loader: 'custom',
//         disableStaticImages: true,
//       },
//     }),
//   ],
//   [
//     withBundleAnalyzer({
//       images: {
//         loader: 'custom',
//         disableStaticImages: true,
//       },
//       eslint: {
//         dirs: ['.'],
//       },
//       poweredByHeader: false,
//       trailingSlash: true,
//       basePath: '',
//       // The starter code load resources from `public` folder with `router.basePath` in React components.
//       // So, the source code is "basePath-ready".
//       // You can remove `basePath` if you don't need it.
//       reactStrictMode: true,
//     }),
//   ],
// ]);
