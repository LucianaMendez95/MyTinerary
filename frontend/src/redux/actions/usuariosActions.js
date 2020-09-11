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
                   token: respuesta.data.token,
                   foto: respuesta.data.foto,
                   usuario: respuesta.data.usuario,
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
                  token: respuesta.data.token,
                  usuario: respuesta.data.usuario,
                  foto: respuesta.data.foto,
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
  },

  forcedLogIn: tokenLS => {
   return async (dispatch, getState) => {
      const respuesta = await Axios.get('http://127.0.0.1:4000/api/verificarToken', {
         headers: {
            Authorization: `Bearer ${tokenLS}`
         }
      })
      if(respuesta.data.success){
         dispatch({
            type: 'LOG_USUARIO',
            payload: {token: tokenLS, usuario: respuesta.data.usuario, foto: respuesta.data.foto, success:respuesta.data.success}
         })
      }
}
},

}

export default usuariosActions



