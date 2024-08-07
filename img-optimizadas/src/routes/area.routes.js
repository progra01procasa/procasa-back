const express = require('express');
const area = require('../controllers/area.controller')
const api = express.Router()

api.get('/getAreas', area.getAreas)
api.post('/getAreaId', area.getAreasId)

module.exports = api;