import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true',path.resolve(__dirname,'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /(\.css)$/, 
        use: ['style-loader','css-loader'],
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
}
