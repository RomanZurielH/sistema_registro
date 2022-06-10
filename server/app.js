/* eslint-disable no-console */

// Preámbulo
// Ayuda a manejar errores http
import createError from 'http-errors';
// Ayuda a crear servidores web
import express from 'express';
// Núcleo de node, ayuda al manejo de las rutas
import path from 'path';
// Ayuda al manejo de las cookies
import cookieParser from 'cookie-parser';
// Maneja el log de peticiones http
import morgan from 'morgan';

// Las rutas
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
// Importando configurador de plantillas
import templateEngineConfigurator from './config/templateEngine';
// Importando enrutador principal
import router from './routes/router';

// importando nuestro logger
import winston from './config/winston';

// Importando módulos de webpack
// Núcleo de webpack
// Permite incrustar webpack en express
// Permite la actualización dinámica de la página
// Configuración
import webpackConfig from '../webpack.dev.config';

// Importando las variables de configuración
import configKeys from './config/configKeys';
// Importando clase conectora a la base de datos
import MongooseODM from './config/odm';

// Aquí se crea la instancia de express
// (req, res, next, err) => {... }
const app = express();

// Recuperar el modo de ejecución
const nodeEnv = process.env.NODE_ENV || 'development';

// Decidiendo si embebemos el webpack middleware
if (nodeEnv === 'development') {
  // Embebiendo webpack a mi aplicación
  console.log(`✍ Ejecutando en modo desarrollo 🤔`);

  // Conexión a la base de datos
  // Creando una instancia a la conexion de la DB
  const mongooseODM = new MongooseODM(configKeys.databaseUrl);
  // Crear una IIFE para crear un ambito asincrono
  // que me permita usar async await
  (async () => {
    // Ejecutamos el método de conexión
    const connectionResult = await mongooseODM.connect();
    // Checamos si hay errores
    if (connectionResult) {
      // Si conectó correctamente a la base de datos
      winston.info('✅ Conexion a la BD exitosa 🤘');
    } else {
      winston.error('😱 No se conectó a la base de datos');
    }
  })();

  // Estableciendo el modo de webpack en desarrollo
  // en el configurador
  webpackConfig.mode = 'development';

  // Congigurando la ruta del HMR (Hot Module Replacemnet)
  // reload=true : Habilita la recarga automática cuando un archivo Js cambia
  // timeout=1000 : Tiempo de refresco de la página
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregando el plugin a la configuración de desarrollo
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // Creando el empaqetador a partir de un objeto de configuración
  const bundler = webpack(webpackConfig);

  // Habilitando el Middleware de webpack en express
  app.use(
    WebpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );

  // Habilitando el Middleware del Webpack HMR
  app.use(WebpackHotMiddleware(bundler));
} else {
  console.log(`✍ Ejecutando en modo producción 🐱‍👤`);
}
// Configuración del motor de plantillas ( template Engine)
// view engine setup
templateEngineConfigurator(app);

// Todos los middlerwares globales
// van primero que cualquier otro middleware de la app
app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Middleware de archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Registrando las rutas en la App
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // Registrando el error 404 en el log
  winston.error(
    `404 - Not Found: ${req.method} ${req.originalUrl}: IP ${req.ip}`
  );
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Registramos el error en winston
  winston.error(
    `${err.status || 500}: ${err.message} : ${req.method}
   ${req.originalUrl}: IP ${req.ip}`
  );

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Exportando instancia de app
// usando Js moderno
export default app;
