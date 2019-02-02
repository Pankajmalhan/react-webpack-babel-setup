var path = require("path");
var srcPath = path.resolve(__dirname, "src");
var distPath = path.resolve(__dirname, "dist");

var config = {
  entry: [path.resolve(srcPath, "app.js")],
  output: {
    path: distPath,
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    port: 4500
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
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
      }
    ]
  }
};

module.exports = config;
