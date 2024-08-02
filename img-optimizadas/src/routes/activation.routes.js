const express = require('express')
const activation = require('../controllers/activation.controller')
// const md_auteticacion = require('../middlewares/autenticacion')
const api = express.Router()

api.put('/activation',activation.updateData)

module.exports = api