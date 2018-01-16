const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve('dist')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};