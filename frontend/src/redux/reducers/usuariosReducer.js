
//mi reducer recibe dos parametros, el store(que es state, 
//le llega el estado actual de mi store) (le pongo un valor 
//por defecto  mi state, que cuando se cargue sea igual a mi initial state)y lo que le manda la accion

const initialState = {
    usuario:"",
    foto:"",
    success: false

}

const usuariosReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'LOG_USUARIO': 
            return{
                ...state,  //no se sobreescribe el state con los...
                usuario: action.payload.user.usuario, //agrego los ...state.usuario para no sobreescribir lo que ya esta en el array
                foto: action.payload.user.foto,
                success: action.payload.success
            }

         case 'DESLOGUEAR': 
         return{
            ...state,
            ...initialState
         }

    
         default:
             return state //retorna el state tal como esta, no hace nada
     }
}

export default usuariosReducer