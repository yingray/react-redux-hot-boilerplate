const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin');

const root = path.resolve(__dirname, '../../')

module.exports = {
  mode: 'development',

  entry: [
    // React HMR.
    'react-hot-loader/patch',
    // HMR for developement environment.
    'webpack/hot/only-dev-server',
    // Enable HMR.
    'webpack-hot-middleware/client',
    // entrypoint of client app.
    './src/client/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(root, './dist'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        // js loader.
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // css loader.
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // file loader for images
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(root, './src/client')
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Hot Boilerplate',
      template: path.resolve(root, './src/server/index.html'),
      favicon: path.resolve(root, './src/server/favicon.ico')
    }),
    // enable HMR.
    new webpack.HotModuleReplacementPlugin(),
    // print module name logs.
    new webpack.NamedModulesPlugin(),
    // not emit errors.
    new webpack.NoEmitOnErrorsPlugin(),
    // generate service-worker.js by workbox.
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      cacheId: 'react-redux-hot-boilerplate',
      clientsClaim: true,
      skipWaiting: true,
    }),
    // tell the client app development mode.
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    })
  ]
}
