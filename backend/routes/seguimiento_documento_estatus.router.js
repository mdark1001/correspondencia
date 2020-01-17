'use strict'

var express = require('express');

var SeguimientoEstatusController = require('../controllers/seguimiento_documento_estatus_controllers');
var md_auth0 = require('../middelwares/auth0');
var api = express.Router();

api.post('/seguimiento/estatus/', SeguimientoEstatusController.create);
module.exports = api;
