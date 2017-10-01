const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: debug ? "inline-sourcemap" : null,
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
                    {
                        loader: "style-loader",
                    }, {
                        loader: "css-loader",
                    }, {
                        loader: "sass-loader",
                    }
                ],
            },
        ],
    },
};
