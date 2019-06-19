const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {

  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'src/')
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './style.css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],
  module: {
    rules: [
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
         test: /\.(sass|scss|css)$/,
         use: [
           {
             loader: MiniCssExtractPlugin.loader,
           },
           'css-loader',
           'sass-loader',
         ],
       },
       {
        test: /\.(woff(2)?|ttf|eot|png|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }]
        },
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return {
      ...config,
      mode: 'development',
      devtool: 'inline-source-map',
    }
  }
  if (argv.mode === 'production') {}
}
