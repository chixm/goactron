// typescript called from renderer process should be bundled to one file.
const path = require('path')
const outputPath = path.join(__dirname, "dist")

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/preload.ts',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [ {loader: 'babel-loader'}, {loader: 'ts-loader'}]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts', '.js'],
        modules: [path.resolve(__dirname, '../'), `node_modules`]
    }
}