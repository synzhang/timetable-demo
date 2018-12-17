require('dotenv').config();

const webpack = require('webpack');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
};

module.exports = withCss(withSass({
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
}));
