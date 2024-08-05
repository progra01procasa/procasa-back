const mongoose = require('mongoose');
const activation = require("../models/users.model");

function updateData(req, res) {
    if (!req.body._id) {
        return res.status(400).send({ message: 'ID is required' });
    }

    const id = mongoose.Types.ObjectId(req.body._id);
    const { nacimiento, password } = req.body;

    activation.findById(id, (err, toUpdate) => {
        if (err) {
            return res.status(500).send({ message: 'Error finding record', data: req.body });
        }
        if (!toUpdate) {
            return res.status(404).send({ message: 'Record not found', data: req.body });
        }

        // Convert MongoDB date to yyyy-mm-dd format
        const mongoDate = toUpdate.nacimiento.toISOString().split('T')[0];

        // Compare dates
        if (mongoDate !== nacimiento) {
            return res.status(400).send({ message: 'Nacimiento does not match', data: req.body });
        }

        // Update the password
        toUpdate.password = password;

        toUpdate.save((saveErr, updatedRecord) => {
            if (saveErr) {
                return res.status(500).send({ message: 'Error updating record' });
            }
            // Return success message with updated record
            return res.status(200).send({
                message: 'Password updated successfully',
                updatedRecord: updatedRecord
            });
        });
    });
}

module.exports = {
    updateData
};
