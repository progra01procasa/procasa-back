const express = require('express');
const activation = require('../controllers/activation.controller');
const api = express.Router();

api.put('/updatepass', activation.updateData);

module.exports = api;