const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'vanila-ts-project',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: './src/index.ts',
    snake: './src/snake.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   exclude: /node_modules/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         implementation: require('sass'),
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 80,
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      filename: 'index.html',
      excludeChunks: ['snake'],
      template: 'pages/index.html',
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      filename: 'snake.html',
      chunks: ['snake'],
      template: 'pages/snake.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),
  ],
};
