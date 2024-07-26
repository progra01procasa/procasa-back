const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SoliVacaciones = Schema({
    codigo: String,
    IdUsuario: { type: Schema.Types.ObjectId, ref: 'Usuarios'},
    diasDisponibles: Number,
    estado: String,
    fechaInicio: Date,
    fechaFin: Date,
    email: String,
    tipofecha: String,
    respuesta: String,
})

module.exports = mongoose.model("solivacaciones", SoliVacaciones)
