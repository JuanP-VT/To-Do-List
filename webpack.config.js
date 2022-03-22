const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    library: 'MyLib',
    libraryTarget: 'var',
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
    open:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html')

    }),
  ],
module: {
   rules: [
     {test: /\.(?:ico|gif|jpg|png)$/i,
      type : 'asset/resource'
    },
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
       
   ],
 },
};