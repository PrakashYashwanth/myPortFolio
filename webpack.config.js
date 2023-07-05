// Webpack Configuration File
const path = require('path') // To get the path variable
const HtmlWebpackPlugin = require('html-webpack-plugin') // To create an environment to display our app on the webpage

const { PORT, BUILD_PATH } = require('./constants')

const webpackConfig = {
  mode: 'development', // Working in development mode

  entry: './src/index.jsx', // Entry point for our App

  output: {
    path: path.resolve(__dirname, BUILD_PATH), // Path for our build folder
    filename: '[name]-[contenthash:8].js', // Generates a hashed filename ex:- main-.js
    library: {
      name: 'Portfolio', // Reference name for our project
      type: 'umd' // Type of library
    }
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // Including node modules will cause the files in them to be bundled as well, which is redundant
        use: {
          loader: 'babel-loader' // The default loader to load all js and jsx files
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })], // Adding html plugin for the app

  devServer: {
    open: true, // Opens the localhost window in the terminal once webpack is served
    port: PORT // Defining which port to use
  },

  devtool: 'inline-source-map' // Generates source maps for our app, which makes debugging easy. Not advised for production code as it may affect the load time
}

module.exports = webpackConfig
