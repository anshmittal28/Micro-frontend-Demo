const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;
require("dotenv").config({ path: "./.env" });

const buildDate = new Date().toLocaleString();

module.exports = (env, argv) => {
  return {
    entry: "./src/index.ts",
    mode: process.env.NODE_ENV || "development",
    devServer: {
      port: 3000,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: {
        rewrites: [
          { from: /^\/app1/, to: '/index.html' },
          { from: /^\/app2/, to: '/index.html' },
          { from: /./, to: '/index.html' }
        ]
      },
      hot: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [
              "react-hot-loader/babel",
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              [
                "@babel/plugin-proposal-private-property-in-object",
                { loose: true },
              ],
              ["@babel/plugin-proposal-private-methods", { loose: true }],
            ],
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntry.js",
          app2: "app2@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-router-dom"],
          },
          "react-redux": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-redux"],
          },
          "@reduxjs/toolkit": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@reduxjs/toolkit"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };
};