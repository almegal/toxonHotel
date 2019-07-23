const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// MAIN CONFIG
// will extends depending on mode
const config = {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
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
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }]
        },
        {
          test: /\.(|png|jpeg|jpg|gif|svg|ico)$/,
          use: [
                    {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          }]
        }
    ]
  }
};
// 
// 
/*
{
  new HtmlWebpackPlugin({
    template: './src/index.pug',
  }),
};

{
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'src/')
  },
};
*/
const devConfig = {
    devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'src/'),
    historyApiFallback: true
  },
  plugins : [
    new HtmlWebpackPlugin({
    template: './src/template/views/room.pug',
    }),
      new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: './style.css',
    chunkFilename: '[id].css',
    // inject: false
  }),
  ]
}
const prodConfig = {
    plugins : [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: './style.css',
        chunkFilename: '[id].css',
        // inject: false
    }),
      new HtmlWebpackPlugin({
        template: './src/template/views/login.pug',
        filename: 'login.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/template/views/registration.pug',
        filename: 'registration.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/template/views/index.pug',
        filename: 'index.html'
      }),
  ]
}
// 
// 
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return {
      ...config,
      ...devConfig,
      mode: 'development',
      devtool: 'inline-source-map',
    }
  }
  if (argv.mode === 'production') {
    return {
      ...config,
      ...prodConfig,
      mode: 'production'
    }
  }
}
