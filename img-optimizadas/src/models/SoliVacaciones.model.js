const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SoliVacaciones = Schema({
    codigo: String,
    IdUsuario: { type: Schema.Types.ObjectId, ref: 'Usuarios'},
    idDepatamento: { type: Schema.Types.ObjectId, ref: 'Usuarios'},
    puesto: String,
    dpi: String,
    diasDisponibles: Number,
    estado: String,
    fechaInicio: Date,
    fechaFin: Date,
    email: String,
    tipofecha: String,
    respuesta: Schema.Types.Mixed
})

module.exports = mongoose.model("solivacaciones", SoliVacaciones)
