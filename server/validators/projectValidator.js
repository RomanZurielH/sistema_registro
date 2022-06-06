// 1 Importaremos la biblioteca de validación
import * as Yup from 'yup';

// 2 Crear el esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre para el proyecto'),
  description: Yup.string()
    .max(500, 'La descripción esta limitada a 500 caracteres')
    .required('Se requiere una descripción para el proyecto'),
});

// 3 Creamos el middleware de validacion
const getProject = (req) => {
  // Extraemos la info del formualrio
  const { name, description } = req.body;
  // Armar un objeto con los datos del proyecto
  return {
    name,
    description,
  };
};

export { projectSchema, getProject };
