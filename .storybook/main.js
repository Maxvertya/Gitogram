const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}