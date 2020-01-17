'use strict'
var SeguimientoDocumentosModel = require('../models/seguineto_documento_model');
var EstatusSeguimiento = require('../models/seguimiento_estatus_model');

const SeguimientoDocumentoControllers = function () {
    return {


        crearDocumentoSeguimiento: async function (req, res) {
            var documento = new SeguimientoDocumentosModel();
            //console.log(req.body);
            documento = Object.assign(new SeguimientoDocumentosModel(), req.body);
            //console.log(documento);

            if (!documento.estatus_id) {
                documento.estatus_id = null
                try {
                    var estatus = await EstatusSeguimiento.find().sort('_id').limit(1).find()
                    console.log(estatus);
                    documento.estatus_id = estatus[0]._id
                } catch (e) {
                    console.log(e);
                }
            }
            documento.save((error, data) => {
                if (error) {
                    res.status(500).send({
                        message: 'Error no se ha guardado el documento'
                    })
                }
                res.status(200).send({
                    message: "Se creó correctamente el documento",
                    data: data
                })
            })
        },
        obtenetDocumentoSeguimiento: function (req, res) {
            let user_id = req.params.user_id || 0;
            if (!user_id) {
                return res.status(500).send({
                    message: 'Error al pracesar su solicitud'
                })
            }
            SeguimientoDocumentosModel.find({
                propietario_id: user_id,
            }).populate({
                path: 'users',
                select: 'email'
            }).exec((err, data) => {
                if (err) {
                    return res.status(500).send({
                        message: 'Error al pracesar su solicitud'
                    })
                }
                console.log(data);
                return res.status(200).send({
                    message: 'Todo bien',
                    data: data
                })
            })


        }
    }
}();
module.exports = SeguimientoDocumentoControllers

