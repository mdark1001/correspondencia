var EstatusSeguimiento = require('../models/seguimiento_estatus_model');


var estatusSeguimientoDocumento = function () {
    return {
        create: function (req, res) {
            var estatus = Object.assign(new EstatusSeguimiento(), req.body)
            estatus.save(function (error, data) {
                if (error) {
                    res.status(500).send({
                        message: "Error al procesar su solicitud"
                    })
                }
                res.status(200).send({
                    message: "Se creó correctamente",
                    data: data
                })
            })
        }
    }
}();
module.exports = estatusSeguimientoDocumento