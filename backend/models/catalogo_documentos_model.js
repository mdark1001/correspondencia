'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var TipoDocumentosSchema = Schema({
    nombre: String,
    active: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now}
});
TipoDocumentosSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('TipoDocumentos', TipoDocumentosSchema);
