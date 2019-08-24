"use strict"
module.exports = {
    USUARIOS: {},
    agregarUsuarioStack: function (query) {
        return {
            usuarioId: query.usuarioId,
            name: query.display_name,
            socket: null
        }
    }
};