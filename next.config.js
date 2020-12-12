const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
      }),
    )

    // Important: return the modified config
    return config
  },
}
