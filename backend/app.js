'use strict'

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());


//usar rutas
var user_routes = require('./routes/user.routes.js');
var artist_routes = require('./routes/artis.routers.js');
var album_routes = require('./routes/album.routers.js');
var core_catalogos = require('./routes/catalogos.routers');
var seguimiento_router = require('./routes/seguimiento.router');
var seguimiento_estatus_router = require('./routes/seguimiento_documento_estatus.router');
//configurar bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//configurar las cabeceras http



//ruta base
app.use('/api/', user_routes);
app.use('/api/', artist_routes);
app.use('/api/', album_routes);
app.use('/api/', core_catalogos);
app.use('/api/', seguimiento_router);
app.use('/api/', seguimiento_estatus_router);
module.exports = app;
