const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { Template } = require('webpack');
const autoprefixer = require('autoprefixer');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all" 
        }
    }

    if(isProd){
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        searchRoom: './src/search-room.js',
        room: './src/room.js',
        signIn: './src/sign-in.js',
        registration: './src/registration.js',
        elements: './src/pages/elements/elements.js',
        cards: './src/pages/cards/cards.js',
        headers: './src/pages/headers/headers.js'
    },
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },

    optimization: optimization(),

    devServer: {
        port: 4200

    },
    plugins: [
        new ImageminWebpWebpackPlugin(),
        autoprefixer,
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/index.pug',
            inject: 'body',
            chunks: ['main'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/search-room.pug',
            inject: 'body',
            filename: 'search-room.html',
            chunks: ['searchRoom'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/room.pug',
            inject: 'body',
            filename: 'room.html',
            chunks: ['room'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/sign-in.pug',
            inject: 'body',
            filename: 'sign-in.html',
            chunks: ['signIn'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/registration.pug',
            inject: 'body',
            filename: 'registration.html',
            chunks: ['registration'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/pages/elements/elements.pug',
            inject: 'body',
            filename: 'elements.html',
            chunks: ['elements'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/pages/cards/cards.pug',
            inject: 'body',
            filename: 'cards.html',
            chunks: ['cards'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            favicon: './favicon.svg',
            template: 'src/pages/headers/headers.pug',
            inject: 'body',
            filename: 'headers.html',
            chunks: ['headers'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        
    ],
    

    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|webp)$/,
                loader: 'file-loader',
                options: {
                    emitFile: true,
                    esModule: false,
                    name: 'images/[name].[contenthash].[ext]'
                }
            
            },
            {
                test:  /\.(ttf|woff|svg)/,
                loader: 'file-loader',
                options: {
                    emitFile: true,
                    name: 'fonts/[name].[contenthash].[ext]'
                }
               
            }
        ],
        
    }

    
}