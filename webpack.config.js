// Webpack Configuration File
const path = require("path"); // To get the path variable
const HtmlWebpackPlugin = require("html-webpack-plugin"); // To create an environment to display our app on the webpage

const { PORT, BUILD_PATH } = require("./constants");

const webpackConfig = {
  mode: "development", // Working in development mode

  entry: "./src/index.js", // Entry point for our App

  output: {
    path: path.resolve(__dirname, BUILD_PATH), // Path for our build folder
    filename: "[name]-[contenthash:8].js", // Generates a hashed filename ex:- main-.js
    library: {
      name: "Portfolio", // Reference name for our project
      type: "umd", // Type of library
    },
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })], // Adding html plugin for the app

  devServer: {
    open: true,
    port: PORT,
  },

  devtool: "inline-source-map",
};

module.exports = webpackConfig;
