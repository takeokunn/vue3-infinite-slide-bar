const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './example/main.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-env"]
            }
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.vue', '.js']
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        publicPath: '/dist/',
        watchContentBase: true,
        open: true,
        openPage: "index.html",
    }
}
