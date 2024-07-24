const SoliVacaciones = require("../models/SoliVacaciones.model")


function crearSoliVacaciones(req,res){
    let SoliVacacionesModel = new SoliVacaciones();
    let params = req.body;
    let user = req.user.sub;
    SoliVacacionesModel.nombre = req.user.nombre;
    SoliVacacionesModel.departamento = req.user.departamento;
    SoliVacacionesModel.Usuario = user;
    SoliVacacionesModel.fechaInicio = params.fechaInicio;
    SoliVacacionesModel.fechaFin = params.fechaFin;
    SoliVacacionesModel.save((err,SoliVacacionesGuardado)=>{
        if(err){
            return res.status(500).send({message:'error en la peticion'})
        }else if(SoliVacacionesGuardado){
            return res.status(200).send({data:SoliVacacionesGuardado})
        }else{
            return res.status(404).send({message:'no se pudo guardar'})
        }
    })
}

const obtenerSoliVacacionesxIdentidad = (req, res) => {
    let idUser = req.user.sub;
    SoliVacaciones.find({ IdUsuario: idUser }, (err, soliVacaciones) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' })
        }
        if (!soliVacaciones || soliVacaciones.length === 0) {
            return res.status(404).send({ message: 'No se encontraron solicitudes de vacaciones para el usuario con id' });
        }
        return res.status(200).send({ data: soliVacaciones });
    });
};





module.exports = { 
    crearSoliVacaciones,
    obtenerSoliVacacionesxIdentidad
}

