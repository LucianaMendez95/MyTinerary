const itinerario = require("../models/itinerario")
const Usuario = require("../models/Usuario")


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
       
    },

    nuevoComentario: async(req,res) => {
        const modificacion = req.body
       const agregarcomentario = await itinerario.findOneAndUpdate({_id: req.params.id}, {$push:{comentarios:modificacion}})
        res.json({success:true})  
        },

        
    modificarcomentario: async(req,res) => {
        const {nuevoComentario, indexComentario} = req.body
        const itinerarioViejo = await itinerario.findOne({ _id : req.params.id})
        //res.json({success:true})  
        //backend/comentarioeditar/ID
               
        itinerarioViejo.comentarios.map((comentario, index) => {
                    if(index == indexComentario) {
                        comentario.comentario = nuevoComentario.comentario
                        console.log(comentario)
                        
                    }
                })
                //console.log(itinerarioViejo)

                const itinerarioModificado = await itinerario.findOneAndUpdate(
                    { _id : req.params.id },
                    {
                        hashtag: itinerarioViejo.hashtag,
                        comentarios: itinerarioViejo.comentarios,
                        title: itinerarioViejo.title,
                        profilePic: itinerarioViejo.profilePic,
                        rating: itinerarioViejo.rating,
                        duration: itinerarioViejo.duration,
                        price: itinerarioViejo.price,
                        cityId: itinerarioViejo.cityId
                    },
                    { returnNewDocument : true }
                )
                
                res.json({
                    itinerarioModificado
                })
         },

         eliminarcomentario: async(req,res) => {
            let {infoindex} = req.body

            const itinerarioViejo = await itinerario.findOne({ _id : req.params.id})
           
            itinerarioViejo.comentarios.splice(infoindex, 1)
            console.log(req.body)
                    
                    const itinerarioModificado = await itinerario.findOneAndUpdate(
                        { _id : req.params.id },
                        {
                            hashtag: itinerarioViejo.hashtag,
                            comentarios: itinerarioViejo.comentarios,
                            title: itinerarioViejo.title,
                            profilePic: itinerarioViejo.profilePic,
                            rating: itinerarioViejo.rating,
                            duration: itinerarioViejo.duration,
                            price: itinerarioViejo.price,
                            cityId: itinerarioViejo.cityId
                        },
                        { returnNewDocument : true }
                    )
                    
                    res.json({
                        itinerarioModificado
                    }) 
             },

             sumarlike: async(req,res) => {
                const {like, token, usuario} = req.body
               await itinerario.findOneAndUpdate({_id: req.params.id}, {rating:like})
               res.json({success:true})  

               await Usuario.findOneAndUpdate({usuario: usuario}, {$push:{likeados:token}})
               console.log(usuario)

                res.json({success:true})  
                },

             restarlike: async(req,res) => {
                 const {like, token, usuario} = req.body
                 await itinerario.findOneAndUpdate({_id: req.params.id}, {rating:like})
                 res.json({success:true})  

                 await Usuario.findOneAndUpdate({usuario: usuario}, {$push:{likeados:token}})
                 res.json({success:true})  
                }

      
    }

module.exports = itinerariosControlador