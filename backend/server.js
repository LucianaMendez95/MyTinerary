const express = require("express")
const cors = require("cors")
const rutas = require("./routes/index")

//ejecutar en dotenv, le enseño lo que sonlasvariables deentornoantes deque seconecte a labase dedatos
require("dotenv").config()
//ejecucion de la base de datos
require("./config/database")


//elemento servidor
const servidor = express()

//middleware funciones que quiero que pasen antes de llegar a la ruta
servidor.use(cors())
servidor.use(express.json())

//rutas, 
servidor.use("/api", rutas)
servidor.listen(4000, () => console.log("app listening on port 4000"))