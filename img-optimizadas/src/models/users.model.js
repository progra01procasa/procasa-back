const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  nombre: String,
  email: String,
  password: String,
  rol: String,
  estado: String,
  nacimiento: Date
}, {
  timestamps: true // Agrega campos de `createdAt` y `updatedAt` automáticamente
})

module.exports = mongoose.model("usuarios", UsuarioSchema)