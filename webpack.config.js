const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");

const config = {
  entry: [path.resolve(srcPath, "app.js")],
  output: {
    path: distPath,
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    inline: true,
    port: 4500,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/assets/images/",
        to: "src/assets/images/",
      },
    ]),
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: "babel-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: "eslint-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        exclude: /node_modules/,
        include: /client/,
        loader: ["url-loader?limit=100000"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
};

module.exports = config;
