var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    devServer: {
          port: 8099
         //contentBase: './dist'
    },

    module: {
        rules: [
            {
//                test: path.join(__dirname, '.'),
                test:  /\.jsx?/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },

            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }

        ]
    }
};
