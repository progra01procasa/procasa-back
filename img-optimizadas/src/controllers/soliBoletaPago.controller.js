const SoliBoleta = require("../models/solicitudBoletaPago.model")


function crearSolicitudBoletaPago(req, res) {
    let SoliBoletaModel = new SoliBoleta();
    let params = req.body;
    let user = req.user.sub;
    
    // SoliBoletaModel.nombre = req.user.nombre;
    // SoliBoletaModel.Usuario = user;
    SoliBoletaModel.IdUsuario = params.IdUsuario;
    SoliBoletaModel.codigo = params.codigo;
    SoliBoletaModel.estado = params.estado;
    SoliBoletaModel.email = params.email;
    SoliBoletaModel.tipoBoleta = params.tipoBoleta;
    SoliBoletaModel.mes = params.mes;
    SoliBoletaModel.respuesta = params.respuesta;

    SoliBoletaModel.save((err, SoliBoletaGuardado) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        }
        if (SoliBoletaGuardado) {
            return res.status(200).send({ data: SoliBoletaGuardado });
        }
        return res.status(404).send({ message: 'No se pudo guardar' });
    })
}




const obtenerBoletaPagoId = (req, res) => {
    let idUser = req.user.sub;
    SoliBoleta.find({ IdUsuario: idUser }, (err, soliBoleta) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' })
        }
        if (!soliBoleta || soliBoleta.length === 0) {
            return res.status(404).send({ message: 'No se encontraron solicitudes de vacaciones para el usuario con id' });
        }
        return res.status(200).send({ data: soliBoleta })
    })
}


module.exports = {
    crearSolicitudBoletaPago,
    obtenerBoletaPagoId
}

