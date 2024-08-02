const activation = require("../models/users.model")


function updateData(req, res) {

activation.findById(req.body._id, (err, toUpdate) => {

    if (!toUpdate) {
        return res.status(404).send({ message: 'Usuario no encontrado' })
    }

    // Compara la fecha del documento con la fecha recibida en el req
    if (toUpdate.FECHA === req.body.FECHA) {
        // Si las fechas coinciden, actualiza la contraseña
        activation.findByIdAndUpdate(iduser, {
            password: req.body.password
        }, { new: true }, (err, updatedDocument) => {
            if (err) {
                return res.status(500).send({ message: 'Error al actualizar la contraseña' });
            }
            if (updatedDocument) {
                return res.status(200).send({ 
                    message: 'Contraseña actualizada con éxito', 
                    fechaCoincide: true 
                })
            }
        })
    } else {
        return res.status(400).send({ message: 'La fecha proporcionada no coincide con la fecha en la base de datos', fechaCoincide: false });
    }
})

}

module.exports = {
    updateData
}