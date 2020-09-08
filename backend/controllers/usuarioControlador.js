const Usuario = require("../models/Usuario")
const bcryptjs = require ('bcryptjs')

const usuarioControlador ={

    nuevoUsuario: async(req,res) => {
       
        const{nombre, apellido, usuario, password, mail, foto, pais} = req.body

        const passwordhash = bcryptjs.hashSync(password, 10)
        const userExists = await Usuario.findOne({usuario: usuario})
        if(userExists){
        res.json({success: false, error: "The username already exists"})

        }else{
            const newuser = new Usuario({
                nombre,
                apellido,
                usuario,
                password: passwordhash,
                mail,
                foto,
                pais
            })
    
            newuser.save()
            .then(user =>{
                res.json({success: true, user: user})
            })
            .catch(error => {
                res.json({success: false, error: error})
            })
        }
       
    },

    validarDatos: (req,res,next) => {
     if(req.body.nombre === ""){
       res.json({success: false, mensaje:"no se pudo grabr"})
     }else {
      next()
     }
    },


    loguearUsuario: async (req,res) => {
        const{usuario, password} = req.body
        const userExists = await Usuario.findOne({usuario})
        if(!userExists){
            res.json({success: false, error: "Username and/or password is incorrect"})
        }else {
            const passwordCorrect = bcryptjs.compareSync(password, userExists.password)
            if(!passwordCorrect){
                res.json({success: false, error: "Username and/or password is incorrect"})
            }else{
                res.json({success: true, user:userExists})
            }
        }

    }
    
    }

module.exports = usuarioControlador