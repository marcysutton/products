const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withMDX = require('@next/mdx')()

const IMAGE_HOST_DOMAINS = [
  `res.cloudinary.com`,
  `d2eip9sf3oo6c2.cloudfront.net`,
]

const nextConfig = {
  webpack: (config, {isServer}) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
  async redirects() {
    return []
  },
}

module.exports = withPlugins(
  [
    withImages(),
    withMDX({
      pageExtensions: ['ts', 'tsx', 'mdx'],
      remarkPlugins: [require('remark-slug')],
      rehypePlugins: [require('mdx-prism')],
    }),
  ],
  nextConfig,
)