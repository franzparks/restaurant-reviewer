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
        { test: /\.css$/, 
            loader: 'style-loader!css-raw-loader' 
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
      sourceMap: false,
      mangle: false
    })
  ]
};