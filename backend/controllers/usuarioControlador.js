const Usuario = require("../models/Usuario")
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const usuarioControlador ={

    nuevoUsuario: async(req,res) => {
       
        const{nombre, apellido, usuario, password, mail, foto, pais} = req.body

        const passwordhash = bcryptjs.hashSync(password, 10)
        const userExists = await Usuario.findOne({usuario: usuario})
        if(userExists){
        res.json({success: false, error: "Please log in"})

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
            var user = await newuser.save()
            jwt.sign({...newuser}, proccess.env.SECRETORKEY, {}, (error, token) =>{
                if(error){
                    res.json({success: false, error:"An error has occurred"})
                }else {
                    res.json({success:true, token, usuario:user.usuario, foto:user.foto})
                }
           })
           
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
                //generar token
                jwt.sign({...userExists}, process.env.SECRETORKEY, {}, (error, token)=>{
                    if(error){
                        res.json({success: false, error:"An error has occurred"})
                    }else {
                        res.json({success:true, token, usuario:userExists.usuario, foto:userExists.foto})
                    }
                })
            }
        }

    },


    verificarToken: (req, res)=> {
        const {usuario, foto} = req.user
        res.json({success: true, usuario, foto})
    }
    
    }

module.exports = usuarioControlador