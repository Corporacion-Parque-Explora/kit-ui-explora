
/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "app/scss")],
    prependData: `@import "app.scss";`,
  },
};

module.exports = nextConfig;
