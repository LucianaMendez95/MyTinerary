const express = require("express")
const rutas = express.Router()
const ciudadesControlador = require("../controllers/ciudadescontrolador")
const itinerariosControlador = require("../controllers/itinerariosControlador")
const activityControlador = require("../controllers/activityControlador")
const ciudadBuscadaControlador = require("../controllers/CiudadBuscadaControlador")



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


module.exports = rutas