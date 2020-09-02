const initialState = {
    //poner aca mi state de usuarios
}
//mi reducer recibe dos parametros, el store(que es state, 
//le llega el estado actual de mi store) (le pongo un valor 
//por defecto  mi state, que cuando se cargue sea igual a mi initial state)y lo que le manda la accion

const initialState = {
    usuarios:[]
}

const usuariosReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'NUEVO_USUARIO': 
            return{
                ...state,  //no se sobreescribe el state con los...
                tareas:[...state.usuarios, action.payload] //agrego los ...state.usuario para no sobreescribir lo que ya esta en el array
            }
         default:
             return state //retorna el state tal como esta, no hace nada
     }
}

export default usuariosReducer