/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl:
    process.env.BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000'),
  generateRobotsTxt: true,
};

module.exports = config;
