const SoliVacaciones = require("../models/solicitudBoletaPago.model")


function crearSolicitudBoletaPago(req, res) {
    // let SoliVacacionesModel = new SoliVacaciones();
    // let params = req.body;
    // let user = req.user.sub;

    // // Asignar los valores al modelo
    // SoliVacacionesModel.IdUsuario = params.IdUsuario;
    // SoliVacacionesModel.codigo = params.codigo;
    // // SoliVacacionesModel.nombre = req.user.nombre;
    // // SoliVacacionesModel.Usuario = user;
    // SoliVacacionesModel.fechaInicio = params.fechaInicio;
    // SoliVacacionesModel.fechaFin = params.fechaFin;
    // SoliVacacionesModel.estado = "recibida";
    // SoliVacacionesModel.tipofecha = params.tipofecha;
    // SoliVacacionesModel.save((err, SoliVacacionesGuardado) => {
    //     if (err) {
    //         return res.status(500).send({ message: 'Error en la petición' });
    //     }
    //     if (SoliVacacionesGuardado) {
    //         return res.status(200).send({ data: SoliVacacionesGuardado });
    //     }
    //     return res.status(404).send({ message: 'No se pudo guardar' });
    // });
}




const obtenerBoletaPagoId = (req, res) => {
};





module.exports = {
    crearSolicitudBoletaPago,
    obtenerBoletaPagoId
}

