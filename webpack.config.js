const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['env', 'react'],
               plugins: ['transform-class-properties', 'transform-object-assign']
            }
         },
         { 
            test: /\.css$/,
            loader: "style-loader!css-loader" 
          }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}