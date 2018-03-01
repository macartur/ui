const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
  entry: './docs/main.js',
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  performance: {
    hints: false
  },
});
