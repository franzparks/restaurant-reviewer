var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
    
  },
  module: {
    loaders: [
        {
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
      
        },
        
        {   
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        },

        {   
            test: /\.jpg$/,
            loader: "file-loader"
        },
        {
            test: /\.html$/,
            loader: "html-loader"
        },
        { 
            test: /\.css$/,
            loader: "style!css!" 
        },
        //{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        //{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
        //{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        //{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'  
        }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
    
  },
  plugins: [
    //new webpack.DefinePlugin({
    //  'process.env': { NODE_ENV: '"production"' }
    //}),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false
    }),
    

    //new ExtractTextPlugin('src/styles/styles.css', {
    //    publicPath: '/src/styles/',
    //    allChunks: true
    //})
  ]
};