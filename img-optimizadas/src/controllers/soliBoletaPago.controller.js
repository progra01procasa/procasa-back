const SoliBoleta = require("../models/solicitudBoletaPago.model");

function crearSolicitudBoletaPago(req, res) {
    let SoliBoletaModel = new SoliBoleta();
    let params = req.body;

    SoliBoletaModel.IdUsuario = params.IdUsuario;
    SoliBoletaModel.codigo = params.codigo;
    SoliBoletaModel.estado = params.estado;
    SoliBoletaModel.email = params.email;
    SoliBoletaModel.tipoBoleta = params.tipoBoleta;
    SoliBoletaModel.mes = params.mes;
    SoliBoletaModel.respuesta = '';

    SoliBoletaModel.save((err, SoliBoletaGuardado) => {
        if (err) {
            return res.status(500).send({ message: 'Error al guardar la solicitud de boleta de pago', error: err });
        }
        if (SoliBoletaGuardado) {
            return res.status(201).send({ data: SoliBoletaGuardado });
        }
        return res.status(400).send({ message: 'No se pudo guardar la solicitud de boleta de pago' });
    });
}

const obtenerBoletaPagoId = async (req, res) => {
    let idUser = req.user.sub;
    try {
        const soliBoleta = await SoliBoleta.find({ IdUsuario: idUser });

        if (soliBoleta.length === 0) {
            return res.status(404).send({ message: `No se encontraron solicitudes de boleta de pago para el usuario con id ${idUser}` });
        }

        return res.status(200).send({ data: soliBoleta });
    } catch (err) {
        return res.status(500).send({ message: 'Error al obtener las solicitudes de boleta de pago', error: err });
    }
};

module.exports = {
    crearSolicitudBoletaPago,
    obtenerBoletaPagoId
};
