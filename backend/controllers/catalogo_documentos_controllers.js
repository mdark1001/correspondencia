'use strict'
var TipoDocumentoModel = require('../models/catalogo_documentos_model');

const CatalogoTipoDocumentos = function () {
    return {
        getTiposDocumento: function (req, res) {
            let page = req.query.page || 1;
            let total_items = 10;
            var options = {page: page, limit: total_items};
            let query = {};
            TipoDocumentoModel.paginate(query, options).then(function (result) {

                if (!result) {
                    return res.status(404).send({
                        message: 'No existen documentos'
                    });
                } else {
                    return res.status(200).send({
                        message: 'Todo bien',
                        data: result
                    });
                }
            }).catch(err => {
                if (err)
                    return res.status(500).send({
                        message: 'Ocurrio un error al procesar su solicitud'
                    });
            })
        },
        crearTiposDocumento: function(req, res){
            var documnto_params = req.body;

            var tipoDocumento = new TipoDocumentoModel();
            tipoDocumento.nombre = documnto_params.nombre;
            tipoDocumento.active = documnto_params.active;
            tipoDocumento.save((err, tipoDocumentoData) => {
                if (err) return res.status(500).send({
                    message: 'Error no se ha guardado el tipo de documento'
                })
                if (tipoDocumentoData)
                    return res.status(200).send({
                        message: 'Se guardo con exito el tipo de documento',
                        documento: tipoDocumentoData
                    });
                else
                    return res.status(401).send({
                        message: 'Error no se ha guardado el tipo de documento'
                    })

            });

        }
    }

}();

module.exports = CatalogoTipoDocumentos;