const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  rol: String,
  estado: String,
  nacimiento: Date,
  areaCargo: {
    type: Schema.Types.ObjectId,
    ref: 'areas',
    default: null
  },
  rango: String
}, {
  timestamps: true
})

module.exports = mongoose.model("usuarios", UsuarioSchema);
