const SoliVacaciones = require("../models/SoliVacaciones")


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


function obtenerSoliVacacionesxIdentidad(req, res) {
    let idUser = req.user.sub

    SoliVacaciones.find({ IdUsuario: idUser }, (err, soliVacacionesFinded) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        } else if (soliVacacionesFinded) {
            return res.status(200).send({ data: soliVacacionesFinded });
        } else {
            return res.status(404).send({ message: 'No se encontraron solicitudes de vacaciones para este usuario' });
        }
    });
}



module.exports = { 
    crearSoliVacaciones,
    obtenerSoliVacacionesxIdentidad
}

