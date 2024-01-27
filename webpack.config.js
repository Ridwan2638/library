const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist/asset'),
      filename: 'bundle.js'
  },
  devServer: {
      static: path.join(__dirname, 'dist'),
      port: 8080,
      hot: true,
      devMiddleware: {
          publicPath: '/asset/'
        },
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
              loader: 'babel-loader',
              options: {
                  presets:["@babel/preset-env"]
              }
          },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};