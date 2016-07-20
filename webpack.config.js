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
            loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
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
    new webpack.optimize.UglifyJsPlugin({
      
      mangle: false
    }),

    new ExtractTextPlugin({
            filenames: "styles.css",
            allChunks: true
        })
  ]
};