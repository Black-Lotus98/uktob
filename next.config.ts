import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Exclude SVGs from the default file-loader
    const fileLoaderRule = config.module.rules.find(
      (rule :any ) => rule.test && rule.test.test(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Optimizes SVG for icon usage
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
