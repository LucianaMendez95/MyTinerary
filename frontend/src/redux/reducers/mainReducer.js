import ciudadesReducer from "./ciudadesReducer";
import usuariosReducer from "./usuariosReducer";

const {combineReducers} = require("redux");
//import tareasReducer from './usuariosReeducer'

const mainReducer = combineReducers({
      ciudades: ciudadesReducer,
      usuarios: usuariosReducer
})

export default mainReducer