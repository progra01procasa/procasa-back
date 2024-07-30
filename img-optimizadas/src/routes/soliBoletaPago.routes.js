const express = require('express')
const SolicitudBoletaPago = require('../controllers/soliBoletaPago.controller');
const md_auteticacion = require('../middlewares/autenticacion');
const api = express.Router()


api.post('/ingresarBoletaPago', md_auteticacion.Auth, SolicitudBoletaPago.crearSolicitudBoletaPago)
api.get('/obtenerBoletaPago/:IdUsuario', md_auteticacion.Auth, SolicitudBoletaPago.obtenerBoletaPagoId)

module.exports = api