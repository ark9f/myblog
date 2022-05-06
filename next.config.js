/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // md読み込み
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  }
}

module.exports = nextConfig
