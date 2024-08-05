require('dotenv').config()

const mongoose = require("mongoose");
const app = require("./app");
const usuarioController = require("./src/controllers/users.controller");
const lineaController = require("./src/controllers/lineaTiempo.controller");
const noticiasController = require("./src/controllers/noticias.controller");
const mainPage = require("./src/controllers/mainPage.controller");
const historiaController = require('./src/controllers/historia.controller');
const equipoController = require('./src/controllers/unete.controller');
const estados = require('./src/controllers/estados.controller');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

const dbName = process.env.DATABASE_NAME;
const mongoUri = `mongodb+srv://anderson:anderson@cluster0.wh2v3jf.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Se ha conectado correctamente a la base de datos ${dbName}.`);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, function () {
      console.log('El servidor está levantado en el puerto ' + PORT);
    });
  })
  .catch((error) => console.log('Error al conectar a la base de datos:', error));
