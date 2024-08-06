const mongoose = require('mongoose');
const activation = require("../models/users.model");

async function updateData(req, res) {
    const { _id, nacimiento, password, estado } = req.body;

    // Valor por defecto para estado si no se proporciona
    const estadoFinal = estado || 'activo';

    if (!_id) {
        return res.status(400).send({ message: 'ID is required' });
    }

    try {
        const id = mongoose.Types.ObjectId(_id);
        const toUpdate = await activation.findById(id);

        if (!toUpdate) {
            return res.status(404).send({ message: 'Record not found' });
        }

        // Compare dates
        const mongoDate = toUpdate.nacimiento.toISOString().split('T')[0];
        const requestDate = new Date(nacimiento).toISOString().split('T')[0];

        if (mongoDate !== requestDate) {
            return res.status(200).send({ date: null });
        }

        // Update the password and estado
        toUpdate.password = password;
        toUpdate.estado = estadoFinal;

        const updatedRecord = await toUpdate.save();

        // Return success message with updated record
        return res.status(200).send({
            message: 'Password and estado updated successfully',
            status: 200,
            updatedRecord
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error processing request' });
    }
}

module.exports = {
    updateData
};
