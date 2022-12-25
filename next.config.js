/** @type {import('next').NextConfig} */
//const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
//  assetPrefix: urlPrefix,
//  basePath: urlPrefix,
  trailingSlash: true,
  optimizeFonts: false,
//  output: 'standalone',
}

