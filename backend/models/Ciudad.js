const mongoose = require("mongoose")

const invitadoSchema= new mongoose.Schema({
    ciudad: {type: String, required: true},
    pais: {type: String, required: true, default: "Australia"},
    fotoCiudad: {type: String, required: true}
})

const Ciudad = mongoose.model("ciudad", invitadoSchema)

module.exports = Ciudad