const express = require('express')
const SoliController = require('../controllers/')
const md_auteticacion = require('../middlewares/autenticacion');
const solicitudBoletaPagoModel = require('../models/solicitudBoletaPago.model');
const { crearSolicitudBoletaPago, obtenerBoletaPagoId } = require('../controllers/soliBoletaPago.controller');
const api = express.Router();


api.post('/crearBoletaPago', md_auteticacion.Auth, crearSolicitudBoletaPago)
api.get('/soliBoletaPago/:IdUsuario', md_auteticacion.Auth, obtenerBoletaPagoId)

module.exports = api