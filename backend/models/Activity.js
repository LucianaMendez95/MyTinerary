const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    Activities: {type: Array, required: true},
    cityId: {type: mongoose.Schema.ObjectId, ref:"itinerario"},
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity