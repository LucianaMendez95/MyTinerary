const Ciudad = require("../models/Ciudad")

const ciudadBuscadaControlador = {
    pedidoCiudad: async (req,res) => {
       const pedidoCiudad = await Ciudad.findOne({_id:req.params.id}).populate("itinerario");
        res.json({
            success:true,
            ciudadBuscada: pedidoCiudad
        })
    }
}

module.exports = ciudadBuscadaControlador