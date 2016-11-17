var webpack = require('webpack');


module.exports = {
    entry: __dirname + '/../src/boot.js',
    output: {
        path: __dirname + '/../app/blog/static',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        root: __dirname,
        alias: {
            'images': './assets/images',
            'partials': './assets/partials',
            'styles': './assets/styles'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.jade$/, loader: "jade-loader" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.eot$/, loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject' },
            { test: /\.woff2$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff2' },
            { test: /\.woff$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?limit=100000&mimetype=application/font-ttf' },
            { test: /\.svg$/, loader: 'url-loader?limit=100000&mimetype=application/font-svg' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           "$": "jquery",
           "jQuery": "jquery",
           "Masonry": "masonry-layout"
       })
    ]
};