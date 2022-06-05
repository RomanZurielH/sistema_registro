// Importando dependencia path
// dependencia del core de Node
const path = require("path");
// Plugins para Webpack
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 1. Especificar el archivo de entrada
  entry: "./client/index.js",
  // 2. Especificar el archivo de salida
  output: {
    // 2.1 Ruta ansoluta de la salida
    path: path.resolve(__dirname, "public"),
    // 2.2 Nombre del archivo de salida
    filename: path.join("javascripts", "bundle.js"),
    // 2.3 path publico
    publicPath: "/",
  },
  // 3. Modulos
  module: {
    rules: [
      // 3.1 Regla para Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // 3.1.1 Primer stage
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "usage",
                    targets: {
                      chrome: "80",
                    },
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
      // 3.2 Reglas para Css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // 4. Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("stylesheets", "styles.css"),
    }),
  ],
};