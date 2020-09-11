const express = require("express")
const rutas = express.Router()
const ciudadesControlador = require("../controllers/ciudadescontrolador")
const itinerariosControlador = require("../controllers/itinerariosControlador")
const activityControlador = require("../controllers/activityControlador")
const ciudadBuscadaControlador = require("../controllers/CiudadBuscadaControlador")
const usuarioControlador = require("../controllers/usuarioControlador")
const passport = require("../config/passport")
const validator = require("../config/validator")


rutas.route('/ciudades')
    .get(ciudadesControlador.listaCiudades)
    .post(ciudadesControlador.nuevaCiudad)

rutas.route('/ciudad/:id')
    .get(ciudadBuscadaControlador.pedidoCiudad)

rutas.route('/itinerarios/:id')
    .get(itinerariosControlador.listaItinerarios)
    .put(itinerariosControlador.nuevoComentario)

rutas.route('/modificarcomentario/:id')
    .put(itinerariosControlador.modificarcomentario)

rutas.route('/eliminarcomentario/:id')
    .put(itinerariosControlador.eliminarcomentario)

rutas.route('/sumarlike/:id')
    .put(itinerariosControlador.sumarlike)

rutas.route('/restarlike/:id')
    .put(itinerariosControlador.restarlike)

rutas.route('/itinerarios')
    .post(itinerariosControlador.nuevoItinerario)

rutas.route('/activities')
    .post(activityControlador.nuevoActivity)

rutas.route('/activities/:id')
    .get(activityControlador.listaActivities)

rutas.route('/register')
    .post(validator.validarDatos, usuarioControlador.nuevoUsuario)

rutas.route('/logIn')
    .post(usuarioControlador.loguearUsuario)

rutas.route('/verificarToken')
    .get(passport.authenticate('jwt', {session:false}), usuarioControlador.verificarToken)


module.exports = rutas