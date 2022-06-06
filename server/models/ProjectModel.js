import mongoose from 'mongoose';

// 2 Desestructura el modulo
// de Schemas de Mongoose
const { Schema } = mongoose;

// 3 Creamos el Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Generar el Modelo a partir de un Schema
// Compilar el modelo
export default mongoose.model('project', ProjectSchema);
