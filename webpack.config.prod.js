const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var babelOptions = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

module.exports = {
  mode: "production",
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  entry: {
    index: path.join(__dirname, "src/index.tsx"),
    vendor: ["babel-polyfill", "react", "react-dom"],
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
