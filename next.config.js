const assetPrefix = process.env.BUILD_GH_PAGES === "true" ? "./" : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix,
};

module.exports = nextConfig;
