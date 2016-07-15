
module.exports = {
  entry: {
    javascript: './src/index.js',
    html: './index.html'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    //enable gzip compression for assets
    compress: true

    
  },

  /*'webpack-dev-server': {
      options: {
        hot: true,
        port: 8000,
        webpack: webpackDevConfig,
        publicPath: '/',
        //__webpack_public_path__ : 'window.resourceBaseUrl',
        contentBase: './<%= pkg.src %>/',
        historyApiFallback: true
    }*/
    
};
