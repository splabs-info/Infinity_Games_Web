const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            constant: path.resolve(__dirname, 'src/constant'),
            games: path.resolve(__dirname, 'src/games'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            languages: path.resolve(__dirname, 'src/languages'),
            layouts: path.resolve(__dirname, 'src/layouts'),
            onchain: path.resolve(__dirname, 'src/onchain'),
            pages: path.resolve(__dirname, 'src/pages'),
            setting: path.resolve(__dirname, 'src/setting'),
            store: path.resolve(__dirname, 'src/store'),
            theme: path.resolve(__dirname, 'src/theme'),
            utils: path.resolve(__dirname, 'src/utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'public/',
                            publicPath: 'public/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            publicPath: '/',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/images', to: 'images' },
                { from: 'public/fonts', to: 'fonts' },
                { from: 'public/logo.png', to: '' },
            ],
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
};
