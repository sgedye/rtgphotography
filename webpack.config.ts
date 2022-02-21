import * as path from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = false;

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, "../src/index.tsx"),
    ],
  },
  mode: isProd ? "production" : "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
        exclude: /node_modules/i,
      },
      {
        test: /\.(js|ts)x?$/i,
        use: ["babel-loader", "ts-loader"],
        include: [path.resolve(__dirname, "../src")],
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "../src/assets/styles")],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
        include: [path.resolve(__dirname, "../src/assets")],
        generator: {
          filename: "assets/[name].[contenthash].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|tff|otf|svg)$/,
        type: "asset/inline",
        include: [path.resolve(__dirname, "../src/assets")],
      },
    ],
  },
};