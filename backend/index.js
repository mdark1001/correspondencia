'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
const UseriosSocket = require('./controllers/usuarios_socket.js');

var port = process.env.PORT || 3977;
const MongoURL = 'mongodb://172.17.0.2:27017/correspondencia';

var http = require('http').createServer(app);
var io = require('socket.io')(http);

try {
    mongoose.connect(MongoURL, {useNewUrlParser: true});
    io.on('connection', function (socket) {
        socket.on('register', function (data) {
            console.log(data);
            let alumno = UseriosSocket.agregarUsuarioStack(data);
            alumno.socket = socket;
            /*if (!AlumnoManager.ALUMNOS_PLANES[alumno.planId]) {
                AlumnoManager.ALUMNOS_PLANES[alumno.planId] = [alumno];
                //console.log(AlumnoManager);
            } else {
                AlumnoManager.ALUMNOS_PLANES[alumno.planId].push(alumno);
            }*/
        });
        console.log('a user connected');
        socket.on('message', function (msg) {
            console.log('message: ' + msg);
            socket.broadcast.emit('sent_all', {message: msg})
        });
    });
    http.listen(3000, () => {
        console.log("Listening at :3000...");
    });
    app.listen(port, function () {
        console.log("Server api run http://localhost:" + port);
    });
} catch (error) {
    console.log(error);
}