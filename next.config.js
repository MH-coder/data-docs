/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['it', 'en', 'es'],
    defaultLocale: 'it',
    localeDetection: false
  },
}

module.exports = nextConfig
