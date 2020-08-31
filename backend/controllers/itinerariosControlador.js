const itinerario = require("../models/itinerario")

const itinerariosControlador ={
    listaItinerarios: async (req,res) => {
       const lista = await itinerario.find({cityId: req.params.id})
        res.json({
            success:true,
            itinerarios: lista
        })
    },

  

    nuevoItinerario: (req,res) => {
        const{hashtag, title, profilePic, rating, duration, price, cityId, comentarios} = req.body

        const nuevoItinerario = new itinerario({
            hashtag,
            title,
            profilePic,
            rating,
            duration,
            price,
            cityId,
            comentarios
        })

        nuevoItinerario.save()
        .then(user =>{
            res.json({success: true, user: user})
        })
        .catch(error => {
            res.json({success: false, error: error})
        })
       
    }
}

module.exports = itinerariosControlador