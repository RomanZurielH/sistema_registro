// Importando dependencia path
// dependencia del core de Node
const path = require("path");

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
  // 3. Configurando el servidor de desarrollo
  devServer: {
    // 3.1 Folder de archivos estaticos
    static: path.join(__dirname, "public"),
    // 3.2 Puerto del servidor de desarrollo
    // de WP (Webpack)
    port: 8081,
    // 3.3 Definiendo host
    host: "localhost",
  },
  // 4.0 Modulos
  module: {
    rules: [
      // 4.1 Regla para Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // 4.1.1 Primer stage
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "usage",
                    targets: "> 0.25%, not dead",
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};