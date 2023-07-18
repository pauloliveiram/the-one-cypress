const dotenvPlugin = require('dotenv-webpack');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js'],
      },
    },
    watchOptions: {},
  };

  config.plugins.push(dotenvPlugin(options));

  return config;
};
