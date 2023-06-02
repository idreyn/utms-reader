/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    assetPrefix: process.env.ASSET_PREFIX,
};

module.exports = nextConfig;
