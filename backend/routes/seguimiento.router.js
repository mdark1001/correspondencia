
var express = require('express');

var SeguimientoDocumentoController = require('../controllers/seguimiento_documentos_controllers');
var md_auth0 = require('../middelwares/auth0');
var api = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({
    uploadDir: './upload/seguimiento'
});

api.post('/seguimiento/documentos', md_auth0.ensureAuth0,SeguimientoDocumentoController.crearDocumentoSeguimiento);
// api.patch('/user/edit/:id', md_auth0.ensureAuth0, UserController.updateUser);
// api.post('/user/uploadimage/:id', [md_auth0.ensureAuth0, md_upload],
//     UserController.uploadFile);
api.get('/seguimiento/documentos/:user_id',md_auth0.ensureAuth0,SeguimientoDocumentoController.obtenetDocumentoSeguimiento);
// api.post('/user/login', UserController.login);
// api.post('/user/users:page?',UserController.getUsers )
// api.get('/user/image/:imageFile', UserController.getImageUser);
module.exports = api;
