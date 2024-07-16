
function obtenerSolicitudes(req, res) {
    Valores.find({}, 'titulo codigo fecha estado', (err, solicitudesEncontradas) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la petición', error: err });
        }
        if (!solicitudesEncontradas) {
            return res.status(404).json({ message: 'No se encontraron solicitudes' });
        }
        res.status(200).json({ solicitudes: solicitudesEncontradas });
    });
}

module.exports = {
    obtenerSolicitudes
};
