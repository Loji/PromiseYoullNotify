const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        bundle: './src/index.js',
        example: './src/example.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/dist',
        library: 'promiseyoullnotify',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: debug ? "inline-sourcemap" : null,
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader',
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-react-loader',
                query: {
                    classIdPrefix: '[name]-[hash:8]__',
                }
            }
        ],
    },
};
