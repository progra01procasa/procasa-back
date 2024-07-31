const SoliVacaciones = require("../models/SoliVacaciones.model");

// Función para crear una nueva solicitud de vacaciones
function crearSoliVacaciones(req, res) {
    const SoliVacacionesModel = new SoliVacaciones();
    const params = req.body;

    SoliVacacionesModel.IdUsuario = params.IdUsuario;
    SoliVacacionesModel.codigo = params.codigo;
    SoliVacacionesModel.fechaInicio = params.fechaInicio;
    SoliVacacionesModel.diasDisponibles = 0;
    SoliVacacionesModel.fechaFin = params.fechaFin;
    SoliVacacionesModel.estado = "recibida";
    SoliVacacionesModel.tipofecha = params.tipofecha;
    SoliVacacionesModel.email = params.email;
    SoliVacacionesModel.respuesta = "";

    SoliVacacionesModel.save((err, SoliVacacionesGuardado) => {
        if (err) {
            console.error('Error al guardar la solicitud de vacaciones:', err);
            return res.status(500).send({
                message: 'Error en la petición al guardar la solicitud de vacaciones',
                error: err
            });
        }
        if (SoliVacacionesGuardado) {
            return res.status(201).send({
                data: SoliVacacionesGuardado
            });
        }
        return res.status(400).send({
            message: 'No se pudo guardar la solicitud de vacaciones'
        });
    });
}

// Función para obtener las solicitudes de vacaciones por ID de usuario
const obtenerSoliVacacionesxIdentidad = async (req, res) => {
    try {
        const idUser = req.user.sub;
        const soliVacaciones = await SoliVacaciones.find({ IdUsuario: idUser }).exec();

        if (!soliVacaciones || soliVacaciones.length === 0) {
            return res.status(404).send({
                message: `No se encontraron solicitudes de vacaciones para el usuario con id ${idUser}`
            });
        }

        return res.status(200).send({
            data: soliVacaciones
        });
    } catch (err) {
        console.error('Error al obtener las solicitudes de vacaciones:', err);
        return res.status(500).send({
            message: 'Error en la petición al obtener las solicitudes de vacaciones',
            error: err
        });
    }
};

module.exports = {
    crearSoliVacaciones,
    obtenerSoliVacacionesxIdentidad
};
