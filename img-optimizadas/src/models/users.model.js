const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UsuarioSchema = Schema({
  _id: Schema.Types.ObjectId,
  nombre: String,
  email: String,
  password: String,
  rol: String,
  estado: String,
  nacimiento: Date
});

module.exports = mongoose.model("usuarios", UsuarioSchema);
