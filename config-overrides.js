const webpack = require('webpack');

module.exports = function override(config, env) {
    // Agregar polyfills para los módulos necesarios
    config.resolve.fallback = Object.assign({}, config.resolve.fallback, {
      crypto: require.resolve('crypto-browserify'),
      timers: require.resolve('timers-browserify'),
      Buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      url: require.resolve('url/'),
      assert: require.resolve('assert/'),
      tls: require.resolve('tls/')
    });

    config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer']
        })
      );
  
    return config;
  };
  
  