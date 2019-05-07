const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: process.env.PORT || 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  }
});
