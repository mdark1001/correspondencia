'use strict'

var express = require('express');

var UserController = require('../controllers/users_controllers');
var md_auth0 = require('../middelwares/auth0');
var api = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({
  uploadDir: './upload/user'
});

api.get('/prueba', md_auth0.ensureAuth0, UserController.pruebas);
api.post('/user/create', UserController.saveUser);
api.patch('/user/edit/:id', md_auth0.ensureAuth0, UserController.updateUser);
api.post('/user/uploadimage/:id', [md_auth0.ensureAuth0, md_upload],
  UserController.uploadFile);
api.get('/user/user/:id',md_auth0.ensureAuth0,UserController.getUserByid);
api.post('/user/login', UserController.login);
api.post('/user/users:page?',UserController.getUsers )
api.get('/user/image/:imageFile', UserController.getImageUser);
module.exports = api;
