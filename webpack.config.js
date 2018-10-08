module.exports = {
    entry: './src/modal.js',
    mode: 'development',
    resolve: {
    	extensions: ['.js']
    },
    output: {
    	path: __dirname + '/dist/',
    	filename: 'index.js'
    },
    module: {
    	rules: [
    		{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
    	]
    }
}
