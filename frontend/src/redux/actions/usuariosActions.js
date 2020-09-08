//aca voy a poner las diferentes acciones que quiero hacer, le pongo dos 

const { default: Axios } = require("axios")

//paramentros para despachar y para obtener el estado actual del state, despacho las acciones a los reducers
const usuariosActions = {
   nuevoUsuarios: nuevoUsuario => {
       return async (dispatch, getState) => {
            const respuesta = await Axios.post('http://127.0.0.1:4000/api/register', nuevoUsuario)
            if (!respuesta.data.success) {
               alert(respuesta.data.error)
            }else{
               dispatch({
                type: 'LOG_USUARIO',
                payload: {
                   user: respuesta.data.user,
                   success: respuesta.data.success
                }
            })
            }    
       }
    },

    loguearUsuario: usuario => {
      return async (dispatch, getState) => {
         const respuesta = await Axios.post('http://127.0.0.1:4000/api/logIn', usuario)
         if (!respuesta.data.success){
            alert(respuesta.data.mensaje)
         } else{
            dispatch({
               type: 'LOG_USUARIO',
               payload: {
                  user: respuesta.data.user,
                  success: respuesta.data.success
               }
           })
         }
      }

    },

    desloguearUsuario: () => {
      return  (dispatch, getState) => {
         dispatch({
            type: 'DESLOGUEAR'
      })
   }
  }
}

export default usuariosActions
