const Area = require("../models/area.model");
const jwt = require("../services/jwt");
const axios = require('axios');  // Añadido para el uso en login2

const getAreasId = (req, res) => {
    return res.send({ data: req.body })
}





const getAreas = (req, res) => {
    Area.find({}, (err, areasGet) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' })
        }
        if (!areasGet || areasGet.length === 0) {
            return res.status(404).send({ message: 'No se encontraron solicitudes de vacaciones para el usuario con id' });
        }
        return res.status(200).send({ areas: areasGet });
    })
}




module.exports = {
    getAreas,
    getAreasId
}
