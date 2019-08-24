'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var UserSchema = Schema({
    nombre: String,
    apellidop: String,
    apellidom: String,
    active: Boolean,
    email: String,
    password: String,
    role: String,
    image: String,
});
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);
