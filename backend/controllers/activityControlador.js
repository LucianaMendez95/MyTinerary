const Activity = require("../models/Activity")

const ActivitiesControlador ={
    listaActivities: async (req,res) => {
       const lista = await Activity.find({itineraryId: req.params.id})
        res.json({
            success:true,
            Activities: lista
        })
    },

    nuevoActivity: (req,res) => {
        const{titulo, imagenActividad, descripcion, itineraryId} = req.body

        const nuevoActivity = new Activity({
            titulo,
            imagenActividad,
            descripcion,
            itineraryId
        })

        nuevoActivity.save()
        .then(user =>{
            res.json({success: true, user: user})
        })
        .catch(error => {
            res.json({success: false, error: error})
        })
       
    }

}

module.exports = ActivitiesControlador