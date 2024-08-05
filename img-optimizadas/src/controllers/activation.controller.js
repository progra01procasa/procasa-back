const mongoose = require('mongoose'); // Añadir esta línea
const activation = require("../models/users.model");

function updateData(req, res) {
    // Asegúrate de que req.body._id esté presente
    if (!req.body._id) {
        return res.status(400).send({ message: 'ID is required' })
    }

    // Usa mongoose.Types.ObjectId para asegurarte de que el _id es un ObjectId válido
    const id = mongoose.Types.ObjectId(req.body._id)

    activation.findById(id, (err, toUpdate) => {
        if (err) {
            return res.status(500).send({ message: 'Error finding record' })
        }
        if (!toUpdate) {
            return res.status(404).send({ message: 'Record not found' })
        }

        // Envía el documento encontrado como respuesta
        return res.send(toUpdate)
    });
}

module.exports = {
    updateData
};
