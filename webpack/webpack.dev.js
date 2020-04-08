const webpack = require('webpack');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      }, 
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'sprite-[hash:6].mylib.svg',
              esModule: false,
            }
          },
          'svg-transform-loader',
          'svgo-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
