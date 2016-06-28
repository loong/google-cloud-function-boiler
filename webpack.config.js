// webpack.config.js
module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: './prod/index.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
