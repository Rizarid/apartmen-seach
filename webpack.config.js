const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

module.exports = {
  mode: 'development',
  entry: {
    main: './src/pages/landing/index.js',
    searchRoom: './src/pages/search-room/index.js',
    room: './src/pages/room/index.js',
    signIn: './src/pages/sign-in/index.js',
    registration: './src/pages/registration/index.js',
    elements: './src/pages/elements/index.js',
    cards: './src/pages/cards/index.js',
    headers: './src/pages/headers/index.js',
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  optimization: optimization(),

  devServer: {
    port: 4200,

  },
  plugins: [
    new ImageminWebpWebpackPlugin(),
    autoprefixer,
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/landing/landing.pug',
      inject: 'head',
      chunks: ['main'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/search-room/search-room.pug',
      inject: 'head',
      filename: 'search-room.html',
      chunks: ['searchRoom'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/room/room.pug',
      inject: 'head',
      filename: 'room.html',
      chunks: ['room'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/sign-in/sign-in.pug',
      inject: 'head',
      filename: 'sign-in.html',
      chunks: ['signIn'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/registration/registration.pug',
      inject: 'head',
      filename: 'registration.html',
      chunks: ['registration'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/elements/elements.pug',
      inject: 'head',
      filename: 'elements.html',
      chunks: ['elements'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/cards/cards.pug',
      inject: 'head',
      filename: 'cards.html',
      chunks: ['cards'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      favicon: './favicon.svg',
      template: 'src/pages/headers/headers.pug',
      inject: 'head',
      filename: 'headers.html',
      chunks: ['headers'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new StylelintPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          emitFile: true,
          esModule: false,
          name: 'images/[name].[contenthash].[ext]',
        },

      },
      {
        test: /\.(ttf|woff|svg)/,
        loader: 'file-loader',
        options: {
          emitFile: true,
          esModule: false,
          name: 'fonts/[name].[contenthash].[ext]',
        },

      },
    ],

  },

};
