// database.js
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

// Conexión a la base de datos del servidor 1
const db1 = mongoose.createConnection('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db1.on('connected', () => {
  console.log('Conectado a la base de datos del servidor 1');
});

db1.on('error', (error) => {
  console.error('Error al conectar a la base de datos del servidor 1:', error);
});

// Conexión a la base de datos del servidor 2
const db2 = mongoose.createConnection('mongodb://localhost/procasa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db2.on('connected', () => {
  console.log('Conectado a la base de datos del servidor 2');
});

db2.on('error', (error) => {
  console.error('Error al conectar a la base de datos del servidor 2:', error);
});

// Verificar si los modelos ya están definidos antes de registrarlos
const ColaServidor1 = db1.models.Cola || require('./src/models/cola.model')(db1);
const PeticionClasificada = db2.models.PeticionClasificada || require('./src/models/peticiones.model')(db2);
const PeticionPendiente = db2.models.PeticionPendiente || require('./src/models/peticiionesPendientes.model')(db2);
const Respuesta = db2.models.Respuesta || require('./src/models/respuesta.model')(db2); // Nuevo modelo de respuesta

console.log('Modelos importados correctamente');

module.exports = { db1, db2, ColaServidor1, PeticionClasificada, PeticionPendiente, Respuesta };
