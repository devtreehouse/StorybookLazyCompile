const LazyCompilePlugin = require('lazy-compile-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ config }) => {
  console.log('customized config');
  config.plugins.push(new LazyCompilePlugin());
  // config.plugins.push(
  //   new webpack.DefinePlugin({
  //     STORYBOOK_LOCATION: 'test',
  //   }),
  // );
  return config;
}
