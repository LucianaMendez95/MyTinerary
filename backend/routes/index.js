const express = require("express")
const rutas = express.Router()
const ciudadesControlador = require("../controllers/ciudadescontrolador")

rutas.route('/ciudades')
    .get(ciudadesControlador.listaCiudades)
    .post(ciudadesControlador.nuevaCiudad)

module.exports = rutas