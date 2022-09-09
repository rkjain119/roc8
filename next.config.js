/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'softr-prod.imgix.net',
      'github-contributions-api.deno.dev',
    ],
  },
}
