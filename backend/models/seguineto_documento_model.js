'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var SeguimientoDocumentoSchema = Schema({
    nombre: String,
    estatus_id: {
        type: Schema.ObjectId,
        ref: 'Seguimiento_estatus'
    },
    propietario_id: {
        type: Schema.ObjectId,
        ref: 'Ugsers'
    },
    tipo_documento_id: {
        type: Schema.ObjectId,
        ref: 'TipoDocumentos'
    },
    description: String,
    fecha_creacion: {
        type: Date,
        default: Date.now
    },

});
SeguimientoDocumentoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('seguimiento_documento', SeguimientoDocumentoSchema);
