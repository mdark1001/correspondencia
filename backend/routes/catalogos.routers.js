var express = require('express');
var EstadosController = require('../controllers/core_catalogos_controllers');
var TipoDocumentos = require('../controllers/catalogo_documentos_controllers');
var md_auth0 = require('../middelwares/auth0');
var api = express.Router();

api.get('/catalogo/estados', EstadosController.getAllCoreEstados);
api.get('/catalogo/tipodocumento/', TipoDocumentos.getTiposDocumento);
api.post('/catalogo/tipodocumento', md_auth0.ensureAuth0,TipoDocumentos.crearTiposDocumento);
module.exports = api;