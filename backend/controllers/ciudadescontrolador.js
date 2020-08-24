const Ciudad = require("../models/Ciudad")

const ciudadesControlador ={
    listaCiudades: async (req,res) => {
        //peticion de ciudades a la base de datos
       const lista = await Ciudad.find()
        //devolucion de las ciudades
        res.json({
            success:true,
            ciudades: lista
        })
    },

    nuevaCiudad: (req,res) => {
        //abro la peticion que me llega del frontend y extraigo la informacion 
        const{ciudad, pais, fotoCiudad} = req.body

        //validar los datos 
        //le pido a la base de datos que grabe el nuevo invitado
        const nuevaciudad = new Ciudad({
            ciudad: ciudad,
            pais: pais,
            fotoCiudad: fotoCiudad
        })
        nuevaciudad.save()
        .then(user =>{
            res.json({success: true, user: user})
        })
        .catch(error => {
            res.json({success: false, error: error})
        })
        //responderle al frontend si fue exitoso el grabado delnuevo invitado
       
    }
}

module.exports = ciudadesControlador