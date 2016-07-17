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
            test: /\.css$/, 
            loader: "css-loader!autoprefixer-loader"
        },
        {   
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        },

        {   
            test: /\.jpg$/,
            loader: "file-loader"
        } 
  

    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
    
  }
};