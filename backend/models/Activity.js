const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    imagenActividad: {type: String},
    descripcion: {type: String, required: true},
    duracion: {type: String, required: true},
    itineraryId: {type: mongoose.Schema.ObjectId, ref:"itinerario"},
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity