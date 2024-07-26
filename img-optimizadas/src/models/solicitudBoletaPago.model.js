const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SoliBoletaPago = Schema({
    codigo: String,
    IdUsuario: { type: Schema.Types.ObjectId, ref: 'Usuarios'},
    estado: String,
    email: String,
    tipoBoleta: String,
    mes: String,
    respuesta: String,
})

module.exports = mongoose.model("soliboleta", SoliBoletaPago)
