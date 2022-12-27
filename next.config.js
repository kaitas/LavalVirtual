/** @type {import('next').NextConfig} */

// steps.deployment.outputs.page_url
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['akihiko.shirai.as'],
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  optimizeFonts: false,
//  output: 'standalone',
}

