const merge = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    allowedHosts: ['localhost', 'fatpandadev'],
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        secure: false,
      },
    },
    public: 'fatpandadev:8080',
  },
  plugins: [new StylelintPlugin({ files: ['**/*.css', '**/*.less'] })],
});

module.exports = config;
