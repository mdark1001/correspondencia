'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstatusSeguimientoSchema = Schema({
    estatus: String,
    orden: Number,
    color: String
});
module.exports = mongoose.model('seguimiento_estatus', EstatusSeguimientoSchema);
