var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000', include: path.join(__dirname, 'public')}
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
};