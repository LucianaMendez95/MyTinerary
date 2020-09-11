const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    foto: {type: String, required: true},
    pais: {type: String, required: true, default: "Argentina"},
    likeados: {type: Array, default: []},
    deslikeados: {type: Array, default: []},

})

const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = Usuario