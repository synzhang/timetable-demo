require('dotenv').config();

const webpack = require('webpack');
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
};

module.exports = withCss({
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  },
  serverRuntimeConfig: {
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    apiUrlBase: process.env.API_URL_BASE
  },
});
