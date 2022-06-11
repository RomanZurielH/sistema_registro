// 1 Importando el ODM
import mongoose from 'mongoose';
// 2 Importando el logger
import winston from './winston';

class MongooseODM {
  // Metodo especial constructor
  constructor(url) {
    // Crear la propiedad
    this.url = url;
  }

  // Methods
  async connect() {
    try {
      // Agregar el sistema de promesas de ES6
      mongoose.Promise = global.Promise;
      // Registramos el intento de conexión a la base de datos
      winston.info(`☢ Conectando a la base de datos: ${this.url}`);
      // Intento de conexión
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      // La conexión falló
      winston.error(
        `🥀 No se pudo realizar la conexión debido a: ${error.message}`
      );
      return false;
    }
  }
}
export default MongooseODM;
