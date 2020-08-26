const Activity = require("../models/Activity")

const ActivitiesControlador ={
    listaActivities: async (req,res) => {
       const lista = await Activity.find()
        res.json({
            success:true,
            Activities: lista
        })
    },

  

    nuevoActivity: (req,res) => {
        const{Activities, cityId} = req.body

        const nuevoItinerario = new Activity({
            Activities,
            cityId
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