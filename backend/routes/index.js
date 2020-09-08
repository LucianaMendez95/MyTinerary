const express = require("express")
const rutas = express.Router()
const ciudadesControlador = require("../controllers/ciudadescontrolador")
const itinerariosControlador = require("../controllers/itinerariosControlador")
const activityControlador = require("../controllers/activityControlador")
const ciudadBuscadaControlador = require("../controllers/CiudadBuscadaControlador")
const usuarioControlador = require("../controllers/usuarioControlador")



rutas.route('/ciudades')
    .get(ciudadesControlador.listaCiudades)
    .post(ciudadesControlador.nuevaCiudad)

rutas.route('/ciudad/:id')
    .get(ciudadBuscadaControlador.pedidoCiudad)

rutas.route('/itinerarios/:id')
    .get(itinerariosControlador.listaItinerarios)

rutas.route('/itinerarios')
    .post(itinerariosControlador.nuevoItinerario)

rutas.route('/activities')
    .post(activityControlador.nuevoActivity)

rutas.route('/activities/:id')
    .get(activityControlador.listaActivities)

rutas.route('/register')
    .post(usuarioControlador.validarDatos, usuarioControlador.nuevoUsuario)

rutas.route('/logIn')
    .post(usuarioControlador.loguearUsuario)




module.exports = rutas